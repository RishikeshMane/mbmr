// import { FC } from 'react';
import './Rating.css';


 const Rating = () => {
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1 style={{fontSize:"40px",fontWeight:"bolder"}}>Our happy clients says about us</h1>
                    <p className="para">2,157 people have said how good Mind blowing mornings</p>
                </div>
                <div className="testimonial">
                    <div className="CARD">
                        <div className="rating">
                            <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span>
                        </div>
                        <div className="comment">
                            <p className="cmnt">"I've never felt more energized and alive. This program has truly transformed my life."</p>
                        </div>
                        <div className="pinfo">
                            <img src="./src/assets/Oval.png" />
                            <div className="name"><strong>Sarah K</strong><span className="reg">Journalist</span></div>

                        </div>
                    </div>
                    <div className="CARD">
                        <div className="rating">
                            <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span>
                        </div>
                        <div className="comment">
                            <p className="cmnt">"The instructor are amazing, and the community support is invaluable.Highly recommend!"</p>
                        </div>
                        <div className="pinfo">
                            <img src="./src/assets/Ovalman2.png"alt="man1" />
                            <div className="name"><strong>Jhon D</strong><span className="reg">Digital Marketer</span></div>

                        </div>
                    </div>
                    <div className="CARD">
                        <div className="rating">
                            <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span>
                        </div>
                        <div className="comment">
                            <p className="cmnt">"I never thought I could do yoga, but this program made it accessible and enjoyable for me."</p>
                        </div>
                        <div className="pinfo">
                            <img src="./src/assets/Ovalman3.png" alt="man1" />
                            <div className="name"><strong>Lisa M</strong><span className="reg">Graphic Designer</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rating