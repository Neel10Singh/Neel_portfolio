import React, { useEffect, useRef } from 'react'
import './Skills.css'

const callbackfuntion = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('eachskill')
    }
  })
}
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}
function Skills() {
  const skillRef = useRef(null)
  const skillRef2 = useRef(null)
  const skillRef3 = useRef(null)
  const skillRef4 = useRef(null)
  const skillRef5 = useRef(null)
  const skillRef6 = useRef(null)
  const skillRef7 = useRef(null)
  const skillRef8 = useRef(null)
  const skillRef9 = useRef(null)
  const skillRef10 = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(callbackfuntion, options)
    if (skillRef.current) observer.observe(skillRef.current)
    if (skillRef2.current) observer.observe(skillRef2.current)
    if (skillRef3.current) observer.observe(skillRef3.current)
    if (skillRef4.current) observer.observe(skillRef4.current)
    if (skillRef5.current) observer.observe(skillRef5.current)
    if (skillRef6.current) observer.observe(skillRef6.current)
    if (skillRef7.current) observer.observe(skillRef7.current)
    if (skillRef8.current) observer.observe(skillRef8.current)
    if (skillRef9.current) observer.observe(skillRef9.current)
    if (skillRef10.current) observer.observe(skillRef10.current)
  }, [
    skillRef,
    skillRef2,
    skillRef3,
    skillRef4,
    skillRef5,
    skillRef6,
    skillRef7,
    skillRef8,
    skillRef9,
    skillRef10,
    options,
  ])
  function showstat(id) {
    const element = document.getElementById(id)

    element.classList.add(id)
  }
  return (
    <div className='skillspage' id='skillspage'>
      <div className='skillsbigcircle4' />
      <div className='skillsbigcircle5' />
      <div className='skillsbigcircle6' />
      <p className='aboutmetitle'>Skillset</p>
      <p className='aboutmesubtitle'>|| Hover to display:</p>
      <div className='skillbox'>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('html')}
          ref={skillRef}
        >
          <div className='skillname'>HTML</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='html'>
              <span className='skillsdatashow'>90%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('css')}
          ref={skillRef2}
        >
          <div className='skillname'>CSS</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='css'>
              <span className='skillsdatashow'>90%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('js')}
          ref={skillRef3}
        >
          <div className='skillname'>JS</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='js'>
              <span className='skillsdatashow'>80%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('react')}
          ref={skillRef4}
        >
          <div className='skillname'>React</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='react'>
              <span className='skillsdatashow'>75%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('bs')}
          ref={skillRef5}
        >
          <div className='skillname'>Booststrap</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='bs'>
              <span className='skillsdatashow'>60%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('dsa')}
          ref={skillRef6}
        >
          <div className='skillname'>DSA</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='dsa'>
              <span className='skillsdatashow'>90%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('django')}
          ref={skillRef7}
        >
          <div className='skillname'>Django</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='django'>
              <span className='skillsdatashow'>20%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('sql')}
          ref={skillRef8}
        >
          <div className='skillname'>SQL</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='sql'>
              <span className='skillsdatashow'>70%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('python')}
          ref={skillRef9}
        >
          <div className='skillname'>Python</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='python'>
              <span className='skillsdatashow'>70%</span>
            </div>
          </div>
        </div>
        <div
          className='hiddensk'
          onMouseEnter={() => showstat('cpp')}
          ref={skillRef10}
        >
          <div className='skillname'>C++</div>
          <div className='skillstat'>
            <div className='skillstatdata ' id='cpp'>
              <span className='skillsdatashow'>85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
