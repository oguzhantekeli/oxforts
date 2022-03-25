import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BecomeTeacher from "./pages/BecomeTeacher";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import Teachers from "./pages/Teachers";
import TeacherDetails from "./pages/TeacherDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TopbarOne from "./components/TopbarOne";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPopup from "./components/SearchPopup";

const App = () => {
  return (
    <>
      <Router>
        <div className="preloader">
          <span></span>
        </div>
        <div className="page-wrapper">
          <TopbarOne />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/becometeacher" element={<BecomeTeacher />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/coursedetails/:id" element={<CourseDetails />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogdetails/:id" element={<BlogDetails />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teacherdetails/:id" element={<TeacherDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div>404-Not found..</div>} />
          </Routes>
          <Footer />
        </div>
        <SearchPopup />
      </Router>
    </>
  );
};

export default App;
