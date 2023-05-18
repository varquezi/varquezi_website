import '../branding.css'
import './comp.css'

export default function Card(props: any){
    return(
        <a href={props.link} target="_blank">
        <div className='card f1 c0' style={{backgroundImage: `url(${props.img})`}}>        
            <div className="coverlay">
                <div className="ccontent">
                    <div className='ctitle f1 c3 ul'>{props.name}</div>
                    <div className='ctext f1 c3'>{props.info}</div>
                    <div className='ctech f1 it c3'>{props.tech}</div>
                </div>
            </div>
        </div>
        </a>
    )
}