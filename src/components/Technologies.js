
import './style.css'
import html from './imgs/HTML logo.png'
import css from './imgs/CSS logo.png'
import js from './imgs/Javascript logo.png'
import react from './imgs/React Logo.png'

export const Technologies = () => {
    return(
        <section id='Technologies' className='technologies'>
            <div className='t-h2-div'>
                <h2 className='t-h2'>Technologies</h2>
            </div>
                <p className='t-p'>Languages, Frameworks & Libraries</p>
            <div className='t-tec-div'>
                <div className='t-tec'>
                    <h5 className='t-h5'>Html</h5>
                    <img className='t-img' src={html} alt="HTML Logo" />
                </div>
                <div className='t-tec'>
                    <h5 className='t-h5'>Css</h5>
                    <img className='t-img' src={css} alt="CSS Logo" />
                </div>
                <div className='t-tec'>
                    <h5 className='t-h5'>Javascript</h5>
                    <img className='t-img' src={js} alt="Javascript Logo" />
                </div>
                <div className='t-tec'>
                    <h5 className='t-h5'>React JS</h5>
                    <img className='t-img' src={react} alt="React JS Logo" />
                </div>
            </div>
        </section>
    )
}