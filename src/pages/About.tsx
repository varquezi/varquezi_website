import './pages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import resume from '../assets/varquezi_resume_may_2023.pdf'

export default function About() {
    return(
        <section id="about" className="top">
            <div className='flexrr'>
                <div className='contentl'>
                    <div className='title c3'><span className='ul'>earth to ivan</span> 🌎
                    </div>
                        
                    <div className='text f1 c0'>
                        i'm <span className="f1 c3"> ivan</span>!
                        currently, i'm an MCS student at UofT looking for internship opportunities in <span className='f1 c3'>data and full stack web development</span>.
                        as of right now, i'm a <a href="https://utm.calendar.utoronto.ca/course/csc263h5" target="_blank"><span className='f1 ul c3'>research assistant for CSC263</span></a>, and a <a href="https://mcss.club" target="_blank"><span className='f1 ul c3'>marketing associate for the Mathematics and Computational Sciences Society</span></a> at UTM.
                        aside from cs and stats, i'm also super into media production (it's actually partially how i picked up coding in the first place).
                        <br/>you can find me at the links below, or keep scrolling to see some stuff i've worked on!
                    </div>

                    <div className='links'>
                        <a href ="https://www.linkedin.com/in/ivanvarquez/" target="_blank">< FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                        <a href ="https://github.com/varquezi" target="_blank">< FontAwesomeIcon icon={faGithub} className='icon' /></a>
                        <a href ="https://www.instagram.com/ivanvarq/" target="_blank">< FontAwesomeIcon icon={faInstagram} className='icon' /></a>
                        <a href ={resume} target="_blank">< FontAwesomeIcon icon={faFile} className='icon' /></a>
                    </div>
                </div>
                <div className='profilewrap'>
                    <div className='profile' />
                </div>
            </div>
        </section>
    )
}