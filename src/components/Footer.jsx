import React from "react";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-center text-white">
            Welcome to our portfolio website! I, Utkarsh, an adept web developer,
            am delighted to present our collaborative prowess. Joined by Purna Siva Sai,
            whose astute knowledge of Kubernetes proved invaluable, we have harnessed our expertise
            to construct an impressive JavaScript-based portfolio site.
            My deftness in JavaScript is evident in the visually alluring and functionally impeccable website,
            engendering a superlative user experience. Seamless navigation and interactive elements synergistically
            weave an engaging tapestry. Purna's mastery of Kubernetes facilitated deployment on a scalable container
            orchestration platform, adeptly leveraging GitLab's CI/CD pipeline for automated scaling, thus ensuring
            unwavering performance amidst surges in traffic. Embracing perpetual growth, I ardently pursue emerging
            technologies to deliver pioneering solutions aligned with evolving industry exigencies.
            Delve into our projects, including the dynamic portfolio website crafted by me and deployed via
            Kubernetes by Purna, and envision how our combined prowess can enrich your forthcoming endeavors.
            <a href="https://www.youtube.com/@javascriptmastery" target="_blank"> Credit: Adrian -JavaScript Mastery</a>
          </p>
        </div>
        <br></br>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <FaHome className="text-white mr-2" size={20} />
              <div>
                <p className="text-white text-center">Pennsylvania State University, University Park</p>
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
              <h2>Last Updated: July 7, 2023</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
