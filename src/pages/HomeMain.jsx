import React from 'react'
import Header from '../layout/Header'
import BannerSection from "../pages/BannerSection"
import Footer from '../layout/Footer'
import Card from "../components/Card"
import Clienttestimonial from "../components/Clienttestimonial"
import Images from '../components/Images'
import google from '../assets/google.png'
import niky from '../assets/niky.png'
import samsung from '../assets/samsung.png'
import apple from '../assets/apple.png'
import adidas from '../assets/adidas.png'
import Projectitems from '../components/Projectitems'
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'

const HomeMain = () => {
  return (
    <div>
        <Header/>
        <BannerSection/>
        <div className='link-item'>
         <Images url={google} />
           <Images url={niky}/>
             <Images url={samsung}/>
               <Images url={apple}/>
                 <Images url={adidas}/>
        </div>
        <div className=''>
          <Projectitems  photo={project2}
         h1="product design"
    p="This is the description for project one." />
         <Projectitems  photo={project3}
         h1="Project One"
    p="This is the description for project one." />
         <Projectitems  photo={project1}
         h1="Project One"
    p="This is the description for project one." />
        </div>
    
        <Card/>
        <div className='my-clients'>
   
        </div>
  
        <Footer/>

    </div>
  )
}

export default HomeMain