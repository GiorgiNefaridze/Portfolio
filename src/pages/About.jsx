import { languages } from '../Data/languages'
import Gif from '../images/200w.gif'
import '../styles/About.scss'

export default function About() {
    return (
        <div className='about-container'>
            <div className='about-container-wrapper'>
                <img src={Gif} alt="gif" />
                <div>
                    <p>Hello I'm Giorgi Nefaridze 17 years old begginer front-end developer.In 2020,
                        I became interested in web development and gained some experience.I want to
                        develop myself as a web developoer and I am still looking forward the
                        opportunity.I have been worked on some projects to develop practice.
                        I'm building different type of sites, sometimes there may be some obstacles but it's
                        good feel when you solve it.
                    </p>
                    <div className='social-media'>
                        <a class="btn btn-primary" style={{backgroundColor:"#4267B2"}} href="https://www.facebook.com/profile.php?id=100028579554170" role="button">
                            <i class="fab fa-facebook me-2"></i>
                        facebook</a>
                        <a class="btn btn-primary" style={{backgroundColor:"#171515"}} href="https://github.com/GiorgiNefaridze?tab=repositories" role="button">
                            <i class="fab fa-github me-2"></i>
                        GitHub</a>
                    </div>
                </div>
            </div>
            <div className='about-container-skills'>
                <span>Skills</span>
                <div className='about-container-skills-inner'>
                    {languages.map((item,index) => (
                        <div key={index} className='about-container-skills-inner-languages'>
                            <img src={item.poster} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}