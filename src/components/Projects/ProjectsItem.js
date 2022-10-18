
import '../style.css'

export const ProjectsItem = (props) => {

return(
        <div className='p-img-div'>
            <img className="p-img" src={props.data.img} alt="Project's Picture"/>
            <a href={props.data.href} target='_blank' className='p-img-props'>
                <h4 className='p-h4'>{props.data.title}</h4>
                <p className='p-p'>{props.data.description}</p>
                <div className='p-tec-div'>
                    <div className='p-tec'>{props.data.tec1}</div>
                    <div className='p-tec'>{props.data.tec2}</div>
                </div>
            </a>
        </div>
)
}
