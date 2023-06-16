import { Link } from "react-router-dom";
import './community.css'
import Button from "../../components/Buttons/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CommunityCardCarousel from "../../components/CommunityCard/CarousalCard";

export default function Community() {
  return (<>
  <Navbar/>
    <div className='section w-full flex justify-center items-center my-10 md:px-24 px-8'>
      <div className="container">
        <div className="flex main justify-between">
          <div className="links ">
            <div className="link w-full">
              <h4 className="Cheading font-bold" style={{ fontSize: "2.4rem", color: "#F47D31" }}>Popular reads !</h4>
              <div className="Links border-b mr-10">
                <Link to={"/"} className="flex justify-between w-[401px] my-[32px]"><span style={{ fontSize: "1.6rem" }}>13 Reasons why ?<br />
                  Morning person lifestyle<div className="small mt-2"><p style={{ fontSize: "15px", color: "#3C3C3C" }}>4 min read <span style={{ fontSize: "15px", color: "#FD7D31", marginLeft: "10px" }}>Forbes.com</span></p></div></span><img src="./src/pages/Community_Page/Group 4.svg" alt="" /></Link>
              </div>
              <div className="Links border-b mr-10">
                <Link to={"/"} className="flex justify-between w-[401px] mb-[26px]"><span className="para" style={{ fontSize: "1.6rem" }}>Night person all myths<br /> busted - Mornings<div className="small mt-2"><p style={{ fontSize: "15px", color: "#3C3C3C" }}>2 min read <span style={{ fontSize: "15px", color: "#FD7D31", marginLeft: "10px" }}>Talego</span></p></div></span><img src="./src/pages/Community_Page/Group 4.svg" alt="" /></Link>
              </div>
              <div className="Links border-b mr-10">
                <Link to={"/"} className="flex justify-between w-[401px] my-[32px]"><span style={{ fontSize: "1.6rem" }}>Health Benefits because<br /> of morning routines<div className="small mt-2"><p style={{ fontSize: "15px", color: "#3C3C3C" }}>10 min read <span style={{ fontSize: "15px", color: "#FD7D31", marginLeft: "10px" }}>WHO.io</span></p></div></span><img src="./src/pages/Community_Page/Group 4.svg" alt="" /></Link>
              </div>
              <Button className="mt-4 self-center" style={{ padding: "1rem 5.5rem", margin: "1rem 0" }}>Tranform your life like this →</Button>
            </div>
          </div>
          <div className="img"><img src="./src/pages/Community_Page/Post 4.png" /></div>
        </div>
        <div className="vi flex mt-10 justify-between w-[100%]">
          <div className="video"><img src="./src/pages/Community_Page/Video Card.png" alt="" /></div>
          <div className="BuddyP mx-10 justify-center">
            <div className="bheading flex justify-between">
              <span className="back"><img src="./src/pages/Community_Page/Arrow.svg" alt="" /></span>
              <h4 className="Cheading font-bold mb-4" style={{ fontSize: "1rem", color: "#F47D31" }}>Buddy <br />program</h4>
              <span className="option"><img src="./src/pages/Community_Page/More.svg" alt="" /></span>
            </div>
            <div className="spiralimg"><img src="./src/pages/Community_Page/spiral.png" alt="" /></div>
            <div className="Action">
              <h3 className="Cheading font-bold my-6" style={{ fontSize: "1rem", color: "#F47D31" }}>Get help from your friend during the transformation</h3>
              <Button style={{ backgroundColor: "white", color: "orange", border: "2px solid orange", padding: ".5rem 2rem" }} className="BPbtn">Get connected to your Buddy now</Button>
            </div>
          </div>
          <div className="Postimg"><img src="./src/pages/Community_Page/Buddies.png" alt="" /></div>
        </div>
        <div className="scard my-10">
          <h4 className="Cheading font-bold" style={{ fontSize: "1.4rem", color: "#F47D31" }}>Did You Know !</h4>
          <div className="cards flex">
            <div className="my-2 mr-7 flex">
              <div className=" m-2"><img src="./src/pages/Community_Page/Group 23.png" alt="" /></div>
              <div className="Info">
                <h6 className="font-bold">Lorem ipsum dolor sit amet.</h6>
                <p className="more font-extralight mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="my-2 mr-7 flex">
              <div className=" m-2"><img src="./src/pages/Community_Page/Group 24.png" alt="" /></div>
              <div className="Info">
                <h6 className="font-bold">Lorem ipsum dolor sit amet.</h6>
                <p className="more font-extralight mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="my-2 flex">
              <div className=" m-2"><img src="./src/pages/Community_Page/Group 25.png" alt="" /></div>
              <div className="Info">
                <h6 className="font-bold">Lorem ipsum dolor sit amet.</h6>
                <p className="more font-extralight mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
          <div className="cards flex">
            <div className="my-2 mr-7 flex">
              <div className=" m-2"><img src="./src/pages/Community_Page/Group 26.png" alt="" /></div>
              <div className="Info">
                <h6 className="font-bold">Lorem ipsum dolor sit amet.</h6>
                <p className="more font-extralight mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="my-2 mr-7 flex">
              <div className=" m-2"><img src="./src/pages/Community_Page/Group 27.png" alt="" /></div>
              <div className="Info">
                <h6 className="font-bold">Lorem ipsum dolor sit amet.</h6>
                <p className="more font-extralight mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className=" my-2  flex">
              <div className=" m-2"><img src="./src/pages/Community_Page/Group 28.png" alt="" /></div>
              <div className="Info">
                <h6 className="font-bold">Lorem ipsum dolor sit amet.</h6>
                <p className="more font-extralight mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bcards my-10 mx-auto">
          <h4 className="Cheading font-bold" style={{ fontSize: "1.4rem", color: "#F47D31" }}>Moments from the Program !</h4>
          <div className="flex flex-wrap justify-between">
            <CommunityCardCarousel/>
          </div>
        </div>
        <div className="Class my-8">
          <h4 className="Cheading font-bold" style={{ fontSize: "1.4rem", color: "#F47D31" }}>Easy Yoga exercises (Level 1)</h4>
          <div className="CARDS flex justify-between my-4">
            <div className="card1 mx-6 w-[30rem]">
              <img src="./src/pages/Community_Page/c3.1.png" />
              <div className="detials bg-[#f5f5ee] p-2">
                <span>Tina Vlog</span>
                <p className=" font-bold">Kundalini Vinyasa Yoga - for Immunity</p>
                <p className="flex"><div className=" font-light"> 46 Min|Level: 1-2|Anstrengung </div><span className=" ml-2 mt-2"><img src="./src/pages/Community_Page/level.png" alt="" /></span></p>
              </div>
            </div>
            <div className="card1 mx-6 w-[30rem]">
              <img src="./src/pages/Community_Page/c3.2.png" />
              <div className="detials bg-[#f5f5ee] p-2">
                <span>Barbra Noh</span>
                <p className=" font-bold">Tutorial: Root to Rise – For legs and hands to stretch and loosen up</p>
                <p className="flex"><div className=" font-light"> 46 Min|Level: 1-2|Anstrengung </div><span className=" ml-2 mt-2"><img src="./src/pages/Community_Page/level.png" alt="" /></span></p>
              </div>
            </div>
            <div className="card1 mx-6 w-[30rem]">
              <img src="./src/pages/Community_Page/c3.2.png" />
              <div className="detials bg-[#f5f5ee] p-2">
                <span>Moritz Ulrich</span>
                <p className=" font-bold">Sit ups: For flexibility</p>
                <p className="flex mt-4"><div className=" font-light"> 46 Min|Level: 1-2|Anstrengung </div><span className=" ml-2 mt-2"><img src="./src/pages/Community_Page/level.png" alt="" /></span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="vector w-full my-4">
          <p className="right-24 my-3" style={{fontSize:"23px", color:"gray", marginLeft:"27rem"}}>How much does an online meditation course cost?</p>
          <Button className="px-4 py-2" style={{backgroundColor:"#fff", color:"black", borderRadius:"20px", marginLeft:"35rem"}}>Transform your life now !</Button>
        </div>
        <div className="Bg my-4 flex items-end relative">
          <div className=""><Button className=" px-12 py-[1rem] bottom-[40px] absolute left-10" style={{borderRadius:"30px"}}>Get Started</Button></div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}
