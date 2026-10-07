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
import book from '../assets/book.png'
import adstarct from '../assets/adstarct.png'
import d from '../assets/d.png'
import is from '../assets/is.png'




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
        <div className='items-product'>
          <Projectitems  photo={project2}
         h1="product design"
    p="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
         <Projectitems  photo={project3}
         h1="Visual Design"
    p="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com." />
         <Projectitems  photo={project1}
         h1="Art Direction"
    p="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
        </div>
    
       <div className='title-items'>
        <Card photo={book} 
          h1="Project title"
          p="Ul,Art drection "
        
        />
      
        <Card photo={adstarct} 
          h1="Project title"
          p="Ul,Art drection "/>
        <Card photo={d} 
          h1="Project title"
          p="Ul,Art drection "/>
        <Card photo={is} 
          h1="Project title"
          p="Ul,Art drection "/>
        <Card photo={book} 
          h1="Project title"
          p="Ul,Art drection "/>
        <Card photo={book} 
          h1="Project title"
          p="Ul,Art drection "/>

       </div>
        <div className='my-clients'>
   
        </div>

  
        <Footer/>

    </div>
  )
}

export default HomeMain