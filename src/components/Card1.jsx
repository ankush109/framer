import React from "react";
import card from "../assets/m1.jpg";
function Card1() {
  return (
    <div
      style={{
        top: `calc(-10% + ${1 * 25}px)`,
      }}
      className="bg-green-300 rounded-3xl p-10 m-40 w-full flex items-center justify-center"
    >
      <div className="flex h-[400px] w-1/2 flex-col items-start">
        <h1 className=" text-[45px] font-semibold">Goal-Oriented Financial </h1>
        <h1 className=" text-[45px] font-semibold">Planning.</h1>
        <h1 className="text-gray-600 mt-4 text-lg font-semibold">
          Set and track your financial goals with GreenBank's tailored planning
          tools. Whether it's saving for a vacation, a new home, or retirement,
          we'll help you stay on target and achieve your dreams.
        </h1>
      </div>
      <div className="flex w-1/2 h-[300px]  flex-col justify-end ">
        <div className="flex-col">
          <img className="w-[45%] mx-48" src={card} />
        </div>
      </div>
    </div>
  );
}

export default Card1;
