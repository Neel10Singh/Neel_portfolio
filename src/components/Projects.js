import React, { useEffect, useState } from 'react'
import './Projects.css'
import { projectdets } from './Projectdetail'
import ProjectsModal from './ProjectsModal'

function Projects() {
  const [projects, setProjects] = useState(projectdets)
  const [currproj, setCurrproj] = useState({})
  const [modalopen, setModalOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const lastindex = projects.length - 1
  const openprev = () => {
    if (index !== 0) {
      setIndex(index - 1)
    } else {
      setIndex(lastindex)
    }
  }
  const opennext = () => {
    if (index !== lastindex) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  return (
    <div className='projectpage' id='projpage'>
      <div className='projectcircle1' />
      <div className='projectcircle2' />
      <div className='projectcircle3' />
      <div className='projectcircle4' />
      <div className='projectcircle5' />
      <div className='projectcircle6' />
      <p className='aboutmetitle'>My Projects</p>
      <p className='aboutmesubtitle'>
        || Project {index + 1}/{lastindex + 1}
      </p>
      <div className='projects'>
        <div className='projectdisplay'>
          {projects.map((project) => {
            let {
              id,
              name,
              startdate,
              duration,
              TechStack,
              shortdesc,
              im,
              backim,
              desc,
              usage,
              link,
            } = project
            let pos = 'otherslide'
            if (index < id) {
              pos = 'nextslide'
            }
            if (index === id) {
              pos = 'currentslide'
            }
            if (index > id) {
              pos = 'prevslide'
            }

            return (
              <button
                className={pos}
                onClick={() => {
                  setModalOpen(true)
                  setCurrproj(project)
                }}
              >
                <div className='slide'>
                  <img src={backim} className='backim' />

                  <img src={im} className='im' />
                  <div className='descproj'>
                    <p className='projtitle'>{name}</p>
                    <p>{shortdesc} </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      {
        <ProjectsModal
          projmodal={currproj}
          setModalOpen={setModalOpen}
          modalopen={modalopen}
        />
      }
      <button className='prev' onClick={openprev}>
        <i className='fa fa-arrow-left'></i>
      </button>
      <button className='next' onClick={opennext}>
        <i className='fa fa-arrow-right'></i>
      </button>
    </div>
  )
}

export default Projects
