import { ProjectList } from '../constants/index'
import ProjectsCard from '../components/cards/ProjectsCard'
import { Link } from 'react-router-dom'
import { MdArrowForward } from "react-icons/md";

const Projects = () => {


  return (
    <section className="w-full h-full">
      <div className="flex flex-col w-full">
          {
            ProjectList.map((project)=>(
              <ProjectsCard 
                project={project}
                key={project.id}
              />
            ))
          }

        <Link 
          to='' 
          className='group text-slate-300 text-lg font-medium flex items-center gap-1 mb-5'
        >
          View Full Project Archive 
          <span className='group-hover:translate-x-3 duration-300 transition-transform'>
            <MdArrowForward />
          </span>
        </Link>
      </div>
    </section>
  )
}

export default Projects