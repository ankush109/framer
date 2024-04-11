import React from "react";
import card from "../assets/visa.jpg";
function Card() {
  return (
    <div
      style={{
        top: `10%`,
      }}
      className="bg-yellow-100 my-20  relative p-10 mx-40  rounded-3xl w-full flex items-center justify-center"
    >
      <div className="flex h-[400px] w-1/2 flex-col items-start">
        <h1 className="text-green-700 text-[45px] font-semibold">
          Manage All Your Credit{" "}
        </h1>
        <h1 className="text-green-700 text-[45px] font-semibold">
          Cards in One Place.
        </h1>
        <h1 className="text-gray-400 mt-4 text-lg font-semibold">
          Keep track of multiple credit cards effortlessly within the GreenBank
          app. Monitor balances, track transactions, and stay on top of payments
          without switching between different accounts.
        </h1>
      </div>
      <div className="flex w-1/2 h-[300px]  flex-col justify-end ">
        <div className="flex-col">
          <img className="w-[100%] " src={card} />
        </div>
      </div>
    </div>
  );
}

export default Card;
