import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import AboutMe from "./components/aboutme";
import Timeline from "./components/history";
import ProjectsGrid from "./components/projects";
import Contact from "./components/contact";
import KnowMore from "./components/knowmore";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div id="aboutme" classname="bg-black h-[10px]"></div>
      <AboutMe />
      <h2 id="history" className=" text-4xl md:text-5xl text-bg-black font-bold lg:ml-36 md:ml-10 sm:ml-10 ml-10 text-white  scroll-offset ">
        Experience
      </h2>
      <Timeline />
      <h1 id="projects" className="text-4xl md:text-5xl text-bg-black font-bold mt-28 lg:ml-36 md:ml-10 sm:ml-10 ml-6  text-white scroll-offset " >
        Projects & Publications
      </h1>
      <ProjectsGrid />
      {/* <KnowMore /> */}
      <Contact />
      {/* <footer className="mt-4 mb-4 text-center text-gray-400 text-sm flex flex-col items-center">
        <p>
          Developed & Designed with{" "}
          by{" "}
          <a
            href="https://github.com/Yash16p"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-300 text-xs md:text-lg hover:text-blue-500 transition-all duration-300"
          >
           Abhigyan Ranjan
          </a>
        </p>
      </footer> */}
    </div>

  );
}

export default App;
