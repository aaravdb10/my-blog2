import styled from "styled-components";
import { useState, useEffect } from "react";

const TransitionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  background: transparent;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${props => props.$isActive ? 'all' : 'none'};
  visibility: ${props => props.$isActive ? 'visible' : 'hidden'};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    transform: translateY(${props => {
      if (props.$phase === 'hidden') return '100%';
      if (props.$phase === 'entering') return '100%';
      if (props.$phase === 'covering') return '0%';
      if (props.$phase === 'showing') return '0%';
      if (props.$phase === 'exiting') return '-100%';
      return '100%';
    }});
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 1;
  }
`;

const BrandName = styled.h1`
  color: #ffffff;
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 600;
  margin: 0;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.8s ease, transform 0.8s ease;
  position: relative;
  z-index: 2;
`;

let transitionCallback = null;

export const triggerPageTransition = (callback) => {
  transitionCallback = callback;
  window.dispatchEvent(new CustomEvent('triggerPageTransition'));
};

export default function PageTransition() {
  const [phase, setPhase] = useState('hidden'); // hidden, entering, covering, showing, exiting
  const [brandVisible, setBrandVisible] = useState(false);

  useEffect(() => {
    const handleTransition = () => {
      // Lock body scroll
      document.body.classList.add('transitioning');
      
      // Emit transition start event
      window.dispatchEvent(new CustomEvent('transitionStart'));
      
      // Phase 1: Start transition - make overlay visible
      setPhase('entering');
      
      // Phase 2: Black screen slides down from top to cover entire page
      setTimeout(() => {
        setPhase('covering');
      }, 50);
      
      // Phase 3: Once covered, show brand name and navigate
      setTimeout(() => {
        setPhase('showing');
        setBrandVisible(true);
        
        // Navigate to new page while screen is covered
        if (transitionCallback) {
          transitionCallback();
          transitionCallback = null;
        }
      }, 1050);
      
      // Phase 4: Fade out brand name
      setTimeout(() => {
        setBrandVisible(false);
      }, 2200);
      
      // Phase 5: Black screen slides up from bottom, revealing new page
      setTimeout(() => {
        setPhase('exiting');
      }, 2800);
      
      // Phase 6: Complete transition
      setTimeout(() => {
        setPhase('hidden');
        // Unlock body scroll
        document.body.classList.remove('transitioning');
        // Emit transition end event
        window.dispatchEvent(new CustomEvent('transitionEnd'));
      }, 3800);
    };

    window.addEventListener('triggerPageTransition', handleTransition);
    
    return () => {
      window.removeEventListener('triggerPageTransition', handleTransition);
    };
  }, []);

  return (
    <TransitionOverlay $isActive={phase !== 'hidden'} $phase={phase}>
      <BrandName $isVisible={brandVisible}>iWrite</BrandName>
    </TransitionOverlay>
  );
}
