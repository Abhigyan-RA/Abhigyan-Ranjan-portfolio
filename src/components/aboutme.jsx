import { useState, useEffect, useRef } from "react";
import { FaReact, FaPython, FaGit, FaFigma,FaNode,FaDatabase,FaDev,FaBusinessTime  } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiJavascript, SiFastapi, SiTensorflow, SiKeras,SiQgis  } from "react-icons/si";
import Popup from "./popup";
import image1 from "../assets/sih.jpg";
import image3 from "../assets/isro.png";
import image5 from "../assets/leetcodelogo.webp";
import image6 from "../assets/iit-j.png";
import NeuralNetworkBackground from "./neural-animation";
import { Briefcase, GraduationCap, Trophy, Quote } from "lucide-react"
const skillsData = [
  {
    category: "Core Technical Expertise",
    skills: [
      { label: "Python", icon: <FaPython /> },
      { label: "TensorFlow", icon: <SiTensorflow /> },
      { label: "Keras", icon: <SiKeras /> },
      { label: "Computer Vision", icon: <SiTailwindcss /> }, // placeholder icon
      { label: "NLP", icon: <FaFigma /> }, // placeholder icon
      { label: "Machine Learning", icon: <SiTensorflow /> },
      { label: "Deep Learning", icon: <SiKeras /> },
      { label: "Data Analysis", icon: <FaPython /> },
      { label: "Data Science", icon: <FaPython /> },
      { label: "Fine-tuning LLMs", icon: <FaPython /> },
      { label: "Prompt Engineering", icon: <FaReact /> }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { label: "Git", icon: <FaGit /> },
      { label: "GitHub", icon: <FaGit /> },
      { label: "QGIS", icon:<SiQgis /> }, // using Figma as a placeholder
      { label: "Vercel",icon:<FaDev /> }, // placeholder
      { label: "Render",icon:<FaDev />  } // placeholder
    ]
  },
  {
    category: "Familiar Technologies",
    skills: [
      { label: "React.js", icon: <FaReact /> },
      { label: "Node.js", icon: <FaNode /> },
      { label: "C", icon: <SiCplusplus /> },
      { label: "C++", icon: <SiCplusplus /> },
      { label: "FastAPI", icon: <SiFastapi /> },
      { label: "MySQL", icon:<FaDatabase />  }, // placeholder
      { label: "MongoDB", icon:<FaDatabase />} // placeholder
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { label: "Teamwork  ",  }, 
      { label: "Leadership", },
      { label: "Problem-Solving",  },
      { label: "Communication", },
      { label: "Adaptability",  }
    ]
  }
];

