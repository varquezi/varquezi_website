import '../branding.css'
import './comp.css'
import Card from './Card'
import projData from '../assets/projData'

export default function Showcase() {
    const projs = projData.map(proj => {
        return <Card name={proj.name} info={proj.info} tech={proj.tech} link={proj.link} img={proj.img} />
    })
    return(
        <div className='showcase'>
            {projs}
        </div>
    )
}