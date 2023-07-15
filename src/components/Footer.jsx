import React from "react";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-16 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-center text-white">
            Welcome to my portfolio website! My name is Utkarsh (UC) Choudhary. 
            I am currently a junior in Penn State University, studying Computer Science.
            My contacts are listed below.
          </p>
        </div>
        <br></br>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <FaHome className="text-white mr-2" size={20} />
              <div>
                <p className="text-white text-center">Pennsylvania State University</p>
                <p className="text-white text-center">University Park, PA 16802.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FaMailBulk className="text-white mr-2" size={20} />
              <a href="mailto:ufc5009@psu.edu" className="text-white text-center">ufc5009@psu.edu</a>
            </div>

            <div className="flex flex-col items-center">
              <FaPhone className="text-white mr-2" size={20} />
              <h4 className="text-white text-center">+1(484)-797-8693</h4>
            </div>
            <div className="flex flex-col items-center">
              <DiGithubBadge className="text-white mr-2" size={20} />
              <a href="https://www.github.com/udogg" target="_blank" className="text-white text-center">github.com/UDogg</a>
            </div>
            <div className="flex flex-col items-center">
              <h2>Last Updated: July 16, 2023</h2>
            </div>
            <div className="absolute bottom-0 left-0">
              <a href="https://www.youtube.com/@javascriptmastery" target="_blank"> Credit: Adrian -JavaScript Mastery</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
