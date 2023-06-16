import React from "react";
import Button from "../Buttons/Button";
import bg from '../../assets/contact_bg1.png'
import cute_man from '../../assets/cute.svg'
import './Contact_section.css'

const Contact_section = () => {
  return (
    <section className="w-screen flex justify-center contactus_section ">
      <div className=" max-w-5xl container flex justify-center flex-col items-center py-3">
        <div className=" w-full justify-center ">
          <h4 className=" text-2xl lg:text-3xl font-bold text-primaryOrange text-center">
            We're here for you!
          </h4>
          <p className=" hidden md:block text-center">
            Got a question or need some help?
          </p>
        </div>
        <div className=" w-full max-w-3xl mt-3 py-4 !pt-11 rounded-md bg-contain border-solid border-[1.5px] border-primaryOrange " style={{ backgroundImage: `url(${bg})` }}>
          <div className="w-full flex justify-center sm:flex-row flex-col gap-2   ms:!gap-4 md:!gap-10   mb-2 ms:!mb-3 md:!mb-4 ">
            {" "}
            <div className=" relative input_div_contact  lg:min-w-[300px] ms:min-w-[250px]">
            <img className=" absolute top-[-70px] left-0 w-[150px]" alt="Style_Element" src={cute_man}></img>
            <input
              type="text"
              
              className=" py-2 rounded-md w-full  px-3 bg-gray-100 text-black"
              placeholder="Name"
            ></input>
            </div>
            <input
              type="text"
              
              className=" input_div_contact py-2 rounded-md lg:min-w-[300px] ms:min-w-[250px]  px-3 bg-gray-100 text-black"
              placeholder="Location"
            />
          </div>
          <div className="w-full flex justify-center sm:flex-row flex-col gap-2   ms:!gap-4 md:!gap-10   mb-2 ms:!mb-3 md:!mb-4">
            {" "}
            <input
              type="email"
              className="py-2  input_div_contact rounded-md lg:min-w-[300px] ms:min-w-[250px]  px-3 bg-gray-100 text-black"
              placeholder="Email"
            />
            <input
              type="text"
              className="py-2  input_div_contact rounded-md lg:min-w-[300px] ms:min-w-[250px]  px-3 bg-gray-100 text-black"
              placeholder="Phone"
            />
          </div>
          <div className="w-full flex justify-center sm:flex-row  flex-col gap-2   ms:!gap-4 md:!gap-10   mb-2 ms:!mb-3 md:!mb-4">
            <textarea placeholder="Questions/Comments" rows={6} className="py-2 px-3 input_div_contact bg-gray-100 rounded-md lg:min-w-[calc(600px+2.5rem)] ms:min-w-[calc(500px+1rem)] sm:w-[70%]" />
          </div>
          <div className="w-full flex justify-center mb-2 ms:!mb-3 md:!mb-4">
            <Button  className="!px-[5rem] py-[.5rem] mt-4 text-center" >Submit</Button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact_section;
