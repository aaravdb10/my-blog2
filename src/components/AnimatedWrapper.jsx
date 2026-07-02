/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { useTransition } from "../context/TransitionContext";

export default function AnimatedWrapper({ children })
{
    const { allowPageAnimation } = useTransition();
    
    return(
        <motion.div
            initial={{opacity: 0, y: 15}}
            animate={{ opacity: allowPageAnimation ? 1 : 0, y: allowPageAnimation ? 0 : 15 }}
            exit={{opacity: 0, y: -15}}
            transition={{duration: 0.4, ease: "easeInOut"}}
        >
            { children }
        </motion.div>
    );
}