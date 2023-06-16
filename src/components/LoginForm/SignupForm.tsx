// import React from "react";
import "./LoginForm.css";
import Post6 from "../../assets/Post6.png";
import LoginCard from "./LoginCard";
import gIcon from "../../assets/g-icon.svg";
import checkIcon from "../../assets/check.svg";

const SignupForm = () => {
  return (
    <div className="w-[1060px] p-20 h-[800px] bg-white rounded-2xl grid grid-cols-2 items-center font-mainFont">
      <LoginCard />
      <div className="border-l border-black pl-12">
        <form className="text-[#5D5A6F] flex flex-col gap-4">
          <button className="h-[50px] flex border border-[#DEDDE4] rounded-lg w-full items-center gap-2">
            <img src={gIcon} alt="google icon" />
            <span className="font-mainFont">Sign in with google</span>
          </button>
          <span className="text-center">Or signup with your email</span>
          <div>
            <label htmlFor="name" className="font-medium text-[#0A033C]">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ramesh Singh"
              className="rounded-lg border border-[#DEDDE4] w-full h-[50px] pl-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-medium text-[#0A033C]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="ramesh123@example.com"
              className="rounded-lg border border-[#DEDDE4] w-full h-[50px] pl-4"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium text-[#0A033C]">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*************"
              className="rounded-lg border border-[#DEDDE4] w-full h-[50px] pl-4"
            />
          </div>
          <span className="text-[#5D5A6F] font-medium flex gap-2 justify-center">
            <img src={checkIcon} alt="check sign" />
            <span>I agreed to the Terms & Conditions</span>
          </span>
          <button className="font-medium text-white bg-primaryOrange w-full h-[50px] rounded-xl">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Alreay have account? </span>
          <a href="#" className="text-primaryOrange">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
