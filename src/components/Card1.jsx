import React, { useRef } from "react";
import card from "../assets/m1.jpg";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
function Card1() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      ref={containerRef}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="bg-green-300 rounded-3xl p-10 mx-auto md:m-40 w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-center"
    >
      <div className="flex flex-col md:w-1/2 md:items-start md:pr-8">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Goal-Oriented Financial Planning.
        </h1>
        <h1 className="text-gray-600 text-base md:text-lg font-semibold">
          Set and track your financial goals with GreenBank's tailored planning
          tools. Whether it's saving for a vacation, a new home, or retirement,
          we'll help you stay on target and achieve your dreams.
        </h1>
      </div>
      <div className="flex w-full md:w-1/2 justify-center">
        <img
          className="w-[70%] md:w-[45%] mx-auto"
          src={card}
          alt="Financial Goal"
        />
      </div>
    </motion.div>
  );
}

export default Card1;
