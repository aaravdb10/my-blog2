import { createContext, useContext, useState, useEffect } from 'react';

const TransitionContext = createContext();

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    return { isTransitioning: false, allowPageAnimation: true };
  }
  return context;
};

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [allowPageAnimation, setAllowPageAnimation] = useState(false);

  useEffect(() => {
    const handleTransitionStart = () => {
      setIsTransitioning(true);
      setAllowPageAnimation(false);
    };

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      // Allow page animations after transition completes
      setTimeout(() => {
        setAllowPageAnimation(true);
      }, 100);
    };

    window.addEventListener('transitionStart', handleTransitionStart);
    window.addEventListener('transitionEnd', handleTransitionEnd);

    // Allow animations on initial page load
    setAllowPageAnimation(true);

    return () => {
      window.removeEventListener('transitionStart', handleTransitionStart);
      window.removeEventListener('transitionEnd', handleTransitionEnd);
    };
  }, []);

  return (
    <TransitionContext.Provider value={{ isTransitioning, allowPageAnimation }}>
      {children}
    </TransitionContext.Provider>
  );
};
