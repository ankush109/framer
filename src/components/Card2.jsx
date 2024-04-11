import React from "react";
import card from "../assets/m1.jpg";
function Card2() {
  return (
    <div
      style={{
        top: `calc(-10% + ${2 * 25}px)`,
      }}
      className="bg-blue-200  rounded-3xl p-10 mx-40 w-full flex items-center justify-center"
    >
      <div className="flex h-[400px] w-1/2 flex-col items-start">
        <h1 className=" text-[45px] font-semibold">Smart Spending Insights.</h1>
        <h1 className="text-gray-600 mt-4 text-lg font-semibold">
          Gain valuable insights into your spending habits with GreenBank's
          intelligent analysis tools. Understand where your money is going,
          receive personalized recommendations for saving, and make informed
          financial decisions to achieve your goals faster.
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

export default Card2;
