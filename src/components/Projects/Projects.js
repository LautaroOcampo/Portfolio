
import '../style.css'
import {data} from './ProjectsData'
import { ProjectsItem } from './ProjectsItem'

export const Projects = () => {

    return(
        <section id='Projects' className='projects'>
            <h2 className='p-h2'>Projects</h2>
            <div className='p-imgs-div'>
                    {
                        data.map((ele) => {
                            return(
                                <ProjectsItem data={ele}/>
                            )
                        })
                    }
                </div>
        </section>
    )
}