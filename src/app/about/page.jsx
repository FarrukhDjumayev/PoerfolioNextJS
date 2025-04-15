"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content/content";
import { motion } from "framer-motion";
import ScrollVelocity from "../ReactBits/Velocity";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiWebpack,
  SiAdobexd,
} from "react-icons/si";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const skillsIcons = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  SASS: <FaSass />,
  JavaScript: <SiJavascript />,
  Git: <FaGithub />,
  "Node.js": <FaNodeJs />,
  "React.js": <FaReact />,
  Redux: <SiRedux />,
  TypeScript: <SiTypescript />,
  "Responsive Design": <SiTailwindcss />,
  Webpack: <SiWebpack />,
  "UI/UX Design": <SiAdobexd />,
};

export default function About() {
  const { language } = useLanguage();
  const aboutContent = content[language].about;

  const [velocity, setVelocity] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setVelocity((prev) => (prev === 1 ? 2 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="about"
      className="min-h-screen overflow-x-hidden px-6 py-12 flex flex-col items-center justify-center gap-10 pt-20 bg-gray-50 text-black dark:bg-gray-900 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-5xl font-bold flex flex-wrap justify-center text-center"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {[...aboutContent.heading].map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.p
        className="mt-4 max-w-3xl text-center bg-gray-500/30 dark:bg-transparent px-24 py-6 rounded-2xl backdrop-blur-2xl text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        {aboutContent.description}
      </motion.p>

      <div className="bg-green-800/90 dark:bg-gradient-to-r from-green-500/10 to-green-700/10 p-6 rounded-xl w-full max-w-3xl shadow-lg dark:shadow-green-800">
        <h3 className="text-2xl font-bold text-green-500 mb-4 text-center">
          {aboutContent.contactTitle}
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-center text-gray-300 sm:text-left text-base">
          <li className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg">
            <strong>{aboutContent.fullName}:</strong> Farrukh Djumayev
          </li>
          <li className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg">
            <strong>{aboutContent.email}:</strong>{" "}
            <a
              href="mailto:djumayev.dev@gmail.com"
              className="text-green-500 hover:underline"
            >
              djumayev.dev@gmail.com
            </a>
          </li>
          <li className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg">
            <strong>{aboutContent.phone}:</strong>{" "}
            <a
              href="tel:+998938114171"
              className="text-green-500  hover:underline"
            >
              +998 93 811 4171
            </a>
          </li>
          <li className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg">
            <strong>{aboutContent.location}:</strong> Hozirda Toshkent, O'zbekiston
          </li>
          <li className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg">
            <strong>{aboutContent.birthday}:</strong> 11 . 02 . 2006
          </li>
          <li className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/farrukhdjumayev"
              className="text-green-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/farrukhdjumayev
            </a>
          </li>
          <li className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/FarrukhDjumayev"
              className="text-green-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/FarrukhDjumayev
            </a>
          </li>
          <li className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg">
            <strong>Telegram:</strong>{" "}
            <a
              href="https://t.me/Farrukh_Djumayev"
              className="text-green-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              t.me/Farrukh_Djumayev
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ScrollVelocity
          texts={["React Bits", "Scroll Down"]}
          velocity={velocity}
          className="custom-scroll-text text-green-500"
        />
      </div>

      <div className="w-full bg-cyan-300 dark:bg-green-700 p-6 rounded-xl shadow-lg dark:shadow-green-800 max-w-3xl text-center mt-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {aboutContent.languages}
        </h3>
        <p className="p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg text-green-400">
          {aboutContent.english}: B2 <span className="text-green-500 px-4">||</span> {aboutContent.uzbek}:{" "}
          {aboutContent.native}
        </p>
      </div>

      <div className="mt-10 w-full max-w-3xl bg-amber-300 dark:bg-green-800 p-6 rounded-xl shadow-2xl text-gray-50 dark:shadow-green-800">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
          {aboutContent.skills}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-4xl text-green-400 justify-items-center">
          {Object.entries(skillsIcons).map(([skill, icon], i) => (
            <div
              key={i}
              className="group p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg flex flex-col items-center hover:scale-110 transition-transform duration-300"
              title={skill}
            >
              {icon}
              <span className="text-xs mt-2 text-white opacity-90">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full max-w-2xl bg-emerald-500 dark:bg-green-800 p-6 rounded-xl shadow-lg text-gray-50 dark:shadow-green-800">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
          {aboutContent.career}
        </h3>
        <div className="flex flex-col space-y-6">
          {aboutContent.timeline.map((item, index) => (
            <motion.div
              key={index}
              className="flex p-4 bg-gray-900 dark:bg-gray-900/50 backdrop-blur-2xl rounded-lg space-x-4 items-start"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              <div className="h-4 w-4 mt-2 bg-green-500 rounded-full" />
              <div>
                <p className="text-lg font-semibold">{item.year}</p>
                <p className="text-sm">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
