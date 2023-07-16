import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const form = useRef()
  const handlesubmit = (e) => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        'service_jslkkqv',
        'template_ffb2x7v',
        form.current,
        '2Xe-lpctJUmRc31I9'
      )
      .then(
        (result) => {
          // show the user a success message
          alert(
            'Your message has been sent to me. Thank You. I will contact you.'
          )
        },
        (error) => {
          // show the user an error
        }
      )
  }
  return (
    <div className='contactpage' id='contactpage'>
      <div className='contactcircle1' />
      <div className='contactcircle2' />
      <div className='contactcircle3' />
      <div className='contactcircle4' />
      <div className='contactcircle5' />
      <div className='contactcircle6' />
      <div className='clickcontacts'>
        <div className='contactblock'>
          <button className='contactbut'>
            <i className='fa fa-phone'></i>
          </button>
          <span className='contactdet'>9105856554</span>
        </div>
        <div className='contactblock'>
          <a href='mailto:neelaksh10singh@gmail.com' className='contactbut'>
            <i className='fa fa-envelope'></i>
          </a>
          <span className='contactdet'>neelaksh10singh@gmail.com</span>
        </div>
        <div className='contactblock'>
          <button
            className='contactbut'
            onClick={() => {
              window.open('https://www.instagram.com/_.neelaksh10._/')
            }}
          >
            <i className='fa fa-instagram'></i>
          </button>
          <button
            className='contactbut'
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/neelaksh-singh-7b020a17a/'
              )
            }}
          >
            <i className='fa fa-linkedin'></i>
          </button>
        </div>
      </div>
      <form className='contactform' ref={form} onSubmit={handlesubmit}>
        <div className='toprow'>
          <input
            type='text'
            placeholder='Name'
            className='inputfield'
            name='from_name'
          />
          <input
            type='text'
            placeholder='Contact No.'
            className='inputfield'
            name='contact_number'
          />
        </div>
        <input
          type='text'
          placeholder='Email id'
          className='inputfield2'
          name='email_id'
        />
        <textarea
          placeholder='Message'
          className='inputfield3'
          name='message'
        />
        <button type='submit' value='Send' className='formsubmit'>
          Submit Message
        </button>
      </form>
    </div>
  )
}

export default Contact
