"use client";

import { useState } from "react";
import {
  FaMailBulk,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content/content";
import BallPit from "../ReactBits/BallPit";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const { language } = useLanguage();
  const contactContent = content[language].contact;

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 py-20 px-6 text-center bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BallPit
          count={50}
          gravity={0.5}
          friction={1.0}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>

      <motion.h2
        className="text-3xl font-bold mb-4 text-yellow-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {contactContent.contactTitle}
      </motion.h2>
      <motion.p
        className="text-gray-500 dark:text-gray-400 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {contactContent.contactSubtitle}
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder={contactContent.formName}
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={contactContent.formEmail}
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />
        <textarea
          name="message"
          placeholder={contactContent.formMessage}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        ></textarea>

        <button
          type="submit"
          className="relative inline-block px-6 py-3 text-lg font-medium text-white transition duration-300 ease-out transform border-2 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 hover:ring-4 hover:ring-green-400 bg-green-500 dark:bg-green-600"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-600 via-green-500 to-lime-700 opacity-30 rounded-full animate-ping"></span>
          <span className="relative text-gray-950 z-10 dark:text-white">
            {contactContent.sendButton}
          </span>
        </button>
      </motion.form>

      {status && (
        <motion.p
          className="mt-6 text-green-500 dark:text-green-400 z-10 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {status}
        </motion.p>
      )}

<motion.div
        className="flex justify-center gap-8 mt-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >

        <a
          href="mailto:djumayev.dev@gmail.com"
          className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaMailBulk size={30} />
        </a>
        <a
          href="https://github.com/FarrukhDjumayev"
          className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/farrukhdjumayev/"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://t.me/Farrukh_Djumayev"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegramPlane size={30} />
        </a>
      </motion.div>

      <motion.p
        className="mt-10 text-gray-500 text-sm dark:text-gray-400 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Farrukh Djumayev. All rights reserved.
      </motion.p>
    </div>
    
  );
}
