"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const mainCursor = useRef(null); // Tashqi cursor (katta bubble)
  const dotCursor = useRef(null);  // Ichki cursor (nuqta)

  // Target mouse pozitsiyasi
  let mouseX = useRef(0);
  let mouseY = useRef(0);

  
  let currentX = useRef(0);
  let currentY = useRef(0);

  useEffect(() => {
    const move = (e) => {
      // Mouse pozitsiyasini olish
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", move);

    
    const animate = () => {
      
      currentX.current += (mouseX.current - currentX.current) * 0.12;
      currentY.current += (mouseY.current - currentY.current) * 0.12;

      if (mainCursor.current) {
        
        mainCursor.current.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0) translate(-50%, -50%)`;
      }

      if (dotCursor.current) {
        
        dotCursor.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate); 
    };

    animate(); 

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      
      <div
        ref={mainCursor}
        className="fixed w-[50px] h-[50px] rounded-full pointer-events-none z-[9999] 
        bg-transparent backdrop-blur-lg opacity-60 mix-blend-difference shadow-[0_0_0_1px] shadow-green-500"
      />

      
      <div
        ref={dotCursor}
        className="fixed w-[8px] h-[8px] bg-gray-300 rounded-full pointer-events-none z-[9999] shadow-md"
      />
    </>
  );
}
