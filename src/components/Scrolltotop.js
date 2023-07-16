import React, { useEffect, useState } from 'react'
import './Scrolltotop.css'

function Scrolltotop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }
  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className='back-to-top'>
          <i className='fa fa-arrow-up' />
        </button>
      )}
    </>
  )
}

export default Scrolltotop
