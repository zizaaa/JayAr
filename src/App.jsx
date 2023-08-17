import Layout from "./components/Layout"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Projects"
// import Certification from "./components/Certification"
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <main className="lg:h-screen h-auto bg-darkBlue w-full overflow-hidden">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Hero/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Project/>}/>
                {/* <Route path="/certification" element={<Certification/>}/> */}
                <Route path="/contact" element={<Contact/>}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App
