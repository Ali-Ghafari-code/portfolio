"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTailwindcss, SiDjango, SiNextdotjs, SiHtml5 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import "react";
declare module "react" {
  interface CSSProperties {
    "--value"?: number;
    "--size"?: string;
    "--thickness"?: string;
  }
}
const timelineData = [
  {
    id: 1,
    title: "HTML, CSS",
    describtion: "I'm starting my journey by learning HTML and CSS.",
    level: 89,
    color: "text-orange-500",
    icon: <SiHtml5 />,
  },
  {
    id: 2,
    title: "JavaScript",
    describtion: "Delving into the world of dynamic scripting with JavaScript.",
    level: 89,
    color: "text-yellow-500",
    icon: <AiOutlineJavaScript />,
  },
  {
    id: 3,
    title: "TailwindCSS",
    describtion: "Styling with utility-first CSS framework, TailwindCSS.",
    level: 98,
    color: "text-blue-400",
    icon: <SiTailwindcss />,
  },
  {
    id: 4,
    title: "ReactJS",
    describtion: "Building interactive UIs with ReactJS.",
    level: 80,
    color: "text-blue-300",
    icon: <FaReact />,
  },
  {
    id: 5,
    title: "NextJS",
    describtion: "Exploring the full-stack framework, NextJS.",
    level: 50,
    color: "text-black",
    icon: <SiNextdotjs />,
  },
  {
    id: 6,
    title: "Django",
    describtion: "Creating robust web applications with Django.",
    level: 70,
    color: "text-green-800",
    icon: <SiDjango />,
  },
  {
    id: 7,
    title: "This road is long",
    describtion: "Continuous learning and improvement.",
    level: 100,
    color: "text-gray-500",
    icon: "",
  },
];

export default function Timeline() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < timelineData[currentStep].level) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 25);

    return () => clearInterval(interval);
  }, [currentStep]);

  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) =>
          prev < timelineData.length - 1 ? prev + 1 : prev
        );
        setProgress(0);
        setAnimationComplete(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [animationComplete]);

  useEffect(() => {
    const handleScroll = (event: {
      preventDefault: () => void;
      deltaY: number;
    }) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        setCurrentStep((prev) =>
          prev < timelineData.length - 1 ? prev + 1 : prev
        );
      } else if (event.deltaY < 0) {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
      }
      setProgress(0);
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    if (progress >= timelineData[currentStep].level) {
      setAnimationComplete(true);
    }
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center h-[62.5vh] p-4 lg:p-8 max-lg:mt-14">
      <div className="lg:absolute lg:left-4 lg:top-1/2 transform lg:-translate-y-1/2 flex lg:flex-col items-start">
        {timelineData.map((step, index) => (
          <div key={step.id} className="lg:flex items-center mb-4">
            <div
              className={`w-6 h-6 rounded-full transition-all duration-300 sm:mx-5 mx-2 ${
                index <= currentStep
                  ? "bg-gradient-to-r from-green-400 to-blue-500 scale-110"
                  : "bg-gray-600"
              }`}
              title={step.describtion}
            />
            <span className="ml-2 text-sm max-lg:mx-2 max-md:hidden">
              {step.title}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-lg text-center p-4 lg:p-8 relative ">
        <AnimatePresence mode="wait">
          <motion.div
            key={timelineData[currentStep].id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <div
              className={`text-2xl lg:text-3xl font-bold mb-4 flex justify-center ${timelineData[currentStep].color}`}
            >
              <i className="mt-1">{timelineData[currentStep].icon}</i>
              <h2 className="mx-4">{timelineData[currentStep].title}</h2>
            </div>
            <p className="text-lg">{timelineData[currentStep].describtion}</p>
            <div className="flex justify-center items-center mt-6">
              <div
                className={`radial-progress ${timelineData[currentStep].color}`}
                style={{
                  "--value": progress,
                  "--size": "12rem",
                  "--thickness": "8px",
                  background: `conic-gradient(${timelineData[currentStep].color} ${progress}%, #eee ${progress}%)`,
                }}
                role="progressbar"
              >
                {progress}%
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
