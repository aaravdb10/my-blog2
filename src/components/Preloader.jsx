import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState} from "react";

const LoaderContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2000;
`;

const LoaderText = styled(motion.h1)`
    color: white;
    font-size: 3.5rem;
    font-weight: 400;
    letter-spacing: 4px;
    font-family: 'Brush Script MT', 'Lucida Calligraphy', 'Lucida Handwriting', cursive;
    font-style: italic;
    margin-bottom: 2rem;
`;

const ProgressBarContainer = styled.div`
    width: 300px;
    height: 3px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
    height: 100%;
    background: linear-gradient(90deg, #fff, #888);
    border-radius: 10px;
`;

export default function Preloader({ setLoadingComplete })
{
    const [show, setShow] = useState(true);

    useEffect(() =>  {
        const timer = setTimeout(() =>  {

            setShow(false);
            setLoadingComplete(true);
        }, 3000);
    return() =>  clearTimeout(timer);
 }, [setLoadingComplete]);

 return (
    <AnimatePresence>
        {show &&  (
            <LoaderContainer
                initial = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}
                transition = {{ duration: 1 }}
            >
                <LoaderText 
                    initial={{opacity: 0, y:10}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: 1}}
                >
                    iWrite
                </LoaderText>
                
                <ProgressBarContainer>
                    <ProgressBar
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.8, ease: "easeInOut" }}
                    />
                </ProgressBarContainer>
            </LoaderContainer>
        )}
    </AnimatePresence>
 );
}