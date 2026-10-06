import React from 'react'
import Button from '../components/Button'
import HeaderImage from "../assets/HeaderImage1.png"

const Home = () => {
  return (
    <div>
       
 <>
    
       <section className="hero-section">
      <div className="hero-content">
        <h3>Branding | Image making </h3>

        <h1>
         Visual Designer
        </h1>

        <p>
          This is a template Figma file, turned into code using Anima. 
          Learn more at AnimaApp.com
        </p>
        <div className="button-content">
          <Button  text="Contact" />
        </div>
        
      </div>
      <div className="hero-image">
        <img
          src={HeaderImage}
          alt="img"
        />
      </div>

    </section>
    
    
    </>
  
    </div>
  )
}

export default Home