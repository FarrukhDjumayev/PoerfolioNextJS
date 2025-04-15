"use client";

import { useLanguage } from "../context/LanguageContext";
import { content } from "../content/content";
import TrueFocus from "../ReactBits/TrueFocus";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { projects } from "../content/project";
import Image from "next/image";
import { motion } from "framer-motion"; 

export default function Portfolio() {
  const { language } = useLanguage();
  const portfolio = content[language].portfolio;
  const currentProjects = projects[language] || projects["en"];


  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen px-6 py-12 pt-20 bg-white text-black dark:bg-gray-900 dark:text-white"
      aria-label="Portfolio section"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <TrueFocus
            sentence={portfolio.heading}
            manualMode={false}
            blurAmount={5}
            borderColor="green"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-black/20 rounded-3xl shadow-lg backdrop-blur-lg border border-white/10 transition-all duration-500">
          <Swiper
            spaceBetween={30}
            className="rounded-3xl"
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, Autoplay]}
          >
            {currentProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group my-6 relative rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10 overflow-hidden hover:shadow-[0_10px_40px_rgba(0,255,163,0.25)] transition-shadow duration-500"
                >
                  
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-110"
                      priority={index === 0}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffc3]/90 via-[#00aaff]/90 to-[#ff00b8]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-md font-medium bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 shadow-md transform scale-90 group-hover:scale-100 transition-all duration-300"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>

                  
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}
