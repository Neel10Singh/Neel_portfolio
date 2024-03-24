import React, { useState } from 'react'
import './Navbar.css'
import navbuttonback from '../images/navbarbuttonback.png'
function Navbar() {
  const navbuttonanimate = (id) => {
    const backg = document.getElementById(id)
    backg.classList.toggle('navbarbuttonbackhidden')
    backg.classList.toggle('navbarbuttonback')
  }
  const navbuttonmobileclick = (id) => {
    setVisible(false)
    if (id === 'b1') scrollToTop()
    if (id === 'b2') scrolltoAbout()
    if (id === 'b3') scrolltoSkills()
    if (id === 'b4') scrolltoProj()
    if (id === 'b6') scrolltoExp()
    if (id === 'b5') scrolltoContacts()
  }

  const [visible, setVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }
  const scrolltoAbout = () => {
    const aboutpage = document.getElementById('aboutpage')
    aboutpage.scrollIntoView({ behavior: 'smooth' })
  }
  const scrolltoSkills = () => {
    const skillspage = document.getElementById('skillspage')
    skillspage.scrollIntoView({ behavior: 'smooth' })
  }
  const scrolltoProj = () => {
    const skillspage = document.getElementById('projpage')
    skillspage.scrollIntoView({ behavior: 'smooth' })
  }
  const scrolltoExp = () => {
    const exppage = document.getElementById('exppage')
    exppage.scrollIntoView({ behavior: 'smooth' })
  }
  const scrolltoContacts = () => {
    const skillspage = document.getElementById('contactpage')
    skillspage.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div className='navbar'>
        <p className='portfoliotitle'>Portfolio</p>
        <div className='navbarbuttondiv'>
          <img src={navbuttonback} className='navbarbuttonbackhidden' id='b1' />
          <button
            className='navbarbutton'
            onMouseEnter={() => navbuttonanimate('b1')}
            onMouseLeave={() => navbuttonanimate('b1')}
            onClick={scrollToTop}
          >
            Home
          </button>
        </div>
        <div className='navbarbuttondiv'>
          <img src={navbuttonback} className='navbarbuttonbackhidden' id='b2' />
          <button
            className='navbarbutton'
            onMouseEnter={() => navbuttonanimate('b2')}
            onMouseLeave={() => navbuttonanimate('b2')}
            onClick={scrolltoAbout}
          >
            About
          </button>
        </div>
        <div className='navbarbuttondiv'>
          <img src={navbuttonback} className='navbarbuttonbackhidden' id='b3' />
          <button
            className='navbarbutton'
            onMouseEnter={() => navbuttonanimate('b3')}
            onMouseLeave={() => navbuttonanimate('b3')}
            onClick={scrolltoSkills}
          >
            Skills
          </button>
        </div>
        <div className='navbarbuttondiv'>
          <img src={navbuttonback} className='navbarbuttonbackhidden' id='b4' />
          <button
            className='navbarbutton'
            onMouseEnter={() => navbuttonanimate('b4')}
            onMouseLeave={() => navbuttonanimate('b4')}
            onClick={scrolltoProj}
          >
            Projects
          </button>
        </div>
        <div className='navbarbuttondiv'>
          <img src={navbuttonback} className='navbarbuttonbackhidden' id='b6' />
          <button
            className='navbarbutton'
            onMouseEnter={() => navbuttonanimate('b6')}
            onMouseLeave={() => navbuttonanimate('b6')}
            onClick={scrolltoExp}
          >
            Exp<span className='expextra'>erience</span>
          </button>
        </div>
        <div className='navbarbuttondiv'>
          <img src={navbuttonback} className='navbarbuttonbackhidden' id='b5' />
          <button
            className='navbarbutton'
            onMouseEnter={() => navbuttonanimate('b5')}
            onMouseLeave={() => navbuttonanimate('b5')}
            onClick={scrolltoContacts}
          >
            Contact
          </button>
        </div>
        <button className='navbarhamburg' onClick={() => setVisible(!visible)}>
          <div className='l1'></div>
          <div className='l2'></div>
          <div className='l3'></div>
        </button>
        <div className='circlenav1' />
        <div className='circlenav2' />
      </div>

      <div className={visible == false ? 'navbar2hidden' : 'navbar2'}>
        <button
          className='navbarbutton'
          onClick={() => {
            navbuttonmobileclick('b1')
          }}
        >
          Home
        </button>
        <div className='navbarline' />
        <button
          className='navbarbutton'
          onClick={() => navbuttonmobileclick('b2')}
        >
          About
        </button>
        <div className='navbarline' />
        <button
          className='navbarbutton'
          onClick={() => navbuttonmobileclick('b3')}
        >
          Skills
        </button>
        <div className='navbarline' />
        <button
          className='navbarbutton'
          onClick={() => navbuttonmobileclick('b4')}
        >
          Projects
        </button>
        <div className='navbarline' />
        <button
          className='navbarbutton'
          onClick={() => navbuttonmobileclick('b6')}
        >
          Experience
        </button>
        <div className='navbarline' />
        <button
          className='navbarbutton'
          onClick={() => navbuttonmobileclick('b5')}
        >
          Contact
        </button>
      </div>
    </>
  )
}

export default Navbar
