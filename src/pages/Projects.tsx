import './pages.css'
import Showcase from '../components/Showcase'
import { FillRight } from '../assets/animations/FillRight'
import { SlideReveal } from '../assets/animations/SlideReveal'

export default function Experience() {
    return(
        <section id="projects">
            <div className='flexr'>
            <div className='contentr'>
            <FillRight><div className='title c3'>🌙 <span className='ul'>one small step</span></div></FillRight>
            <SlideReveal><div className='text f1 c0 borderb pb'>a mix of projects i've worked on either for school, work, or personal development</div></SlideReveal>
            </div>
            </div>
            < Showcase />
        </section>
    )
}