// import React from 'react';
import Button from '../components/Buttons/Button';
import './payment.css'


export default function Payment() {
  return (
    <>
    <div className="container flex justify-center flex-col items-center ml-0">
      <div className="main">
        <h4 className=''><b>Payment Details</b></h4>
        <p className=' mt-4'>One Course: Mind Blowing Mornings: Wellness Program</p>
        <ol className= 'List list-none flex' >
          <li className='del'><del>$100</del></li>
          <li className='justli'>Just $50</li>
          <li className='discount'>50% discount</li>
          <li>Limited period offer</li>

        </ol>
        <div className="flex justify-center">
        <Button className='BTN'>CHECKOUT</Button>
        </div>
    </div>
    </div>
    </>
  )
}
