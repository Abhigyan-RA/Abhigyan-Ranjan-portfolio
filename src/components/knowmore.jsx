import React from 'react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import photo from "../assets/munda.jpg";

const KnowMore = () => {
  const { ref: leftRef, inView: leftVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: rightRef, inView: rightVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-4 mb-16 items-center gap-6 md:gap-0 relative">
        <div
          ref={leftRef}
          className={`relative w-full md:w-[60%] lg:w-[48%] mt-20 md:mt-0 ml-0 lg:ml-20 md:-mr-20 z-20 transition-transform duration-700 ${
            leftVisible ? 'animate-fade-in-left' : 'translate-x-0 opacity-100'
          }`}
        >
          <p className="text-white text-sm absolute left-0 -top-16 md:top-0 md:relative hover:text-blue-500 transition duration-300">
            More About Me
          </p>
          <h3 className="text-blue-500 text-3xl font-bold absolute left-0 -top-12 md:relative md:top-0 hover:text-white transition duration-300">
            Know More
          </h3>
          <div
            className={`p-6 md:p-8 rounded-lg shadow-lg z-10 mt-16 md:mt-10 relative bg-gray-900`}
          >
            <div
              className="absolute inset-0 md:hidden rounded-lg"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  backdropFilter: 'blur(4px)',
                }}
              ></div>
            </div>
            <div className="absolute inset-0 bg-blue-500 opacity-20 md:hidden rounded-lg"></div>

            <div className="relative z-10">
              <p className="text-gray-300 text-sm leading-relaxed hover:text-gray-100 transition duration-300 p-4 rounded-lg md:bg-transparent">
              Beyond my professional pursuits, I am driven by a relentless curiosity to explore uncharted territories both in technology and the world around me. My passion for traveling to undiscovered places fuels my creativity, while my dedication to fitness keeps me disciplined and resilient.

When I'm not optimizing algorithms or building scalable AI systems, you’ll find me strategizing my next move on the chessboard or pushing my limits at the gym. My journey in AI/ML is fueled by a desire to push boundaries, from developing transformer models to architecting intelligent systems that redefine possibilities
              </p>

              <div className="mt-4">
                <h4 className="text-blue-500 text-md transition duration-300">Position of Responsibility</h4>
                <ul className="text-gray-300 list-decimal marker:text-blue-500 pl-5 text-sm mt-2">
                  <li className="hover:text-gray-100 transition duration-300">Technical Head, Animeverse - Official Anime Society, ADGIPS</li>
                  <li className="hover:text-gray-100 transition duration-300">Served as Technical Head, E-Cell ADGIPS</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 text-center mt-6">
              <a
                href="https://github.com/Abhigyan-RA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhigyan-ranjan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:abhigyanranjanofficial@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`hidden md:block md:w-[50%] lg:w-[40%] mt-20 relative z-0 transition-transform duration-700 ${
            rightVisible ? 'animate-fade-in-right' : 'translate-x-[100%] opacity-0'
          }`}
        >
          <div className="relative group">
            <img
              src={photo}
              alt="ISRO image"
              className="rounded-lg shadow-lg filter group-hover:blur-0 transition-transform duration-300"
            />
            <div className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMore;

