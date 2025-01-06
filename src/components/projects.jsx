import React from "react";

import image2 from "../assets/shopi.jpg";
import image3 from "../assets/rooftop.jpg";
import image4 from "../assets/road.jpg";
import image5 from "../assets/genai.png";
import banana from '../assets/ba.png'
import pi from '../assets/pi.png'
import travel from '../assets/travel.png'




const projects = [

  {
    id: 1,
    name: "Banana Chips remake",
    description:
      "A remake of the original Kerala Banana Chips website, created as a practice project. This responsive website highlights the rich flavors of traditional Kerala banana chips with an appealing design, smooth navigation, and a focus on showcasing the product’s authenticity and quality.",
    image: banana,
    link: "https://web4-script-reimagine-round1.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Nodejs", "DALLE"],
  },

  {
    id: 2,
    name: "Clothing Website",
    description:
      "Designed and developed a modern and responsive clothing website, Pineapple.in, showcasing a variety of trendy apparel. This project emphasizes a user-friendly interface, engaging product displays, and seamless navigation to enhance the online shopping experience.",
    image: pi,
    link: "https://www.thepineapple.in/",
    techStack: ["React", "Tailwind CSS", "Nodejs", "DALLE"],
  },

  {
    id: 3,
    name: "Travel Website",
    description:
      "Developed a responsive and visually appealing travel website that showcases stunning destinations and travel experiences. The site features smooth animations, intuitive navigation, and vibrant imagery to inspire users to explore and plan their next adventure.",
    image: travel,
    link: "https://travel-pi-six.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Nodejs", "DALLE"],
  },
  {
    id: 4,
    name: "Road Extraction",
    description:
      "We developed an innovative solution leveraging satellite imagery and AI techniques to automatically detect road developments and generate timely alerts. This system aimed to aid infrastructure planning and monitoring by providing accurate geographical insights",
    image: image4,
    link: "https://road-extraction.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Vite"],
  },
  {
    id: 5,
    name: "ShopApp",
    description:
      "I developed **ShopApp**, an e-commerce website, designed to provide a seamless shopping experience. Enabling users to browse products, add items to the cart, and manage purchases effortlessly. With state management and API integration, ShopApp ensures smooth navigation and real-time updates, making it a robust and user-friendly platform for online shopping.",
    image: image2,
    link: "https://github.com/Yash16p/shopapp",
    techStack: ["React", "Tailwind CSS", "Figma",],
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



