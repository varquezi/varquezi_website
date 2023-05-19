import '../branding.css'
import './comp.css'
import { SlideReveal } from '../assets/animations/SlideReveal'

export default function Card(props: any){
    return(
        
        <a href={props.link} target="_blank">
        <div className='cardwrap'>
        <SlideReveal>
        <div className='card f1 c0' style={{backgroundImage: `url(${props.img})`}}>        
            
            <div className="coverlay">
                <div className="ccontent">
                    <div className='ctitle f0 c3 ul'>{props.name}</div>
                    <div className='ctext f1 c3'>{props.info}</div>
                    <div className='ctech f1 it c0'>{props.tech}</div>
                </div>
            </div>
        </div>
        </SlideReveal>
        </div>
        </a>
        
    )
}