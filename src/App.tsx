import './App.css'
import Navbar from './components/Navbar.tsx'
import Landing from './pages/Landing.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
