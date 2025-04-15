"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FaArrowPointer } from "react-icons/fa6";
import { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

function wrap(min, max, v) {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
}

const InfiniteText = ({
  text,
  baseVelocity = 100,
  direction = 1,
  className = "",
}) => {
  const baseX = useMotionValue(0);
  const ref = useRef(null);

  const x = useTransform(baseX, (v) => {
    if (!ref.current) return "0px";
    const width = ref.current.offsetWidth;
    return `${wrap(-width, 0, v)}px`;
  });

  useAnimationFrame((t, delta) => {
    let moveBy = direction * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const repeated = new Array(10).fill(text);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div className="flex" style={{ x }}>
        {repeated.map((word, i) => (
          <span
            key={i}
            ref={i === 0 ? ref : null}
            className={`mx-4 ${className}`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const ScrollingBanner = () => {
  return (
    <div className="text-white bg-gray-500 backdrop-blur-2xl dark:bg-transparent py-10 space-y-6 overflow-hidden">
      
      <InfiniteText
        text={
          <>
            <span className="flex items-center gap-2">
              <FaReact className="text-green-400" />
              <span>Frontend Developer <FaArrowPointer className="inline-block"/> </span>
            </span>
          </>
        }
        baseVelocity={100}
        direction={1}
        className="text-2xl md:text-4xl font-bold"
      />

      
      <InfiniteText
        text={
          <div className="flex items-center gap-6 text-green-400">
            <span className="flex items-center gap-2">
              <FaReact /> <span>React</span>
            </span>
            <span className="flex items-center gap-2">
              <SiNextdotjs /> <span>Next.js</span>
            </span>
            <span className="flex items-center gap-2">
              <SiTailwindcss /> <span>Tailwind</span>
            </span>
          </div>
        }
        baseVelocity={80}
        direction={-1}
        className="text-xl md:text-3xl font-semibold"
      />
    </div>
  );
};

export default ScrollingBanner;
