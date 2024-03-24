import React, { useEffect, useState } from 'react'
import './Experience.css'
import { experiencedets } from './Experincedetails'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

function Experience() {
  return (
    <div className='exppage' id='exppage'>
      {/* <div className="projectcircle1" />
      <div className="projectcircle2" />
      <div className="projectcircle3" /> */}
      <div className='projectcircle4' />
      <div className='projectcircle5' />
      <div className='projectcircle6' />
      <p className='aboutmetitle'>Experience</p>
      <div className='explist'>
        <div className='timelinediv'>
          <p className='timelinetext'>timeline</p>
          <div className='timeline'></div>
        </div>
        {experiencedets.map((exp) => {
          return (
            <div
              className='expcard'
              id={exp.id}
              data-aos='zoom-in-down'
              data-aos-offset='-100'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='true'
              data-aos-anchor-placement='top-center'
            >
              <div className='expdot'></div>
              <div className='aboutcircle1' id='ac1' />
              <div className='aboutcircle2' id='ac2' />
              <div className='aboutcircle3' id='ac3' />
              <p className='exptitle'>{exp.c_name}</p>
              <img src={exp.im} className='expimage'></img>
              <p className='exppos'>{exp.position}</p>
              <p className='expsub'>{exp.duration}</p>
              <p className='expdesc'>{exp.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
