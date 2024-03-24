import React, { useEffect, useRef } from 'react'
import './About.css'

const callbackfuntion = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('detsbox')
    }
  })
}
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}
function About() {
  const containerRef = useRef(null)
  const containerRef2 = useRef(null)
  const containerRef3 = useRef(null)
  const containerRef4 = useRef(null)
  const containerRef5 = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(callbackfuntion, options)
    if (containerRef.current) observer.observe(containerRef.current)
    if (containerRef2.current) observer.observe(containerRef2.current)
    if (containerRef3.current) observer.observe(containerRef3.current)
    if (containerRef4.current) observer.observe(containerRef4.current)
    if (containerRef5.current) observer.observe(containerRef5.current)
  }, [
    containerRef,
    containerRef2,
    containerRef3,
    containerRef4,
    containerRef5,
    options,
  ])

  function abouthover() {
    const ac1 = document.getElementById('ac1')
    const ac2 = document.getElementById('ac2')
    const ac3 = document.getElementById('ac3')
    ac1.classList.add('aboutcircle1')
    ac2.classList.add('aboutcircle2')
    ac3.classList.add('aboutcircle3')
    ac1.classList.remove('aboutcircle1hidden')
    ac2.classList.remove('aboutcircle2hidden')
    ac3.classList.remove('aboutcircle3hidden')
    const ac4 = document.getElementById('ac4')
    const ac5 = document.getElementById('ac5')
    const ac6 = document.getElementById('ac6')
    ac4.classList.add('aboutcircle4')
    ac5.classList.add('aboutcircle5')
    ac6.classList.add('aboutcircle6')
    ac4.classList.remove('aboutcircle4hidden')
    ac5.classList.remove('aboutcircle5hidden')
    ac6.classList.remove('aboutcircle6hidden')
  }
  function aboutleave() {
    const ac1 = document.getElementById('ac1')
    const ac2 = document.getElementById('ac2')
    const ac3 = document.getElementById('ac3')
    ac1.classList.add('aboutcircle1hidden')
    ac2.classList.add('aboutcircle2hidden')
    ac3.classList.add('aboutcircle3hidden')
    ac1.classList.remove('aboutcircle1')
    ac2.classList.remove('aboutcircle2')
    ac3.classList.remove('aboutcircle3')
    const ac4 = document.getElementById('ac4')
    const ac5 = document.getElementById('ac5')
    const ac6 = document.getElementById('ac6')
    ac4.classList.add('aboutcircle4hidden')
    ac5.classList.add('aboutcircle5hidden')
    ac6.classList.add('aboutcircle6hidden')
    ac4.classList.remove('aboutcircle4')
    ac5.classList.remove('aboutcircle5')
    ac6.classList.remove('aboutcircle6')
  }
  return (
    <div className='aboutpage' id='aboutpage'>
      <div className='aboutbigcircle4' />
      <div className='aboutbigcircle5' />
      <div className='aboutbigcircle6' />
      <p className='aboutmetitle'>About me</p>
      <div className='about'>
        <div className='aboutme'>
          <div
            className='aboutmebox'
            onMouseEnter={abouthover}
            onMouseLeave={aboutleave}
          >
            <div className='aboutcircle1hidden' id='ac1' />
            <div className='aboutcircle2hidden' id='ac2' />
            <div className='aboutcircle3hidden' id='ac3' />
            <div className='aboutcircle4hidden' id='ac4' />
            <div className='aboutcircle5hidden' id='ac5' />
            <div className='aboutcircle6hidden' id='ac6' />
            I am Neelaksh Singh, currently persuing my B.Tech. from Institute of
            Engineering and Rural Technology, Prayagraj. I am in my 4th year of
            graduation and have an average SGPA of 8.05 in my 6 semesters. I
            have a high interest in front-end devlopment. I am a skilled
            individual who always aims to learn and grow. I specialize in
            front-end development using React.js and Next.js. I am also invested
            in Web3 Development where I harness my knowledge of Solidity and
            Ethereum to make DAPPs. I am a good leader and great at teamwork and
            always willing to give my hundred percent. I am quick learner who
            always aims to learn more and adapt to all kinds of situations.
            Another strength of mine is perseverance. I dont give up even when
            stuck in a problem and works through it no matter how much work it
            takes.
            <br /> Thank You.
          </div>
        </div>
        <div className='details'>
          <div className='hidden' ref={containerRef}>
            Number of projects
            <div className='detssubbox '>5</div>
          </div>
          <div className='hidden' ref={containerRef2}>
            LeetCode Rating:
            <div className='detssubbox'>1877</div>
          </div>
          <div className='hidden' ref={containerRef3}>
            LeetCode Questions:
            <div className='detssubbox'>400+</div>
          </div>
          <div className='hidden' ref={containerRef4}>
            Codeforces Rating:
            <div className='detssubbox'>1252</div>
          </div>
          <div className='hidden' ref={containerRef5}>
            CodeChef Rating:
            <div className='detssubbox'>1656</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
