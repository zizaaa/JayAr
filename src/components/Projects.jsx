import { FiExternalLink } from 'react-icons/fi'
import { ProjectList } from '../constants/index'

import { Bounce } from 'react-reveal'

const Projects = () => {


  return (
    <section className="w-full h-full">
      <div className="flex flex-col w-full">
        <h1 className="text-lightGreen uppercase font-semibold text-5xl mb-10">Projects</h1>
          {ProjectList.map((project)=>(
            <Bounce right duration={1500} delay={project.id} key={project.id}>
              <a href={`${project.link}`}
                className="group xs:hover:bg-[rgba(255,255,255,0.09)] xs:hover:drop-shadow-md transition-all duration-300 w-full flex xl:flex-row lg:flex-col sm:flex-row flex-col gap-5 p-5 rounded-lg mb-6 xs:bg-transparent bg-[rgba(255,255,255,0.09)]">
                      <div className="w-[10rem] mt-2">
                        <img src={project.imgLink}/>
                      </div>
                      <div className='flex-1'>
                        <p className='flex items-center text-slate-400 text-xl mb-3 gap-2 group-hover:text-lightGreen transition-all duration-300 font-semibold'>
                          {project.title}
                          <FiExternalLink/>
                        </p>
                        <p className="text-slate-400">
                          {project.desk}
                        </p>

                        <div className="flex gap-3 mt-3 flex-wrap">
                          {project.techUsed.map((tech,index)=>(
                              <p key={index} className='bg-[rgba(3,250,110,0.42)] text-lightGreen px-2 rounded-full text-[15px] text-center uppercase flex items-center'>{tech}</p>
                          ))}
                        </div>
                      </div>
              </a>
            </Bounce>
          ))}
        </div>
    </section>
  )
}

export default Projects