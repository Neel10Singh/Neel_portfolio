import React, { useEffect, useState } from "react";
import "./Projects.css";
import { projectdets } from "./Projectdetail";
import ProjectsModal from "./ProjectsModal";
import { useSwipeable } from "react-swipeable";

function Projects() {
  const [projects, setProjects] = useState(projectdets);
  const [currproj, setCurrproj] = useState({});
  const [modalopen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const lastindex = projects.length - 1;
  const openprev = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(lastindex);
    }
  };
  const opennext = () => {
    if (index !== lastindex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => opennext(),

    onSwipedRight: () => openprev(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      opennext();
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
    // return clearInterval(autoscroll)
  }, [index]);

  return (
    <div className="projectpage" id="projpage">
      <div className="projectcircle1" />
      <div className="projectcircle2" />
      <div className="projectcircle3" />
      <div className="projectcircle4" />
      <div className="projectcircle5" />
      <div className="projectcircle6" />
      <p className="aboutmetitle">My Projects</p>
      <p className="aboutmesubtitle">|| Total projects {lastindex + 1}</p>

      <div className="canvas">
        <div className="carousel" style={{ "--quantity": lastindex + 1 }}>
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
            } = project;

            return (
              <button
                id={id}
                className="projectcard"
                style={{ "--position": id + 1 }}
                onClick={() => {
                  setModalOpen(true);
                  setCurrproj(project);
                }}
              >
                <img src={backim} className="backim" />

                <img src={im} className="im" />
              </button>
            );
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
      <button className="prev" onClick={openprev}>
        <i className="fa fa-arrow-left"></i>
      </button>
      <button className="next" onClick={opennext}>
        <i className="fa fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Projects;
