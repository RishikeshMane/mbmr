// import { useState } from "react";
// import {IoIosArrowDown} from "react-icons/io"
// import {ccDetails,faqDetails} from "./Details";
// import {FaChalkboardTeacher  } from "react-icons/fa" ;
// import {GrMultimedia} from "react-icons/gr" ;
// import {BsCalendar2Week , BsFillCameraVideoFill} from "react-icons/bs" ;
// import {BiDownload,BiTimeFive} from "react-icons/bi" ;

// export default function Courses() {
//   return (
//     <>
//       <div className="w-[100%] flex justify-center items-center">
//         <div className="w-[90%] min-h-screen md:w-[70%]">
//           <div className="Hero-Section mt-6 ">
//             <h1 className="max-w-[70%] text-xl text-black lg:text-2xl">
//               Mind-blowing mornings: Wellness program
//             </h1>
//             <span>By Radhika Rao, Yoga Instructor</span>
//             <div className="flex gap-3 mt-2">
//               <span>4.5 st rating</span>
//               <span>33145 students ret</span>
//             </div>
//             <div className="w-[100%] aspect-[2] bg-red-400 mt-2"></div>
//             <div className="flex lg:flex-row flex-col justify-between">
//               <div className="cc bg-gray-50 justify-center w-full py-4">
//                 <h4 className=" text-lg font-bold ">
//                   Course content
                  
//                 </h4>
//                 <div>
//                   <div className="flex w-full gap-4"><p className="flex items-center gap-2"><FaChalkboardTeacher />9 Sessions</p> <p className="flex items-center gap-2"><BiDownload />9 Sessions</p></div>
//                   <div className="flex w-full gap-4"><p className="flex items-center gap-2"><GrMultimedia/>9 Sessions</p> <p className="flex items-center gap-2"><BsFillCameraVideoFill/>9 Sessions</p></div>
//                 </div>
//               </div>
//               <div className="cb justify-center w-full py-4">
//                 <h4 className=" text-lg font-bold ">
//                   Course batches
//                 </h4>
//                 <div>
//                 <div className="flex w-full gap-4"><p className="flex items-center gap-2"><BiTimeFive />9 Sessions</p> <p className="flex items-center gap-2"><BiTimeFive />9 Sessions</p></div>
//                   <div className="flex w-full gap-4"><p className="flex items-center gap-2"><BiTimeFive />9 Sessions</p> <p className="flex items-center gap-2"><BiTimeFive />9 Sessions</p></div>
//                 </div>
//               </div>
//               <div className="cd justify-center w-full py-4">
//                 <h4 className=" text-lg font-bold ">
//                   Course duration
//                 </h4>
//                 <div>
//                 <p className="flex items-center gap-2"><BsCalendar2Week />9 Sessions</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="c-details w-full">
//           {ccDetails.map((items) =>(<Togal heading={items.title} paragraph={items.paragraph} id={items.id}></Togal>))}
          
//           </div>
//           <div className=" mb-6">
//             <h4 className=" text-lg my-4 font-bold mx-2">
//               FAQs
//             </h4>
//             {faqDetails.map((items) =>(<Togal heading={items.title} paragraph={items.paragraph} id={items.id}></Togal>))}
//           </div>
//         </div>
//       </div>
//     </>

//   );

// }

// type Togal = {
//   heading :String ,
//   paragraph : String,
//   id : Number
// }
// const Togal = ({heading, paragraph , id}: Togal) =>{
  
// function handleTogal(){
//   setheight(!height)
// }

// const [height,setheight] =useState(false)
//   return(

//    <div id={`${id}`}className=" py-2 px-3 cursor-pointer w-full" onClick={() =>{handleTogal()}}><div className=" grid grid-cols-[1fr_minmax(3px,_10px)] w-full border-b-2 align-middle">
//      <h3 className=" text-lg my-2 py-1">{heading}</h3>
//      <div className=" justify-self-end"><IoIosArrowDown/></div>
//    </div><p 
//     className={`togal overflow-hidden text-primaryOrange text-base ${!height? 'h-0' : 'h-max'}`} >{paragraph}</p></div>
//   )
// }

