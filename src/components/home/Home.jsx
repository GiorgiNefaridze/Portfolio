import Avatar from '../../images/avatar.png';
import GifOfStars from '../../images/gifOfStar.gif'
import Portfolio from '../../assets/Resume.pdf';
import Resume from '../../images/resume.png';
import './Home.scss'

export default function Home() {
  return (
    <div className='home-container'>
        <div className='home-container-inner'>
            <div className='home-container-inner-left'>
                <span>Hi, I'm Giorgi</span>
                <p>Beginner Front-end Developer.</p>
                <a href={Portfolio} download>Download CV <img src={Resume} alt="resume" /></a>
            </div>
            <div className='home-container-inner-right'>
                <img src={Avatar} alt='avatar' />
            </div>
        </div>
        <img src={GifOfStars} className="gitofstars" alt="gif" />
    </div>
  )
}