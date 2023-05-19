import '../branding.css';
import './comp.css';
import { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { SlideReveal } from '../assets/animations/SlideReveal';

export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    let { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]);
    const { y } = useWindowScroll();
    const controls = useAnimation();

    useEffect(() => {
        if (y > window.innerHeight) {
          controls.start({ backdropFilter: "blur(5px)", backgroundColor: "rgba(147, 120, 99, 0.8)" });
        } else {
          controls.start({ backdropFilter: "blur(0px)", backgroundColor: "rgba(147, 120, 99, 0)"});
        }
    }, [y, controls]);
    
    return(
    <>
        <motion.div className='barbg' style={{ x }}></motion.div>
        <motion.nav id="bar"
            animate={controls}
            transition={{ type: 'tween', duration: 0.05}}
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                height: "4rem"
            }}
            >
            <motion.div style={{position: "fixed", scaleX: scrollYProgress}}></motion.div>
            <SlideReveal delay={0}><Link to="landing" smooth={true} duration={500}><div id='logo'>☕&nbsp;<span className="logotext">varquezi</span></div></Link></SlideReveal>
            <div>
                <ul id='navbar' className={clicked ?  '#navbar active':'#navbar'}>
                    <SlideReveal delay={0.15}><Link to="landing" smooth={true} duration={500}><li onClick={handleClick}>🚀</li></Link></SlideReveal>
                    <SlideReveal delay={0.1}><Link to="about" smooth={true} duration={500}><li onClick={handleClick}>about</li></Link></SlideReveal>
                    <SlideReveal delay={0.05}><Link to="projects" smooth={true} duration={500}><li onClick={handleClick}>projects</li></Link></SlideReveal>
                    <SlideReveal delay={0}><Link to="contact" smooth={true} duration={500}><li onClick={handleClick}>contact</li></Link></SlideReveal>
                </ul>
                <SlideReveal delay={0.15}><div id="mobile">
                     <button type="button" onClick={handleClick}>{clicked ? "❌": "🥛" }</button>
                </div></SlideReveal>
            </div>
        </motion.nav>
    </>
    );
}