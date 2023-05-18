import '../branding.css'
import './comp.css'
import Card from './Card'

export default function Showcase() {
    return(
        <div className='showcase'>
            <Card name="OCT Scraper" tech= "Python" link="https://github.com/varquezi/OCT_Scraper" info="i could never find the right way to tell you, have you noticed i've been gone" img="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"/>
        </div>
    )
}