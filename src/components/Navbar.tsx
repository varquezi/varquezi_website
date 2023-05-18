import '../branding.css';
import './comp.css';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    let { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]);
    

    return(
    <>
        <motion.div className='barbg' style={{ x }}></motion.div>
        <nav id="bar">
            <motion.div style={{position: "fixed", scaleX: scrollYProgress}}></motion.div>
            <Link to="landing" smooth={true} duration={500}><div id='logo'>☕&nbsp;<span className="logotext">varquezi</span></div></Link>
            <div>
                <ul id='navbar' className={clicked ?  '#navbar active':'#navbar'}>
                    <Link to="landing" smooth={true} duration={500}><li onClick={handleClick}>🚀</li></Link>
                    <Link to="about" smooth={true} duration={500}><li onClick={handleClick}>about</li></Link>
                    <Link to="projects" smooth={true} duration={500}><li onClick={handleClick}>projects</li></Link>
                    <Link to="contact" smooth={true} duration={500}><li onClick={handleClick}>contact</li></Link>
                </ul>
                <div id="mobile">
                    <button type="button" onClick={handleClick}>{clicked ? "❌": "🥛" }</button>
                </div>
            </div>
        </nav>
    </>
    );
}