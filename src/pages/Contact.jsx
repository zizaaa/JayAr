
const Contact = () => {
  return (
    <section className="w-full h-full lg:mb-0 mb-24">
      <div className="flex flex-col items-center justify-center text-center h-full w-full overflow-hidden">
        <h1 className="text-lightGreen text-4xl font-semibold mb-5">Let's Connect</h1>
        <p className="text-slate-400 text-xl">"Let's Connect! Feel free to reach out by clicking the button below. I look forward to hearing from you!"</p>
          <a href="mailto:winfourteen@gmail.com" className="border-2 border-lightGreen text-lightGreen hover:bg-lightGreen hover:text-black transition-all duration-300 mt-10 px-5 py-3 rounded-lg drop-shadow-lg fonts">Email me</a>
      </div>
    </section>
  )
}

export default Contact