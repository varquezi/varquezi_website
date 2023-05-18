import './pages.css';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Landing() {
    let { scrollYProgress } = useScroll();
    
    let stars = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);
    let text = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
    let planet = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
    let belt = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
    let main = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
    

    const inverval = 1000;
    const titles = ["web developer", "data analyst", "designer", "student",<s className='f1 c3 text it'>sleeps a full 8 hours</s>];

    const TextCycle = () => {
        const[currentTextIndex, setCurrentTextIndex] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentTextIndex((currentTextIndex) => (currentTextIndex + 1) % titles.length);
            }, inverval);

            return () => clearInterval(intervalId);
        }, [currentTextIndex, titles.length]);

        return <span className='f1 c3 text it'>{titles[currentTextIndex]}</span>
    };

    return(
        <section id="landing">
            <motion.div style ={{ y: text, position: "absolute"}} className='contentm'>
                    <span className='title c3'>
                    welcome!
                    <br/>my name's
                    <br/><span className='c3 ul'>ivan varquez</span>
                    <br/><span className='f1 c3 text it'>&lt;<TextCycle />&gt;</span>
                    </span>
            </motion.div>
            <motion.div style ={{ y: stars}} className='pimg0'>
            </motion.div>
            <motion.div style ={{ y: planet }} className='pimg1'>
            </motion.div>
            <motion.div style ={{ y: belt }} className='pimg2'>
            </motion.div>

            <motion.div style ={{ y: main }} className='pimg3'>
            </motion.div>
            <div className='pimg4'>
            </div>
        </section>
    )
}