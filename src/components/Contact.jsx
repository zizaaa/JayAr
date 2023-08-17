import { Bounce } from 'react-reveal'

const Contact = () => {
  return (
    <section className="w-full h-full lg:mb-0 mb-24">
      <div className="flex flex-col items-center justify-center text-center h-full w-full overflow-hidden">
        <h1 className="text-lightGreen text-4xl font-semibold">Let's Connect</h1>
        <p className="text-slate-400 text-xl">"Let's Connect! Feel free to reach out by clicking the button below. I look forward to hearing from you!"</p>
        
        <Bounce bottom duration={1200}>
          <a href="mailto:winfourteen@gmail.com" className="bg-[rgba(3,250,110,0.42)] text-lightGreen mt-10 px-5 py-3 rounded-lg drop-shadow-lg fonts">Message Me!</a>
        </Bounce>
      </div>
    </section>
  )
}

export default Contact