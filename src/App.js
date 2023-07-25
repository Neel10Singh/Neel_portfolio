import { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import PageFace from './components/PageFace'
import About from './components/About'
import Scrolltotop from './components/Scrolltotop'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App({}) {
  useEffect(() => {
    const loader = document.getElementById('loader')
    // const hideLoader = () => loader.classList.add('loader--hide')
    // hideLoader()
  }, [])
  return (
    <div className='App'>
      {/* colors rgb(36, 39, 52) rgb(42, 45, 58) rgb(184, 176, 200)*/}
      <Navbar />
      <PageFace />
      <About />
      <Skills />
      <Scrolltotop />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
