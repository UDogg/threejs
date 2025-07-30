import React from "react";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-16 rounded-3xl relative"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-center text-white">
            {/* Fixed: Added missing '>' after target="_blank" */}
            Welcome to my portfolio website! My name is <a href="https://www.linkedin.com/in/utkarsh-choudhary-a46146a4/" target="_blank" rel="noopener noreferrer">Utkarsh Choudhary</a>.
            I studied Computer Science at <a href="https://www.psu.edu/" target="_blank" rel="noopener noreferrer">The Pennsylvania State University</a>.
            My contacts are listed below.
          </p>
        </div>
        <br />
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <FaHome className="text-white mr-2" size={20} />
              <div>
                {/* Cleaned up URLs and added rel */}
                <p className="text-white text-center"><a href="https://www.google.com/maps/place/chembur+east/data=!4m2!3m1!1s0x3be7c5ede708d39d:0xd81ae764fa3f136d?sa=X&ved=1t:155783&ictx=111" target="_blank" rel="noopener noreferrer">Chembur East, Mumbai</a></p>
                <p className="text-white text-center"><a href="https://www.google.com/maps/place/mumbai/data=!4m2!3m1!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69?sa=X&ved=1t:155783&ictx=111" target="_blank" rel="noopener noreferrer">Mumbai, Maharashtra 400074, India.</a></p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FaMailBulk className="text-white mr-2" size={20} />
              <a href="mailto:choudharyu2003@gmail.com" className="text-white text-center" rel="noopener noreferrer">choudharyu2003@gmail.com</a>
            </div>

            <div className="flex flex-col items-center">
              <FaPhone className="text-white mr-2" size={20} />
              <h4 className="text-white text-center">+91 8433771419</h4>
            </div>
            <div className="flex flex-col items-center">
              <DiGithubBadge className="text-white mr-2" size={20} />
              <a href="https://www.github.com/udogg" target="_blank" className="text-white text-center" rel="noopener noreferrer">github.com/UDogg</a>
            </div>
            <div className="flex flex-col items-center">
              <p><h2 className="text-white">Last Updated: July 30, 2025</h2></p>
              <p><h4 className="text-white">Contact Form intentionally broken.</h4></p>
            </div>
            <div className="absolute bottom-0 left-0">
              <a href="https://www.youtube.com/@javascriptmastery" target="_blank" rel="noopener noreferrer"> Credit: Adrian - JavaScript Mastery</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
