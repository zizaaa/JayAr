import React from 'react'

import { FiExternalLink } from 'react-icons/fi'

function ProjectsCard({project}) {
    return (
        <a href={`${project.link}`}
            className="group xs:hover:bg-[rgba(255,255,255,0.09)] xs:hover:drop-shadow-md transition-all duration-200 w-full flex xl:flex-row lg:flex-col sm:flex-row flex-col gap-5 p-5 rounded-lg mb-6 xs:bg-transparent bg-[rgba(255,255,255,0.09)] lg:opacity-50 lg:hover:opacity-100"
        >
            <div className="w-[10rem] mt-2">
                <img src={project.imgLink}/>
            </div>

            <div className='flex-1'>
                <p 
                className='flex items-center text-slate-400 text-xl mb-3 gap-2 group-hover:text-lightGreen transition-all duration-300 font-semibold'
                >
                    {
                        project.title
                    }
                    {
                        project.link != '' ?
                        <span
                            className='group-hover:group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300'
                        >
                            <FiExternalLink/>
                        </span>
                        :
                        null
                    }
                </p>
                <p className="text-slate-400">
                    {
                        project.desk
                    }
                </p>

                <div className="flex gap-3 mt-3 flex-wrap">
                    {
                        project.techUsed.map((tech,index)=>(
                            <p 
                            key={index} 
                                className='bg-[rgba(3,250,110,0.42)] text-lightGreen px-2 rounded-full text-[15px] text-center uppercase flex items-center'
                            >
                            {
                                tech
                            }
                            </p>
                        ))
                    }
                </div>
            </div>
        </a>
    )
}

export default ProjectsCard