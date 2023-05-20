import '../branding.css'
import './comp.css'
import { useState } from 'react'
import Card from './Card'
import projData from '../assets/projData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { SlideReveal } from '../assets/animations/SlideReveal'
import { FillRight } from '../assets/animations/FillRight'
import { FillUp } from '../assets/animations/FillUp'

export default function Showcase() {

    const [expanded, setExpanded] = useState(false);
    const dataSlice = expanded ? projData : projData.slice(0, 1);

    const projs = dataSlice.map(proj => {
        return <Card name={proj.name} info={proj.info} tech={proj.tech} link={proj.link} img={proj.img} />
    })
    return(
        <div className='showcase'>
            {projs}
            <SlideReveal>
            <div className='card' onClick={() => setExpanded(!expanded)}>
                <FillRight delay={0}><span className="text">{expanded ? "show less": "show more"}</span></FillRight>
                <FillUp delay={0}>{expanded ? <FontAwesomeIcon className="cicon" icon= {faMinus} />: <FontAwesomeIcon className="cicon" icon= {faPlus} />}</FillUp>
            </div>
            </SlideReveal>
        </div>
    )
}