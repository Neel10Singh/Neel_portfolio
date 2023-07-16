import React from 'react'
import './ProjectsModal.css'

function ProjectsModal({ projmodal, setModalOpen, modalopen }) {
  const { TechStack } = projmodal

  return (
    <div className={modalopen ? 'projectmodal' : 'modalhidden'}>
      <div className='modalcontent'>
        <div className='projectleft'>
          <img src={projmodal.backim} className='projectimagephone' />
        </div>
        <div className='projectright'>
          <div className='projectimagediv'>
            <img src={projmodal.im} className='projectimage' />
          </div>
          <p className='descriptionmodal'>{projmodal.desc}</p>
          <p className='descriptionmodal'>{projmodal.usage}</p>
        </div>
        <div className='modaldesc'>
          <p style={{ fontSize: '30px', fontWeight: '600' }}>
            {projmodal.name}
          </p>
          <p>
            Start Date:
            <br />
            {projmodal.startdate}
          </p>
          <p>
            Project Duration:<br></br> {projmodal.duration}
          </p>
          <p>
            Tech Stack:
            <br />
            {modalopen &&
              TechStack.map((tec) => {
                return (
                  <span>
                    {tec}, <br />
                  </span>
                )
              })}
          </p>
        </div>
        <button className='closemodal' onClick={() => setModalOpen(false)}>
          Close
        </button>
        <button
          className='openproject'
          onClick={() => window.open(projmodal.link)}
        >
          View Project
        </button>
      </div>
    </div>
  )
}

export default ProjectsModal