const AboutMe = () => {
  const [headingText, setHeadingText] = useState("About Me");
  const [showIcons, setShowIcons] = useState(false);
  const aboutMeRef = useRef(null);
  const [popupData, setPopupData] = useState({
    isOpen: false,
    title: "",
    image: "",
    details: "",
  });

  // const handleMouseEnter = () => {
  //   setHeadingText("Still exploring myself :))");
  // };

  const handleMouseLeave = () => {
    setHeadingText("About Me");
  };

  const openPopup = (title, image, details) => {
    setPopupData({
      isOpen: true,
      title,
      image,
      details,
    });
  };

  const closePopup = () => {
    setPopupData({ ...popupData, isOpen: false });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowIcons(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }
    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (

    <div
      ref={aboutMeRef}
      className="min-h-screen w-full flex flex-col items-center justify-center lg:flex-row mt-20 mb-20  bg-black text-white py-10 px-10"
    >
      
      <div className="z-10 lg:w-[80%] md:w-[90%] sm:w-full w-full p-8 border border-white rounded-lg shadow-lg">
        <h1
          className="text-2xl sm:text-4xl font-bold mb-4 cursor-pointer animate-fadeIn"
          // onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {headingText}
        </h1>

        <div className="space-y-4 mb-8">
  <div className="pl-7">
    <p className="text-lg font-medium">
      B.Tech in Artificial Intelligence & Data Science
    </p>
    <div className="flex items-center gap-2 text-gray-300">
      <span>ADGIPS</span>
      <span>•</span>
      <span>2022-2026</span>
      <span>•</span>
      <span>SGPA: 8.9</span>
    </div>
  </div>
  <ul className="list-disc pl-7 text-gray-300 space-y-2">
    <li>
      AI and Backend Developer Intern at Untitled Ventures, contributing to Lagoon, a recruiting software, by developing scalable systems and reducing recruiter screen time by 90% and resume extraction time by 66.67%.
    </li>
    <li>
      Finalist in Smart India Hackathon 2024, ranked Top 12 nationwide in ISRO Bhartiya Antariksh Hackathon '24 and 1st Runner-up in Quant ML’25 by IIT Jodhpur.
    </li>
    <li>
      IBM-certified Data Science Professional with strong skills in building predictive models, deep learning models, and delivering insights through real-world projects.
    </li>
  </ul>
</div>


        {/* Achievements Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl mb-6 border-b border-gray-500 pb-2 text-blue-400">
            Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementCard
              title="ISRO BAH ‘24 Grand Finalist"
              description="Secured Top 10 among 44,000+ participants"
              onSeeMore={() =>
                openPopup(
                  "ISRO BAH ‘24 Grand Finalist",
                  image3,
                  "I, along with my team, proudly secured a spot in the top 10 of the ISRO Bhartiya Antariksh Hackathon among 34,000+ students. Our project on rooftop solar energy potential mapping using AI showcased our advanced technical skills and innovative approach."
                )
              }
            />
            <AchievementCard
              title="SIH ‘24 Grand Finalist"
              description="Grand Finalist among 3+ lakh students"
              onSeeMore={() =>
                openPopup(
                  "SIH ‘24 Grand Finalist",
                  image1,
                  "As Grand Finalists of the Smart India Hackathon 2024, our team stood out among 3+ lakh participants. Our solution for automatic road extraction and alert generation demonstrated our ability to apply AI techniques to real-world problems."
                )
              }
            />
            <AchievementCard
              title="DSA Mastery"
              description="Solved 250+ problems on LeetCode & excelled in competitive programming"
              onSeeMore={() =>
                openPopup(
                  "DSA Mastery",
                  image5,
                  "I have successfully solved over 250 problems in data structures and algorithms using C++, reflecting my strong problem-solving skills and competitive programming expertise."
                )
              }
            />
            <AchievementCard
              title="Quant ML’25 by IIT Jodhpur"
              description="1st Runner-up in Quant ML’25 by IIT Jodhpur"
              onSeeMore={() =>
                openPopup(
                  "Quant ML Hackathon",
                  image6,
                  "Secured 2nd Position in Quantalytics at Prometeo'25, organized by IIT Jodhpur! Our team excelled in Exploratory Data Analysis, Feature Engineering, Model Building, and crafted a custom Backtesting Algorithm for Trading from scratch. Huge thanks to my teammate, Tanmay Arora, for the incredible collaboration! Looking forward to applying these skills in future projects!"
                )
              }
            />
            <AchievementCard
  title="IBM Data Science Professional Certificate"
  description="Obtained Data Science Professional Certificate from IBM"
  onSeeMore={() => window.open("https://coursera.org/verify/professional-cert/EKTNGF679HZD", "_blank")}
/>

            {popupData.isOpen && (
              <Popup
                title={popupData.title}
                image={popupData.image}
                details={popupData.details}
                onClose={closePopup}
              />
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full mt-10">
          <h2 className="text-2xl sm:text-3xl mb-4 text-blue-400 border-b border-gray-500 pb-2">
            Skills
          </h2>
          <div className="space-y-6">
            {skillsData.map((category, idx) => (
              <div key={idx} className="animate-fadeInUp">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full transition-transform duration-300 hover:scale-105"
                    >
                      <div className="text-xl text-white">{skill.icon}</div>
                      <span className="text-sm text-gray-200">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Icons Sidebar */}
 
    </div>
  );
};

const AchievementCard = ({ title, description, onSeeMore }) => {
  return (
    <div
      className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out group hover:scale-105 hover:bg-gray-700 hover:border-blue-400 animate-fadeInUp cursor-pointer"
      onClick={onSeeMore}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-gray-100 group-hover:text-blue-300">
        {title}
      </h3>
      <p className="text-sm sm:text-md text-gray-300 mt-2">{description}</p>
    </div>
  );
};

const TechIcon = ({ icon, color, label, size, show, delay }) => {
  return (
    <div
      className={`flex flex-col items-center text-center cursor-pointer group ${
        show ? "animate-fadeIn" : ""
      }`}
      style={{ animationDelay: delay }}
    >
      <div className="transition-all duration-300" style={{ fontSize: size, color: "white" }}>
        <span
          className="transition-colors duration-300 group-hover:text-[var(--hover-color)]"
          style={{ "--hover-color": color }}
        >
          {icon}
        </span>
      </div>
      <div className="text-sm mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
        <span className="bg-black text-gray-100 px-2 py-1 rounded">{label}</span>
      </div>
    </div>
  );
};

export default AboutMe;
