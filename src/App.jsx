import Layout from "./pages/Layout"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Project from "./pages/Projects"
// import Certification from "./pages/Certification"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <main className="lg:h-screen h-auto bg-darkBlue w-full overflow-hidden">
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/* <Route index element={<Hero/>}/> */}
                <Route index element={<About/>}/>
                <Route path="/projects" element={<Project/>}/>
                {/* <Route path="/certification" element={<Certification/>}/> */}
                <Route path="/contact" element={<Contact/>}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App
