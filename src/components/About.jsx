import { Bounce } from 'react-reveal'

const About = () => {

  return (
    <div className="h-full flex flex-col items-start lg:px-10 px-0">
      <h1 className="text-lightGreen uppercase font-semibold text-5xl mb-10">About</h1>
      <div className="flex flex-col w-full">
      <Bounce left duration={1200}>
        <p  
            className="text-xl text-slate-400 indent-10 mb-5">
                Hello! I'm <span className="text-lightGreen">Jay Ar Nava</span> from Bicol, working towards my goal of becoming a <span className="text-lightGreen">Full-stack Web Developer</span>. Currently, I'm focusing on and enhancing my front-end skills. I recently graduated as a <span className="text-lightGreen">Fullstack Web Dev from KodeGo Bootcamp</span>, where I further improved my front-end skills and gained exposure to other technologies.
        </p>
      </Bounce>
      <Bounce right duration={1200}>
        <p 
            className="text-xl text-slate-400 indent-10 mb-5">
                  I have a diverse skill set that holds considerable potential. In my role as a web developer, I dedicate substantial effort to swiftly fashioning refined solutions. I am well-versed in <span className="text-lightGreen">HTML</span>, <span className="text-lightGreen">CSS</span>, <span className="text-lightGreen">JavaScript</span>, <span className="text-lightGreen">Tailwind CSS</span>, <span className="text-lightGreen">Bootstrap</span>, and <span className="text-lightGreen">ReactJS</span>. Furthermore, I possess a working understanding of <span className="text-lightGreen">Laravel</span>, <span className="text-lightGreen">Node.js</span>, and MongoDB. My proficiency extends to both autonomous project management and effective teamwork.
          </p>
      </Bounce>
    </div>

      {/* computer journey */}
      <div className="flex flex-col mt-10 w-full">
        <h1 className="text-lightGreen uppercase font-semibold text-4xl mb-7">My computer journey</h1>
        <Bounce right duration={1200}>
          <p 
              className="text-xl text-slate-400 indent-10 mb-10">
                  In 2013, my parents brought a desktop to our home, but we did not have internet at that time. My favorite programs were Microsoft Paint and Microsoft PowerPoint, as those were the programs I always used. Around 2015, my parents brought a laptop that introduced me to Encarta Kids. I started programming in 2021, and my first programming language was Python. Fast forward to 2022, I created an account on GitHub and started learning other programming languages like Javascript.
          </p>
        </Bounce>
      </div>
    </div>
  )
}

export default About