import { useState } from "react";
import {IoIosArrowDown} from "react-icons/io"
import {ccDetails,faqDetails} from "./Details";
import {FaChalkboardTeacher  } from "react-icons/fa" ;
import {AiTwotoneStar} from "react-icons/ai"
import {HiUsers} from "react-icons/hi"
import {GrMultimedia} from "react-icons/gr" ;
import {BsCalendar2Week , BsFillCameraVideoFill} from "react-icons/bs" ;
import {BiDownload,BiTimeFive} from "react-icons/bi" ;
import Video from "./Video";

export default function Courses() {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[90%] min-h-screen md:w-[70%]">
          <div className="Hero-Section mt-6 ">
            <h1 className="max-w-[70%] text-xl text-black lg:text-2xl">
              Mind-blowing mornings: Wellness program
            </h1>
            <span>By Radhika Rao, Yoga Instructor</span>
            <div className="flex gap-3 mt-2">
              
              <span className="flex gap-1 items-baseline"><div className=" text-primaryOrange"> <AiTwotoneStar/> </div>4.5  rating</span>

              <span className="flex gap-1 items-baseline"> <div className=" text-primaryOrange"><HiUsers/></div>33145 students</span>

            </div>
            <div className="w-[100%] aspect-[2] bg-red-400 mt-2">
              <Video/>
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="cc bg-gray-50 justify-center w-full py-4">
                <h4 className=" text-lg font-bold ">
                  Course content
                  
                </h4>
                <div>
                  <div className="flex w-full gap-4"><p className="flex items-center gap-2"><FaChalkboardTeacher />9 Sessions</p> <p className="flex items-center gap-2"><BiDownload />9 Sessions</p></div>
                  <div className="flex w-full gap-4"><p className="flex items-center gap-2"><GrMultimedia/>9 Sessions</p> <p className="flex items-center gap-2"><BsFillCameraVideoFill/>9 Sessions</p></div>
                </div>
              </div>
              <div className="cb justify-center w-full py-4">
                <h4 className=" text-lg font-bold ">
                  Course batches
                </h4>
                <div>
                <div className="flex w-full gap-4"><p className="flex items-center gap-2"><BiTimeFive />9 Sessions</p> <p className="flex items-center gap-2"><BiTimeFive />9 Sessions</p></div>
                  <div className="flex w-full gap-4"><p className="flex items-center gap-2"><BiTimeFive />9 Sessions</p> <p className="flex items-center gap-2"><BiTimeFive />9 Sessions</p></div>
                </div>
              </div>
              <div className="cd justify-center w-full py-4">
                <h4 className=" text-lg font-bold ">
                  Course duration
                </h4>
                <div>
                <p className="flex items-center gap-2"><BsCalendar2Week />9 Sessions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-details w-full">
          {ccDetails.map((items) =>(<Togal heading={items.title} paragraph={items.paragraph} id={items.id}></Togal>))}
          
          </div>
          <div className=" mb-6">
            <h4 className=" text-lg my-4 font-bold mx-2">
              FAQs
            </h4>
            {faqDetails.map((items) =>(<Togal heading={items.title} paragraph={items.paragraph} id={items.id}></Togal>))}
          </div>
        </div>
      </div>
    </>

  );

}

type Togal = {
  heading :String ,
  paragraph : String,
  id : Number
}
const Togal = ({heading, paragraph , id}: Togal) =>{
  
function handleTogal(){
  setheight(!height)
}

const [height,setheight] =useState(false)
  return(

   <div id={`${id}`}className=" py-2 px-3 cursor-pointer w-full" onClick={() =>{handleTogal()}}><div className=" grid grid-cols-[1fr_minmax(3px,_10px)] w-full border-b-2 align-middle">
     <h3 className=" text-lg my-2 py-1">{heading}</h3>
     <div className=" justify-self-end"><IoIosArrowDown/></div>
   </div><p 
    className={`togal overflow-hidden text-primaryOrange text-base ${!height? 'h-0' : 'h-max'}`} >{paragraph}</p></div>
  )
}
