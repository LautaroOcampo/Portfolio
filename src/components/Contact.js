
import './style.css'

export const Contact = () => {
    
    return(
        <section id='Contact' className='contact'>
            <div className='c-div'>
                <div className='c-div-L'>
                    <h3 className="c-h3">Contact Me</h3>
                </div>
                <div className='c-div-R'>
                    <p className='c-p'><b>Lautaro Ocampo</b></p>
                    <p className='c-p'>tato.ocampo@live.com.ar</p>
                    <a href='https://github.com/LautaroOcampo'><i className="c-icons fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/lautaro-ocampo-7120a41b4/'><i className="c-icons fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <p className='c-copy'><i className="fa-regular fa-copyright"></i>  All Rights Reserved</p>
        </section>

    )
}