import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
AOS.init();
function Contact() {
  const form = useRef();
  const handlesubmit = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_jslkkqv",
        "template_ffb2x7v",
        form.current,
        "2Xe-lpctJUmRc31I9"
      )
      .then(
        (result) => {
          // show the user a success message
          alert(
            "Your message has been sent to me. Thank You. I will contact you."
          );
        },
        (error) => {
          // show the user an error
        }
      );
  };
  return (
    <div className="contactpage" id="contactpage">
      <div className="contactcircle1" />
      <div className="contactcircle2" />
      <div className="contactcircle3" />
      <div className="contactcircle4" />
      <div className="contactcircle5" />
      <div className="contactcircle6" />
      <p className="aboutmetitle">Contact Me</p>
      <div
        className="clickcontacts"
        data-aos="slide-down"
        data-aos-offset="-100"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="center"
      >
        <div className="contactblock">
          <a href="tel:9105856554" className="contactbut">
            <i className="fa fa-phone"></i>
          </a>
          <span className="contactdet">9105856554</span>
        </div>
        <div className="contactblock">
          <a href="mailto:neelaksh10singh@gmail.com" className="contactbut">
            <i className="fa fa-envelope"></i>
          </a>
          <span className="contactdet">neelaksh10singh@gmail.com</span>
        </div>
        <div className="contactblock">
          <button
            className="contactbut"
            onClick={() => {
              window.open("https://www.instagram.com/_.neelaksh10._/");
            }}
          >
            <i className="fa fa-instagram"></i>
          </button>
          <button
            className="contactbut"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/neelaksh-singh-7b020a17a/"
              );
            }}
          >
            <i className="fa fa-linkedin"></i>
          </button>
        </div>
      </div>
      <div className="contactlower">
        <form className="contactform" ref={form} onSubmit={handlesubmit}>
          <div className="toprow">
            <input
              type="text"
              placeholder="Name"
              className="inputfield"
              name="from_name"
              required="true"
            />
            <input
              type="text"
              placeholder="Contact No."
              className="inputfield"
              name="contact_number"
              required="true"
            />
          </div>
          <input
            type="email"
            placeholder="Email id"
            className="inputfield2"
            name="email_id"
            required="true"
          />
          <textarea
            placeholder="Message"
            className="inputfield3"
            name="message"
          />
          <button type="submit" value="Send" className="formsubmit">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
