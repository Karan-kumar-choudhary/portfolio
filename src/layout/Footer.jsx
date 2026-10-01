import React from 'react'
import Button from '../components/Button'

const Footer = () => {
  return (
   <>
  
         <footer className="footer">

      <div className="footer-left">

        <h2>Lets work together</h2>

        <p>
          This is a template Figma file, turned into code using Anima.
          Learn more at AnimaApp.com This is a template Figma file,
          turned into code using Anima. Learn more at AnimaApp.com
        </p>

        <div className="social-icons">

          <a href="#" aria-label="Dribbble">
            <i className="fa-brands fa-dribbble"></i>
          </a>

          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a href="#" aria-label="Basketball">
            <i className="fa-solid fa-basketball"></i>
          </a>

          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" aria-label="Behance">
            <i className="fa-brands fa-behance"></i>
          </a>

        </div>

      </div>


      <div className="footer-right">

        <input
          type="text"
          placeholder="Name"
        />

        <input
          type="email"
          placeholder="Email"
        />


      </div>

    </footer>
  
  </>
  )
}

export default Footer