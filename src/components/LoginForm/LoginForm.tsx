// import React from "react";
import "./LoginForm.css";
import Post6 from "../../assets/Post6.png";
import LoginCard from "./LoginCard";
import gIcon from "../../assets/g-icon.svg";
import checkIcon from "../../assets/check.svg";

const LoginForm = () => {
  return (
    <div className="w-[1060px] p-20 h-[800px] bg-white rounded-2xl grid grid-cols-2 items-center font-mainFont">
      <LoginCard />
      <div className="border-l border-black pl-12">
        <form className="text-[#5D5A6F] flex flex-col gap-4">
          <button className="h-[50px] flex border border-[#DEDDE4] rounded-lg w-full items-center gap-2">
            <img src={gIcon} alt="google icon" />
            <span className="font-mainFont">Sign in with google</span>
          </button>
          <span className="text-center">Or signin with your email</span>
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
          <button className="font-medium text-white bg-primaryOrange w-full h-[50px] rounded-xl">
            Sign In
          </button>
        </form>
        <div className="flex mt-4 items-center justify-between">
          <div className="text-[#5D5A6F] font-medium flex gap-2">
            <img src={checkIcon} alt="check sign" />
            <p>keep me signed in</p>
          </div>
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
