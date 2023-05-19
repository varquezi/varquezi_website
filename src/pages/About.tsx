import './pages.css'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { FillRight } from '../assets/animations/FillRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import resume from '../assets/varquezi_resume_may_2023.pdf'

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

    return(
        <section id="about" className="top">
            <div className='flexrr' >
                <div className='contentl'>
                    <div className='title c3' ref={ref}>
                        <FillRight>
                        <span className='ul'>earth to me</span> 🌎
                        </FillRight>
                    </div>
                    <div className='text f1 c0 borderb pb'>
                        <motion.div
                            variants={{
                                hidden: {opacity: 0, y: 10},
                                visible: {opacity: 1, y: 0}
                            }}
                            initial= "hidden"
                            animate= {isInView ? "visible":"hidden"}
                            transition= {{ duration: 0.4, delay: 0.3 }}>
                        <span className='f1'>
                        hi, i'm <span className="f1 c3"> ivan</span>!
                        i'm an MCS student at UofT currently looking for internship opportunities in <span className='f1 c3'>data and full stack web development</span>.
                        <br/>as of right now, i'm a <a href="https://utm.calendar.utoronto.ca/course/csc263h5" target="_blank"><span className='f1 ul c3'>research assistant for CSC263</span></a>, and a <a href="https://mcss.club" target="_blank"><span className='f1 ul c3'>marketing associate for the Mathematics and Computational Sciences Society</span></a> at UTM.
                        <br/>aside from cs and stats, i'm also super into media production (it's actually partially how i picked up coding in the first place).
                        <br/>you can either find me napping with my dog <span className='f1 c3'>Sol 🐶 </span>(who inspired the whole space theme of my website), or at the <span className='f1 c3'>links below</span>
                        <br/>keep scrolling to see some stuff i've worked on!
                        </span>
                        </motion.div>
                    </div>

                    <div className='links'>
                        <motion.div variants={{hidden: {opacity: 0, y: 25},visible: {opacity: 1, y: 0}}} initial= "hidden" animate= {isInView ? "visible":"hidden"} transition= {{ duration: 0.4, delay: 0.5 }}>
                        <a href ="https://www.linkedin.com/in/ivanvarquez/" target="_blank">
                            < FontAwesomeIcon icon={faLinkedin} className='icon' />
                        </a>
                        </motion.div>
                        <motion.div variants={{hidden: {opacity: 0, y: 25},visible: {opacity: 1, y: 0}}} initial= "hidden" animate= {isInView ? "visible":"hidden"} transition= {{ duration: 0.4, delay: 0.52 }}>
                        <a href ="https://github.com/varquezi" target="_blank">
                            < FontAwesomeIcon icon={faGithub} className='icon' />
                        </a>
                        </motion.div>
                        <motion.div variants={{hidden: {opacity: 0, y: 25},visible: {opacity: 1, y: 0}}} initial= "hidden" animate= {isInView ? "visible":"hidden"} transition= {{ duration: 0.4, delay: 0.54 }}>
                        <a href ="https://www.instagram.com/ivanvarq/" target="_blank">
                            < FontAwesomeIcon icon={faInstagram} className='icon' />
                        </a>
                        </motion.div>
                        <motion.div variants={{hidden: {opacity: 0, y: 25},visible: {opacity: 1, y: 0}}} initial= "hidden" animate= {isInView ? "visible":"hidden"} transition= {{ duration: 0.4, delay: 0.56 }}>
                        <a href ="https://www.youtube.com/@qarvingsi" target="_blank">
                            < FontAwesomeIcon icon={faYoutube} className='icon' />
                        </a>
                        </motion.div>
                        <motion.div variants={{hidden: {opacity: 0, y: 25},visible: {opacity: 1, y: 0}}} initial= "hidden" animate= {isInView ? "visible":"hidden"} transition= {{ duration: 0.4, delay: 0.58 }}>
                        <a href ={resume} target="_blank">
                            < FontAwesomeIcon icon={faFile} className='icon' />
                        </a>
                        </motion.div>
                    </div>
                </div>
                <div className='profilewrap'>
                    <motion.div
                            variants={{
                                hidden: {opacity: 0, y: 25},
                                visible: {opacity: 1, y: 0}
                            }}
                            initial= "hidden"
                            animate= {isInView ? "visible":"hidden"}
                            transition= {{ duration: 0.4, delay: 0.1 }}>
                    <div className='profile' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}