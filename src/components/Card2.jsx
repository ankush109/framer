import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import card from "../assets/m1.jpg";

function Card2() {
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
      className="bg-blue-200 rounded-3xl p-10 mx-auto md:mx-40 w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-center"
    >
      <div className="flex flex-col md:w-1/2 md:items-start md:pr-8">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Smart Spending Insights.
        </h1>
        <h1 className="text-gray-600 text-base md:text-lg font-semibold">
          Gain valuable insights into your spending habits with GreenBank's
          intelligent analysis tools. Understand where your money is going,
          receive personalized recommendations for saving, and make informed
          financial decisions to achieve your goals faster.
        </h1>
      </div>
      <div className="flex w-full md:w-1/2 justify-center">
        <img
          className="w-[70%] md:w-[45%] mx-auto"
          src={card}
          alt="Spending Insights"
        />
      </div>
    </motion.div>
  );
}

export default Card2;
