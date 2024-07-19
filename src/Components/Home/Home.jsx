import React, { useEffect } from 'react';
import './Home.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Home() {

  useEffect(()=>{
      gsap.from('#ball',{
         x:900,
        //  right:200,
         duration:1,
        //  opacity:0,
         stagger:0.4
      })
  },[])

  return (
    <div id='' className='overflow-hidden vw-100 vh-100 shadow-lg d-flex'>
      <div className=' w-100 position-relative'>
          <div id='ball' className="ball"></div>
          <div  className='floatDiv'></div>
      </div>
    </div>
  )
}

export default Home
