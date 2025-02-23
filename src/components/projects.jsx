import React from "react";

import image2 from "../assets/project-4.png";
import image4 from "../assets/project-3.png";
import pi from '../assets/project-1.jpg'
import travel from '../assets/project-2.png'




const projects = [

  // {
  //   id: 1,
  //   name: "Banana Chips remake",
  //   description:
  //     "A remake of the original Kerala Banana Chips website, created as a practice project. This responsive website highlights the rich flavors of traditional Kerala banana chips with an appealing design, smooth navigation, and a focus on showcasing the product’s authenticity and quality.",
  //   image: banana,
  //   link: "https://web4-script-reimagine-round1.vercel.app/",
  //   techStack: ["React", "Tailwind CSS", "Nodejs", "DALLE"],
  // },

  {
    id: 2,
    name: "Kisan Seva",
    description:
      "An innovative app designed to empower farmers with advanced technology. Key features include real-time monitoring of soil conditions, automated irrigation based on machine learning predictions, access to up-to-date agricultural news, a personalized chatbot for farming advice, real-time weather updates, and AI-powered plant disease diagnosis through camera technology. This comprehensive app offers farmers a range of tools to optimize their farming practices and improve yields.",
    image: pi,
    link: "https://github.com/Abhigyan-RA/farmer-help",
    techStack: ["React-Native", "Gen-AI", "Machine Learning", "IOT"],
  },


  {
    id: 3,
    name: "Rooftop solar energy potential map",
    description:
      "The Rooftop Solar Energy Potential Map project is a comprehensive initiative aimed at identifying and visualizing the potential for solar energy generation on rooftops within a specific geographic area. By leveraging advanced geospatial analysis and data-driven modeling, the project creates automatic solar energy consumption for the specific geographical area helping government decide where to plant solar planels",
    image: image4,
    link: "https://github.com/Abhigyan-RA/Rooftop-Solar-Energy-Potential-Map",
    techStack: ["Python", "Tensorflow", "CNN","YOLOv8-seg"],
  },
  {
    id: 4,
    name: "LLM Fine tuning",
    description:
      "The Fine-tune-LLMplayground is a project focused on fine-tuning large language models (LLMs) using advanced techniques and frameworks like Hugging Face, DPO, and GEMINI-API. This project showcases my expertise in NLP, model optimization, and cutting-edge LLM frameworks.",
    image: travel,
    link: "https://github.com/Abhigyan-RA/Fine-tune-LLMplayground",
    techStack: ["Python", "JupyterNotebook", "Unsloth", "Hugging-Face"],
  },
  {
    id: 5,
    name: "Big Data in Data Science for Real-Time Stock Market Analysis ",
    description:
      "Co-authored a research paper exploring the impact of big data on real-time stock market analysis. The study presents an integrated approach utilizing YOLOv5 for visual data analysis alongside traditional financial data and social media sentiment. It highlights the power of combining visual and textual data sources with machine learning models to enhance stock value prediction and decision-making. This research showcases my expertise in big data analytics, machine learning, and real-time financial applications.",
    image: image2,
    link: "https://joirem.com/wp-content/uploads/journal/published_paper/volume-10/issue-11/J_xjkJ8LHh.pdf",
    techStack: ["Python", "Machine Learning", "YOLOv5","Object Detection"],
  },
  // {
  //   id: 3,
  //   name: "AI Image Generator",
  //   description:
  //     "I developed an **AI Image Generator** website using ReactJS and OpenAI's DALLE API. It lets users create stunning AI-generated images based on their prompts in real time, showcasing the fusion of creativity and technology.",
  //   image: image5,
  //   link: "https://github.com/Yash16p/AI-image-Generator",
  //   techStack: ["React", "Tailwind CSS", "Nodejs","DALLE"],
  // },
  // {
  //   id: 4,
  //   name: "Rooftop-Solar-Energy-Potential-Map",
  //   description:
  //     "Developed ResNet50-U-Net and YOLOv8-seg models to extract building footprints from satellite images with 95.21% accuracy. Designed a full prediction pipeline, improving IoU from 0.85 to 0.92 using post-processing techniques. It Calculates rooftop areas for strategic solar panel placement and energy estimation.",
  //   image: image3,
  //   link: "https://github.com/Yash16p/Rooftop-Solar-Energy-Potential-Map",
  //   techStack: ["React", "Tailwind CSS", "ML", "python-flask"],
  // },



];

const ProjectsGrid = () => {
  return (
    <div
      id="projects"
      className="bg-black min-h-screen flex justify-center items-center px-4 py-10"
    >
      <div className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-black rounded-lg p-4 overflow-hidden max-w-xl transform transition-transform duration-300 hover:scale-105 group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded-lg opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 opacity-20 transition-opacity duration-300 ease-in-out group-hover:opacity-0 rounded-lg"></div>
                </div>
              </a>
              <div className="mt-6 text-white text-left">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold hover:underline hover:cursor-pointer"
                >
                  {project.name}
                </a>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-blue-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mt-3">{project.description}</p>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;



