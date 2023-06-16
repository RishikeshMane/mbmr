// import React from 'react'
import './Coursedetail.css'

import img1 from "./../PROJECT-2/Rectangle-1.png"
import img2 from './../PROJECT-2/Rectangle-2.png'
import img3 from './../PROJECT-2/Rectangle-3.png'
import img4 from "./../PROJECT-2/Rectangle-4.png"
import img5 from "./../PROJECT-2/Rectangle-5.png"

export default function Coursedetail() {

  return (
    <>
    <div className='container ' >
      {/* { Array.map(ab=> <div classNameName="col-md-2"> <img src={ab+".jpg"} /></div> ) } */}


      <img className='rectangle-1' src={img1} alt="my-image" />

      <img className='rectangle-2' src={img2} alt="my-image" />

      <img className='rectangle-3' src={img3} alt="my-image" />

      <img className='rectangle-4' src={img4} alt="my-image" />

      <img className='rectangle-5' src={img5} alt="my-image" />

    </div>
    
    </>

  )
}
