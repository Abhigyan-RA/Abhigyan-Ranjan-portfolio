import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
// import WaveImage from "../assets/wave.jpg";
import DisplayImage from "../assets/my2.png";
import  NeuralNetworkBackground from "./neural-animation.jsx";

const Home = () => {
  return (
    <div
      id="home"
      className="h-[90vh] w-full flex items-start text-white bg-cover bg-center pt-6"
      // style={{
      //   backgroundImage: `url(${WaveImage})`,
      //   opacity: 0.9,
      //   backgroundAttachment: "fixed",
      // }}
    >
    <NeuralNetworkBackground />
      {/* Content Container */}
      <div className="z-10 flex flex-col items-center sm:items-start w-full max-w-4xl px-4 sm:ml-20 md:ml-20 lg:ml-48 ml-0 pt-40 sm:pt-60">
        {/* Social Icons */}
        <div className="flex flex-col items-center sm:ml-40 sm:items-start mb-2">
          <div className="flex gap-4 mb-4 sm:mb-2">
            <a
              href="https://github.com/Abhigyan-RA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhigyan-ranjan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Profile Image and Intro */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          {/* Profile Image */}
          <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32">
            <img
              src={DisplayImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Abhigyan Ranjan
            </h1>
            <p className="text-2xl sm:text-2xl lg:text-4xl mt-2 sm:mt-4">
              <span style={{ color: "white" }}>
                <Typewriter
                  words={[
                    "AI/ML Engineer",
                    "Data Scientist",
                    "Software Developer",
                    // "ML Developer",
                    "Problem Solver",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
