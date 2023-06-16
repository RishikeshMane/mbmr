import Button from '../../components/Buttons/Button'
import './contact.css'

export default function Contact() {
  return (
    <>
      <div className="section  w-full">
        <div className=" bg-[#F47D31] p-20 pb-32 px-10 flex w-full justify-center">
          <div className="para font-bold" style={{ color: "white" }}>
            <p><h1 className="my-8" style={{ fontSize: "1.9rem" }}>Contact Us</h1></p>
            <p className="my-4" style={{ fontSize: "1.5rem" }}>Do you have any  concerns or questions you would like to address?</p>
            <p className="" style={{ fontSize: "1.5rem" }}>We are happy to help you</p>
          </div>
          <div className="mx-12 my-2">
            <img src="./src/pages/contactpage/Ellipse 86.png" alt="" />
          </div>
        </div>
        <div className=" flex justify-center flex-col w-[80%] mx-auto my-10 pb-20 bg-white Border" style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",zIndex:"1", marginTop:"-70px"}}>
          <div className=" m-auto mb-12 pt-28">
            <p className=" font-bold mb-10"><span style={{color:"black",fontSize:"1.9rem"}}>Have a question?</span><span className="mx-3" style={{color:"coral",fontSize:"1.9rem"}}>Talk to us.</span></p>
          </div>
          <div className=" flex justify-evenly mt-10">
            <div className="contact">
              <img src="./src/pages/contactpage/Mail.svg"  alt="" />
              <p className=" font-bold"style={{color:"coral",fontSize:"1.4rem"}}>EMAIL US AT</p>
              <p className=' font-semibold'>support@mindblowing.com</p>
              <p> we'll get back to you in 24 hours</p>
            </div>
            <div className="contact">
            <img src="./src/pages/contactpage/Placeholder.svg" alt="" />
            <p className=" font-bold" style={{color:"coral",fontSize:"1.4rem"}}>VISIT US AT</p>
              <p className=' font-semibold'>No.11,, HSR Layout, Bommanahalli</p>
                 <span className=' font-semibold'> Bangalore, Karnataka</span>
              <p> between 10 AM - 8 PM on any weekday!</p>
            </div>
            <div className="contact">
            <img src="./src/pages/contactpage/Viber.svg" alt="" />
            <p className=" font-bold"style={{color:"coral",fontSize:"1.4rem"}}>CALL US AT</p>
              <p className=' font-semibold'>+91 20 933 71501</p>
              <p>between 10 AM to 10 PM</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col my-10">
          <div className=" self-center">
            <p className='mx-[30px]'style={{color:"black",fontSize:"1.7rem"}}><b>We'd love to hear from you!</b></p>
            <p className='my-2'style={{color:"gray"}}>Drop us a message by filling this form and we'll get back to you</p>
          </div>
          <div className="self-center mt-10 mb-4">
            <form>
              <input type='text' placeholder='Name' className='input1'></input><br></br>
              <input type='email' placeholder='Email address' className='input2'></input><br></br>
              <input type='number'placeholder='+91' className='input91'></input><input type='number'placeholder='Mobile Number'className='inputnum'></input><br/>
              <input type='text' placeholder='Your Message'className='input4' ></input><br/>
              <Button className='button mx-16 my-4'>SUBMIT</Button>
            </form>
          </div>
        </div>
      </div>
    </>)
}
