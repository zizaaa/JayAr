import { Fade } from 'react-reveal'

const Hero = () => {
  return (
    <Fade right duration={1000}>
      <div 
        className="w-full flex items-center h-full justify-center pb-10">
          <img src="/hero.svg" className="sm:w-[90%] w-full"/>
      </div>
    </Fade>
  )
}

export default Hero