"use client";
import { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaBlog,
  FaEnvelope,
  FaProjectDiagram,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navs = [
    {
      title: "Home",
      link: "/",
      icon: <FaHome className="h-5 w-5" />,
    },
    {
      title: "Projects",
      link: "/projects",
      icon: <FaProjectDiagram className="h-5 w-5" />,
    },
    {
      title: "Blog",
      link: "/blog",
      icon: <FaBlog className="h-5 w-5" />,
    },
    {
      title: "Contact Me",
      link: "/contact",
      icon: <FaEnvelope className="h-5 w-5" />,
    },
    {
      title: "My Skills",
      link: "/skills",
      icon: <FaUser className="h-5 w-5" />,
    },
  ];
  return (
    <div className=" flex">
      <div className="lg:hidden flex justify-between items-center w-full h-[4rem] p-7">
        <button onClick={toggleSidebar} className="text-2xl z-50">
          <motion.div
            key={isOpen ? "open" : "closed"}
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: isOpen ? 180 : 0, scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </button>
        <div>
          <ThemeSwitcher />
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 transform z-40 shadow-xl opacity-95 backdrop-blur-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 p-5`}
      >
        <ul className="space-y-4 mt-10">
          {navs.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`flex items-center p-3 rounded-lg ${
                  item.link === pathname ? "text-base" : "text-stone-600"
                } hover:text-stone-500`}
                onClick={closeSidebar}
              >
                <span className="mr-3">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-10 max-lg:hidden flex  w-full justify-between">
        <ul className="flex text-md list-none mx-auto">
          {navs.map((item, index) => (
            <li key={index} className="mx-5">
              <Link
                href={`${item.link}`}
                className={`flex ${
                  item.link === pathname ? "text-base" : "text-stone-600"
                } hover:text-stone-500`}
              >
                <span className="px-2 mt-0.5">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
