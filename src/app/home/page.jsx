"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content/content";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { RiTelegramFill } from "react-icons/ri";
import { FaArrowPointer } from "react-icons/fa6";
import BlurText from "../ReactBits/BlurText";
import RotatingText from "../ReactBits/RotatingText";

export default function Home() {
  const { language } = useLanguage();
  const homeContent = content[language].home;

  return (
    <section
      id="home"
      className="min-h-screen px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 pt-20 bg-[#E5E3D9] dark:bg-gray-900"
    >
      <Navbar />

      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative w-[320px] h-[320px]">
          {/* Orbitdagi uzun nur */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <div className="w-[160px] h-[4px] bg-green-400 rounded-full shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-sm animate-orbit" />
          </div>

          {/* Profil rasmi */}
          <Image
            src="/PortfolioPic.jpg"
            alt="Farrukh's profile picture"
            fill
            className="object-cover rounded-full shadow-xl hover:scale-105 transition-transform duration-300 relative z-20"
            priority
          />
        </div>
      </div>

      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <BlurText
          text={homeContent.heading}
          delay={200}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-5xl font-extrabold text-green-600 dark:text-green-500"
        />
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-300 flex flex-wrap items-center gap-2">
          <span>{homeContent.subheading}</span>
          <RotatingText
            texts={[
              "Developer",
              "Designer",
              "Creator",
              "Coder",
              "Dreamer",
              "Innovator",
              "Builder",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>

        <p className="max-w-md mx-auto md:mx-0 text-gray-950 dark:text-gray-300">
          {homeContent.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-6">
          <Link
            href="/about"
            className="inline-block bg-green-600 mt-4 hover:bg-green-500 text-black font-semibold text-lg py-4 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:text-black"
          >
            {homeContent.buttonText}<FaArrowPointer className="inline-block ml-2" />
          </Link>

          <div className="mt-6 flex space-x-6">
            <Link
              href="https://github.com/FarrukhDjumayev"
              target="_blank"
              aria-label="GitHub"
              className="text-3xl p-2 border-2 border-green-500 rounded-full text-gray-900 dark:text-green-500 hover:bg-green-500 hover:text-gray-900 transition duration-300"
            >
              <FiGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/farrukhdjumayev/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-3xl p-2 border-2 border-green-500 rounded-full text-gray-900 dark:text-green-500 hover:bg-green-500 hover:text-gray-900 transition duration-300"
            >
              <FiLinkedin />
            </Link>

            <Link
              href="https://t.me/Farrukh_Djumayev"
              target="_blank"
              aria-label="Telegram"
              className="text-3xl p-2 border-2 border-green-500 rounded-full text-gray-900 dark:text-green-500 hover:bg-green-500 hover:text-gray-900 transition duration-300"
            >
              <RiTelegramFill />
            </Link>

            <Link
              href="mailto:youremail@example.com"
              target="_blank"
              aria-label="Email"
              className="text-3xl p-2 border-2 border-green-500 rounded-full text-gray-900 dark:text-green-500 hover:bg-green-500 hover:text-gray-900 transition duration-300"
            >
              <FiMail />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
