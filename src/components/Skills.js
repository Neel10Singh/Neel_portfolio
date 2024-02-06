import React, { useEffect, useRef } from "react";
import "./Skills.css";

const callbackfuntion = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(entry.target.id);
    }
  });
};
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
function Skills() {
  const skillRef = useRef(null);
  const skillRef2 = useRef(null);
  const skillRef3 = useRef(null);
  const skillRef4 = useRef(null);
  const skillRef5 = useRef(null);
  const skillRef6 = useRef(null);
  const skillRef7 = useRef(null);
  const skillRef8 = useRef(null);
  const skillRef9 = useRef(null);
  const skillRef10 = useRef(null);
  const skillRef11 = useRef(null);
  const skillRef12 = useRef(null);
  const skillRef13 = useRef(null);
  const skillRef14 = useRef(null);
  const skillRef15 = useRef(null);
  const skillRef16 = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackfuntion, options);
    if (skillRef.current) observer.observe(skillRef.current);
    if (skillRef2.current) observer.observe(skillRef2.current);
    if (skillRef3.current) observer.observe(skillRef3.current);
    if (skillRef4.current) observer.observe(skillRef4.current);
    if (skillRef5.current) observer.observe(skillRef5.current);
    if (skillRef6.current) observer.observe(skillRef6.current);
    if (skillRef7.current) observer.observe(skillRef7.current);
    if (skillRef8.current) observer.observe(skillRef8.current);
    if (skillRef9.current) observer.observe(skillRef9.current);
    if (skillRef10.current) observer.observe(skillRef10.current);
    if (skillRef11.current) observer.observe(skillRef11.current);
    if (skillRef12.current) observer.observe(skillRef12.current);
    if (skillRef13.current) observer.observe(skillRef13.current);
    if (skillRef14.current) observer.observe(skillRef14.current);
    if (skillRef15.current) observer.observe(skillRef15.current);
    if (skillRef16.current) observer.observe(skillRef16.current);
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
    skillRef11,
    skillRef12,
    skillRef13,
    skillRef14,
    skillRef15,
    skillRef16,
    options,
  ]);
  function showstat(id) {
    const element = document.getElementById(id);

    element.classList.add(id);
  }
  return (
    <div className="skillspage" id="skillspage">
      <div className="skillsbigcircle4" />
      <div className="skillsbigcircle5" />
      <div className="skillsbigcircle6" />
      <p className="aboutmetitle">Skillset</p>
      <div className="skillbigbox">
        <div className="skillbox">
          <div className="eachskill">
            <div className="skillname">HTML</div>
            <div className="skillstat">
              <div className="skillstatdata " id="html" ref={skillRef}>
                <span className="skillsdatashow">90%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">CSS</div>
            <div className="skillstat">
              <div className="skillstatdata " id="css" ref={skillRef2}>
                <span className="skillsdatashow">90%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">JS</div>
            <div className="skillstat">
              <div className="skillstatdata " id="js" ref={skillRef3}>
                <span className="skillsdatashow">80%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">React</div>
            <div className="skillstat">
              <div className="skillstatdata " id="react" ref={skillRef4}>
                <span className="skillsdatashow">75%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">Tailwind</div>
            <div className="skillstat">
              <div className="skillstatdata " id="tw" ref={skillRef5}>
                <span className="skillsdatashow">90%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">Firebase</div>
            <div className="skillstat">
              <div className="skillstatdata " id="fb" ref={skillRef6}>
                <span className="skillsdatashow">60%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">SASS</div>
            <div className="skillstat">
              <div className="skillstatdata " id="sass" ref={skillRef13}>
                <span className="skillsdatashow">90%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">Next.js</div>
            <div className="skillstat">
              <div className="skillstatdata " id="django" ref={skillRef7}>
                <span className="skillsdatashow">70%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="skillbox">
          <div className="eachskill">
            <div className="skillname">SQL</div>
            <div className="skillstat">
              <div className="skillstatdata " id="sql" ref={skillRef8}>
                <span className="skillsdatashow">70%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">Python</div>
            <div className="skillstat">
              <div className="skillstatdata " id="python" ref={skillRef9}>
                <span className="skillsdatashow">70%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">C++</div>
            <div className="skillstat">
              <div className="skillstatdata " id="cpp" ref={skillRef10}>
                <span className="skillsdatashow">85%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">DSA</div>
            <div className="skillstat">
              <div className="skillstatdata " id="dsa" ref={skillRef11}>
                <span className="skillsdatashow">90%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">Redux</div>
            <div className="skillstat">
              <div className="skillstatdata " id="redux" ref={skillRef12}>
                <span className="skillsdatashow">90%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">Git</div>
            <div className="skillstat">
              <div className="skillstatdata " id="git" ref={skillRef14}>
                <span className="skillsdatashow">50%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">Solidity</div>
            <div className="skillstat">
              <div className="skillstatdata " id="solidity" ref={skillRef15}>
                <span className="skillsdatashow">70%</span>
              </div>
            </div>
          </div>
          <div className="eachskill">
            <div className="skillname">Hardhat</div>
            <div className="skillstat">
              <div className="skillstatdata " id="hardhat" ref={skillRef16}>
                <span className="skillsdatashow">60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
