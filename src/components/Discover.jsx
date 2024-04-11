import React, { useEffect } from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function Discover() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(scrollYProgress));
  }, []);
  return (
    <div className="flex relative  flex-col">
      <div className=" flex mt-40 justify-center">
        <h1 className="text-green-700 text-[50px] font-semibold">
          Discover What We{" "}
        </h1>
        <h1 className="text-green-300 text-[50px] font-semibold mx-4">Offer</h1>
      </div>
      <div className="text-gray-400 flex mt-3 justify-center text-[20px]">
        Elevate your e-commerce experience with our powerful feature set
      </div>
      <div className="text-gray-400 flex mt-3 justify-center text-[20px]">
        designed for unparalleled excellence.
      </div>
      <div className="my-20" ref={containerRef}>
        <motion.div className="sticky top-0 flex h-100vh items-center justify-center">
          <Card />
        </motion.div>
        <motion.div className=" sticky top-0  flex h-100vh items-center justify-center">
          <Card1 />
        </motion.div>
        <motion.div className=" sticky top-0  flex h-100vh items-center justify-center">
          <Card2 />
        </motion.div>
      </div>
    </div>
  );
}

export default Discover;
