import { ButtonFrame } from '../../assets/svgs/global'
import './landingPage.scss'

const LandingPage = () => {

    return (
        <div className='pageContainer'>
            <video className='heroVideo'>
                <source src="./videos/Sequence01.mp4" type="video/mp4" media="screen and (min-width: 768px)" />
                <source src="./videos/Sequence02.mp4" type="video/mp4" media="screen and (max-width: 767px)" />
            </video>

            <div className='content'>
                <div className='controls'>
                    <a href="https://thewinwinsociety.com/thesis" target='_black'>
                        <button>Thesis</button>
                    </a>
                    <a href="https://thewinwinsociety.com/join" target='_black'>
                        <button>Join</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage