"use client";
import React from "react";
import { motion } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";

const projects = [
  {
    title: "Todo List",
    description: "Simple Reactjs Todo list design by tailwind and daisy",
    href: "https://ali-ghafari-code.github.io/React-Todo-List/",
    badges: ["Reactjs", "Tailwindcss"],
    gradient: "from-green-400 via-teal-500 to-blue-500",
    animation: { x: -150, y: 0 },
  },
  {
    title: "Shoib Portfolio",
    description: "Editor portfolio",
    href: "https://shoaibtaymori.com/",
    badges: ["Js", "Django"],
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    animation: { x: 0, y: -150 },
  },
  {
    title: "Video Grapher Portfolio",
    description: "Video Grapher portfolio",
    href: "https://parsameraji.ir/",
    badges: ["Js", "Bootstrap"],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    animation: { x: 100, y: 0 },
  },
];

export function ProjectCard() {
  return (
    <div className="container mx-auto px-4 mt-7 mb-44">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-y-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: project.animation.x,
              y: project.animation.y,
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.5 }}
          >
            <PinContainer title={project.title} href={project.href}>
              <div className="flex flex-col p-4 tracking-tight size-80 rounded-lg shadow-lg">
                <div
                  className={`flex flex-1 rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`}
                />
                <h3 className="mt-3 font-bold text-base">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="flex gap-2 mt-2">
                  {project.badges.map((badge, i) => (
                    <span key={i} className="badge badge-outline text-sm">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
