import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/Buttons/Button";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses/Courses";
import Community from "./pages/Community_Page/Community";
import Contact from "./pages/contactpage/Contact";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";

import Hero from "./components/Hero/Hero";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginCard from "./components/LoginForm/LoginCard";
import SignupForm from "./components/LoginForm/SignupForm";

// import Rating from './components/Rating_Section/Rating'
Hero;

const App = () => {
  return (
    <>
      {/* <Button outline="outline" >hello</Button>  */}
      {/* {/* <Coursedetail/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
