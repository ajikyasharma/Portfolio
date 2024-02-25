import React from "react";

import Ajikya3 from "../assets/Ajikya3.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen pb-4 md:pb-0 w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Welcome to my digital domain! I'm on a mission to sculpt digital
            landscapes with lines of code, bringing ideas to life one pixel at a
            time. As a Full Stack Developer, I thrive on the dynamic dance
            between front-end finesse and back-end brilliance.
          </p>

          <div>
            <Link
              to="projects"
              smooth-duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-rose-500 to-rose-600 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <MdKeyboardArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Ajikya3}
            alt="myprofile"
            className=" mx-auto w-2/3  rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 hover:shadow-lg   hover:scale-105 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
