import React, { useRef } from "react";
import card from "../assets/visa.jpg";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

function Card() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.div
      ref={containerRef}
      style={{
        top: `10%`,
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="bg-yellow-100 my-20 relative p-10 mx-auto md:mx-40 rounded-3xl max-w-screen-lg w-full flex flex-col md:flex-row items-center justify-center"
    >
      <div className="flex flex-col md:w-1/2 md:items-start md:pr-8">
        <h1 className="text-green-700 text-[45px] font-semibold mb-4 md:mt-0">
          Manage All Your Credit Cards in One Place.
        </h1>
        <h1 className="text-gray-400 text-lg font-semibold md:w-[80%]">
          Keep track of multiple credit cards effortlessly within the GreenBank
          app. Monitor balances, track transactions, and stay on top of payments
          without switching between different accounts.
        </h1>
      </div>
      <div className="flex w-full md:w-1/2 justify-center">
        <img
          className="w-[70%] md:w-[80%] lg:w-full"
          src={card}
          alt="Credit Card"
        />
      </div>
    </motion.div>
  );
}

export default Card;
