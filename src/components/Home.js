
import './style.css'
import me from './imgs/Foto CV.jpeg'

export const Home = () => {
    return(
        <section id='Home' className='home'>
            <div className='h-div-info'>
                <div className='h-h1-div'>
                    <h1 className='h-h1'>Lautaro</h1>
                    <h1 className='h-h1 green'>Ocampo</h1>
                </div>
                <div className='h-h3-div'>
                    <h3 className='h-h3'>Front-end Developer</h3>
                </div>
            </div>
            <div className='h-img-div'>
                <img src={me} className="h-img"></img>
            </div>
        </section>
    )
}