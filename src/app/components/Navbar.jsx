"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-12 z-40"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {!isHovered && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-b bg-green-700 z-40" />
      )}

      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isHovered ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="py-4 px-6 fixed w-full z-50 top-0 left-0 transition-all duration-300 bg-gray-950/5 dark:bg-gray-900/5 backdrop-blur-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto relative z-50">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Farrukh <span className="text-green-600 dark:text-white">.</span>
          </Link>

          <div className="flex gap-6 items-center">
            <button
              onClick={toggleLanguage}
              aria-label="Change Language"
              className="relative bg-gradient-to-r from-green-400 to-yellow-500 hover:from-green-500 hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              {language === "en" ? "UZ" : "EN"}
              <span className="absolute inset-0 border-2 border-transparent rounded-full hover:border-white transition-all duration-200"></span>
            </button>

            <div className="relative p-2 flex items-center rounded-2xl">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
