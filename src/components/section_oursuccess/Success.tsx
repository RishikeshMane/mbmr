// import React from 'react'
import './pro1.css'
import './project-1/bootstrap.min.css'
import img1 from "./project-1/Group 110.svg"
import img2 from './project-1/Group 108-2.svg'
import img3 from './project-1/Group 109-3.svg'
import img4 from './project-1/34-Happy and Smile-4.svg'
export default function Success() {
    return (
        <div>
            <div className="container-fluid" >

                <div className="row"  >
                    <div className=" flex item-center flex-col justify-center  col-lg-3 px-5" id="one" >
                        <img className="aimage" src= {img1} width="60px" height="60px" />
                        <p className="apara">Qualified instructors</p>
                        <b className="abold" >1+</b>&nbsp;
                    </div>

                    <div className=" flex item-center flex-col justify-center col-lg-3" id="two" >
                        <img className="bimage" src={img2} width="60px" height="60px" />
                        <p className="bpara" >Enrolled Members</p>
                        <b className="bbold" >20+</b>&nbsp;
                    </div>

                    <div className=" flex item-center flex-col justify-center col-lg-3" id="three" >
                        <img className="cimage" src={img3} width="60px" height="60px" />
                        <p className="cpara" >Session</p>
                        <b className="cbold" >5+</b>&nbsp;
                    </div>

                    <div className=" flex item-center flex-col justify-center col-lg-3" id="four" >
                        <img className="dimage" src={img4} width="60px" height="60px" />
                        <p className="dpara" >Happy customers</p>
                        <b className="dbold" >14+</b>&nbsp;
                    </div>

                </div>

            </div>
        </div>
    )
}
