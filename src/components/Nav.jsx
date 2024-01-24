import { SiGithub } from 'react-icons/si'
import { BsFacebook,BsLinkedin } from 'react-icons/bs'
import { FaInstagram,FaDiscord } from 'react-icons/fa'
import { RiMenu4Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'

import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
    const location = useLocation()

    const [showNav, setSHowNav] = useState(false)
 
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
                <h1 
                    className="text-white text-5xl font-semibold">
                        Jay Ar Nava
                </h1>
                <h2 
                    className="text-3xl font-semibold text-lightGreen mb-3">
                        Full-stack Web Developer
                </h2>
                <p 
                    className="text-lg text-slate-400">
                        I find technology fascinating and love creating websites by putting pieces together. I'm dedicated to learning and always finding fresh ways to improve.
                </p>
        </div>
        <div className="lg:flex hidden flex-col items-start w-full gap-5 text-slate-400 uppercase">
                {/* <div 
                    className="group flex items-center gap-2">
                        <span 
                            className={`h-[1px] border-b-[1px] ${location.pathname === '/' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} group-hover:border-lightGreen transition-all duration-300`}>
                        </span>

                        <NavLink
                            to="/" 
                            className={({isActive}) => isActive ? "text-white":"text-slate-400 group-hover:text-white transition-colors duration-300"}>
                                Home
                        </NavLink>
                </div> */}
                <div 
                    className="group flex items-center gap-2">
                        <span 
                            className={`h-[1px] border-b-[1px] ${location.pathname === '/' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} group-hover:border-lightGreen  transition-all duration-300`}>
                        </span>

                        <NavLink 
                            to="/" 
                            className={({isActive}) => isActive ? "text-white":"text-slate-400 group-hover:text-white transition-colors duration-300"}>
                                About
                        </NavLink>
                </div>
            <div 
                className="group flex items-center gap-2">
                    <span 
                        className={`h-[1px] border-b-[1px] ${location.pathname === '/projects' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} group-hover:border-lightGreen  transition-all duration-300`}>
                    </span>
                    <NavLink 
                        to="/projects"
                        className={({isActive}) => isActive ? "text-white":"text-slate-400 group-hover:text-white transition-colors duration-300"}>
                            Projects
                    </NavLink>
            </div>
                <div 
                    className="group flex items-center w-full gap-2">
                        <span 
                            className={`h-[1px] border-b-[1px] ${location.pathname === '/contact' ? 'border-lightGreen w-[5rem]':'w-[2rem] border-slate-400'} group-hover:border-lightGreen transition-all duration-300`}>
                        </span>
                        <NavLink 
                            to="/contact"
                            className={({isActive}) => isActive ? "text-white":"text-slate-400 group-hover:text-white transition-colors duration-300"}>
                                Contact
                        </NavLink>
                </div>
        </div>
        <div className="flex lg:mb-10 mb-0 items-end w-full gap-3 text-2xl text-slate-400 lg:mt-0 mt-5 h-[2rem]">
                <a  
                    href='https://github.com/zizaaa'
                        className='hover:text-lightGreen hover:mb-2 transition-all duration-300'>
                            <SiGithub/>
                </a>
                <a  
                    href='https://www.facebook.com/jyrnv'
                        className='hover:text-lightGreen hover:mb-2 transition-all duration-300'>
                            <BsFacebook/>
                </a>
                <a  
                    href='https://www.linkedin.com/in/jay-ar-nava-97b7a7223/' 
                        className='hover:text-lightGreen hover:mb-2 transition-all  duration-300'>
                            <BsLinkedin/>
                </a>
                <a  
                    href='https://www.instagram.com/zizatheprogrammer/' 
                        className='hover:text-lightGreen hover:mb-2 transition-all  duration-300'>
                            <FaInstagram/>
                </a>
                <a  
                    href='https://discord.gg/MRr6gaZDJP' 
                        className='hover:text-lightGreen hover:mb-2 transition-all  duration-300'>
                            <FaDiscord/>
                </a>
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