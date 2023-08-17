import { SiGithub } from 'react-icons/si'
import { BsFacebook,BsLinkedin } from 'react-icons/bs'
import { FaInstagram,FaDiscord } from 'react-icons/fa'
import { RiMenu4Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { Bounce,Fade } from 'react-reveal'

import 'aos/dist/aos.css'; 
import Aos from 'aos'

import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Nav = () => {
    const location = useLocation()

    const [showNav, setSHowNav] = useState(false)

    useEffect(()=>{
        Aos.init()
    },[])
 
  return (
    <nav className="flex flex-col items-center lg:justify-between justify-start h-full relative">
        {/* menu button */}
        <div className='lg:hidden block absolute right-0 -top-10'>
            <button onClick={()=>{setSHowNav(showNav ? false:true)}} className={`text-lightGreen text-3xl ${showNav ? 'rotate-180 ':'-rotate-180'} transition-transform duration-300`}>
                {
                    showNav ? <RxCross2/>:<RiMenu4Line/>
                }
            </button>
        </div>

        <div className="w-full">
            <Fade left duration={1000}>
                <h1 
                    className="text-white text-5xl font-semibold">
                        Jay Ar Nava
                </h1>
            </Fade>
            <Fade left duration={1000} delay={200}>
                <h2 
                    className="text-3xl font-semibold text-lightGreen mb-3">
                        Front-end Web Developer
                </h2>
            </Fade>
            <Fade left duration={1000} delay={300}>
                <p 
                    className="text-lg text-slate-300">
                        I find technology fascinating and love creating websites by putting pieces together. I'm dedicated to learning and always finding fresh ways to improve.
                </p>
            </Fade>
        </div>
        <div className="lg:flex hidden flex-col items-start w-full gap-5 text-slate-400 uppercase">
            <Bounce left duration={1500}>
                <div 
                    className="group flex items-center w-full gap-2">
                        <span 
                            className={`h-[1px] border-b-[1px] ${location.pathname === '/' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} transition-all duration-300`}>
                        </span>

                        <Link 
                            to="/" 
                            className={`${location.pathname === '/' ? 'text-white':'text-slate-400 '}`}>
                                Home
                        </Link>
                </div>
            </Bounce>
            <Bounce left duration={1500} delay={100}>
                <div 
                    className="flex items-center w-full gap-2">
                        <span 
                            className={`h-[1px] border-b-[1px] ${location.pathname === '/about' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} transition-all duration-300`}>
                        </span>

                        <Link 
                            to="/about" 
                            className={`${location.pathname === '/about' ? 'text-white':'text-slate-400 '}`}>
                                About
                        </Link>
                </div>
            </Bounce>
            <Bounce left duration={1500} delay={200}>
            <div 
                className="flex items-center w-full gap-2">
                    <span 
                        className={`h-[1px] border-b-[1px] ${location.pathname === '/projects' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} transition-all duration-300`}>
                    </span>
                    <Link 
                        to="/projects"
                        className={`${location.pathname === '/projects' ? 'text-white':'text-slate-400 '}`}>
                            Projects
                    </Link>
            </div>
            </Bounce>
            <Bounce left duration={1500} delay={300}>
                <div 
                    className="flex items-center w-full gap-2">
                        <span 
                            className={`h-[1px] border-b-[1px] ${location.pathname === '/contact' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} transition-all duration-300`}>
                        </span>
                        <Link 
                            to="/contact"
                            className={`${location.pathname === '/contact' ? 'text-white':'text-slate-400 '}`}>
                                Contact
                        </Link>
                </div>
            </Bounce>
        </div>
        <div className="flex lg:mb-10 mb-0 items-start w-full gap-3 text-2xl text-slate-400 lg:mt-0 mt-5">
            <Bounce bottom duration={1500}>
                <a  
                    href='https://github.com/zizaaa'
                        className='hover:text-lightGreen transition-colors duration-300'>
                            <SiGithub/>
                </a>
            </Bounce>
            <Bounce bottom duration={1500} delay={100}>
                <a  
                    href='https://www.facebook.com/jyrnv'
                        className='hover:text-lightGreen transition-colors duration-300'>
                            <BsFacebook/>
                </a>
            </Bounce>
            <Bounce bottom duration={1500} delay={200}>
                <a  
                    href='https://www.linkedin.com/in/jay-ar-nava-97b7a7223/' 
                        className='hover:text-lightGreen transition-colors duration-300'>
                            <BsLinkedin/>
                </a>
            </Bounce>
            <Bounce bottom duration={1500} delay={300}>
                <a  
                    href='https://www.instagram.com/zizatheprogrammer/' 
                        className='hover:text-lightGreen transition-colors duration-300'>
                            <FaInstagram/>
                </a>
            </Bounce>
            <Bounce bottom duration={1500} delay={400}>
                <a  
                    href='https://discord.gg/MRr6gaZDJP' 
                        className='hover:text-lightGreen transition-colors duration-300'>
                            <FaDiscord/>
                </a>
            </Bounce>
        </div>

        {/* drop down */}
        <div className={`lg:hidden flex flex-col items-start w-full gap-5 text-slate-400 uppercase my-10 overflow-hidden ${showNav ? 'border-y-[1px] border-lightGreen py-10 h-[15rem]':'border-y-[0] border-lightGreen py-0 h-[0]'} transition-all duration-300`}>
            <div className="flex items-center w-full gap-2">
                <span 
                    className={`h-[1px] border-b-[1px] ${location.pathname === '/' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} transition-all duration-300`}>
                </span>

                <Link 
                    to="/" 
                    className={`${location.pathname === '/' ? 'text-white':'text-slate-400 '}`}
                    onClick={()=>{setSHowNav(false)}}>
                    
                    Home
                </Link>
            </div>
            <div className="flex items-center w-full gap-2">
                <span 
                    className={`h-[1px] border-b-[1px] ${location.pathname === '/about' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} transition-all duration-300`}>
                </span>

                <Link 
                    to="/about" 
                    className={`${location.pathname === '/about' ? 'text-white':'text-slate-400 '}`}
                    onClick={()=>{setSHowNav(false)}}>
                
                About
                </Link>
            </div>
            <div className="flex items-center w-full gap-2">
                <span 
                    className={`h-[1px] border-b-[1px] ${location.pathname === '/projects' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} transition-all duration-300`}>
                </span>
                <Link 
                    to="/projects"
                    className={`${location.pathname === '/projects' ? 'text-white':'text-slate-400 '}`}
                    onClick={()=>{setSHowNav(false)}}>
                    
                    Projects
                </Link>
            </div>
            <div className="flex items-center w-full gap-2">
                <span 
                    className={`h-[1px] border-b-[1px] ${location.pathname === '/contact' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} transition-all duration-300`}>
                </span>
                <Link 
                    to="/contact"
                    className={`${location.pathname === '/contact' ? 'text-white':'text-slate-400 '}`}
                    onClick={()=>{setSHowNav(false)}}>
                    
                    Contact
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav