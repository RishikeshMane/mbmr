import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook-nav.svg";
import twitter from "../../assets/twitter-nav.svg";
import linkedin from "../../assets/linkedin-nav.svg";
import glass from "../../assets/magnifying-glass.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className={`h-[60px] lg:h-[100px] bg-[#F5F5F5] z-50 ${location.pathname==="/" && "bg-[#fff] bg-opacity-50"}`} >
      <nav className="flex relative px-8 justify-between items-center h-full w-full">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[72px] h-[50px] lg:w-[116px] lg:h-[78px]"
          />
        </Link>
        <ul className="hidden gap-x-8 lg:flex">
          <li>
            <Link to="/about" className={`text-lg font-bold text-[#3C3C3C]
            ${location.pathname === "/about" && "text-[#F47D31]"}
            `}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/courses" className={`text-lg font-bold text-[#3C3C3C]
            ${location.pathname === "/courses" && "text-[#F47D31]"}
            `}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/community" className={`text-lg font-bold text-[#3C3C3C]
            ${location.pathname === "/community" && "text-[#F47D31]"}
            `}>
              Community
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`text-lg font-bold text-[#3C3C3C]
            ${location.pathname === "/contact" && "text-[#F47D31]"}
            `}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="hidden items-center gap-x-4 lg:flex">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
          <img src={glass} alt="magnifying glass" className="h-6 w-6" />
        </div>
        <button className="hidden py-[10px] bg-primaryOrange text-white w-[129px] h-14 rounded-xl text-lg font-bold uppercase lg:inline hover:bg-yellow-400 hover:shadow-navBtnShadow">
          Log in
        </button>

        {/* mobile menu */}
        <MobileMenu open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
}
