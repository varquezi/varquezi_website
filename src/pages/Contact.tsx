import './pages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import resume from '../assets/varquezi_resume_may_2023.pdf'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    return(
        <section id="contact">
            <div className='flexc'>
            <div className='contentm'>
            <div className='title c3'><span className='ul'>beam me up scotty</span> 🛸</div>
            <div className='text f1 c0'>
                send me an email, let's get in touch!</div>
            </div>
            <div className='mailwrap'>
            <a href = "mailto: ivan.varquez@mail.utoronto.ca"><button>< FontAwesomeIcon icon={faEnvelope}  className='icon'/>send message</button></a>
            </div>
            <footer className='f1 c0'>
                built with React by Ivan Varquez
                <div className='linksf'>
                    <a href ="https://www.linkedin.com/in/ivanvarquez/" target="_blank">< FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                    <a href ="https://github.com/varquezi" target="_blank">< FontAwesomeIcon icon={faGithub} className='icon' /></a>
                    <a href ="https://www.instagram.com/ivanvarq/" target="_blank">< FontAwesomeIcon icon={faInstagram} className='icon' /></a>
                    <a href ="https://www.youtube.com/@qarvingsi" target="_blank">< FontAwesomeIcon icon={faYoutube} className='icon' /></a>
                    <a href ={resume} target="_blank">< FontAwesomeIcon icon={faFile} className='icon' /></a>
                </div>
            </footer>
            </div>
        </section>
    )
}