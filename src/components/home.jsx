import React, { useRef, useEffect, useState } from "react";
import VANTA from "vanta/dist/vanta.net.min"; // You can also try other effects like vanta.waves.min.js
import * as THREE from "three";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import DisplayImage from "../assets/my2.png";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA({
          el: vantaRef.current,
          THREE: THREE,
          color: 0xff5722,         
          backgroundColor: 0x0a192f, 
          points: 12.0,            
          maxDistance: 20.0,      
          spacing: 15.0,          
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full" />;
};

const Home = () => {
  return (
    <div id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Vanta Animated Background */}
      <VantaBackground />

      {/* Content Container */}
      <div className="relative flex flex-col items-center sm:items-start w-full max-w-4xl px-4 sm:ml-20 md:ml-20 lg:ml-48 ml-0 pt-40 sm:pt-60">
        {/* Social Icons */}
        <div className="flex flex-col items-center sm:ml-40 sm:items-start mb-2">
          <div className="flex gap-4 mb-4 sm:mb-2">
            <a
              href="https://github.com/Abhigyan-RA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 text-3xl drop-shadow-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhigyan-ranjan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 text-3xl drop-shadow-lg"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Profile Image and Intro */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          {/* Profile Image */}
          <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 border-2 border-orange-400">
            <img
              src={DisplayImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Intro Text */}
          <div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              Abhigyan Ranjan
            </h1>
            <p
              className="text-2xl sm:text-2xl lg:text-4xl mt-2 sm:mt-4 text-gray-300"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            >
              <span>
                <Typewriter
                  words={[
                    "AI/ML Engineer",
                    "Data Scientist",
                    "Software Developer",
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
