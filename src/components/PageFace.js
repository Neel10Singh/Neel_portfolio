import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './PageFace.css'
import neelimg from '../images/NeelDP.png'
import leetcodeicon from '../images/leetcode-icon.png'
import codeforces from '../images/codeforces.png'
import github from '../images/github.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'lottie-react'
import backanim from '../images/back.json'
AOS.init()

function PageFace() {
  return (
    <div className='pageface'>
      <div>
        <Lottie animationData={backanim} className='backanimation'></Lottie>
      </div>
      <div className='leftface'>
        <img src={neelimg} className='neelimg'></img>
        <div className='circle' />
        <div className='circle2' />
        <div className='circle5' />
        <div className='circle6' />
        <div className='circle8' />
        <div className='circle9' />
        <button
          className='linkedin lin'
          onClick={() => {
            window.open('https://www.linkedin.com/in/neelaksh-singh-7b020a17a/')
          }}
        >
          <i className='fa fa-linkedin ' aria-hidden='true'></i>
        </button>
        <button
          className='instagra ins'
          onClick={() => {
            window.open('https://www.instagram.com/_.neelaksh10._/')
          }}
        >
          <i className='fa fa-instagram' aria-hidden='true'></i>
        </button>
        <button
          className='leetcode'
          onClick={() => {
            window.open('https://leetcode.com/neelaksh10singh/')
          }}
        >
          <img src={leetcodeicon} className='leetcodeicon ' />
        </button>
        <button
          className='codeforces'
          onClick={() => {
            window.open('https://codeforces.com/profile/neelaksh10singh')
          }}
        >
          <img src={codeforces} className='codeforcesicon' />
        </button>
        <button
          className='github'
          onClick={() => {
            window.open('https://github.com/Neel10Singh')
          }}
        >
          <img src={github} className='githubicon' />
        </button>
      </div>
      <div className='rightface'>
        <div className='rightfacecont'>
          <div
            className='myname'
            data-aos='fade-right'
            data-aos-offset='0'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='true'
            data-aos-anchor-placement='top-center'
          >
            <p>
              Hello! I'm <br />
              Neelaksh Singh
            </p>
          </div>
          <div
            className='mydesc'
            data-aos='fade-right'
            data-aos-offset='-100'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='true'
            data-aos-anchor-placement='top-center'
          >
            Front-end developer specialising in React
          </div>
          <button
            className='Getresume'
            onClick={() => {
              window.open(
                'https://docs.google.com/document/d/1H7RRrvecHS05VaHazHtG5df68eR2PpWSW-9Mz3u87j0/edit?usp=sharing'
              )
            }}
            data-aos='fade-right'
            data-aos-offset='-200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='true'
            data-aos-anchor-placement='top-center'
          >
            Get Resume <i className='fa fa-download'></i>
          </button>
        </div>
        <div className='circle3' />
        <div className='circle4' />
        <div className='circle7' />
      </div>
    </div>
  )
}

export default PageFace
