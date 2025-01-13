import React from "react";

const Statistic = () => {
  return (
    <div className="flex">
      <div className="text-white bg-blue-400 shadow-2xl p-3 lg:p-10 m-5 rounded-lg md:w-full">
        <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
          Total Parcels Booked
        </h2>
        <p className="text-center text-2xl">5</p>
      </div>
      <div className="text-white bg-blue-400 shadow-2xl p-3 lg:p-10 m-5 rounded-lg md:w-full">
        <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
          Total Parcels Delivered
        </h2>
        <p className="text-center text-2xl">5</p>
      </div>
      <div className="text-white bg-blue-400 shadow-2xl p-3 lg:p-10 m-5 rounded-lg md:w-full">
        <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
          Total Users
        </h2>
        <p className="text-center text-2xl">5</p>
      </div>
    </div>
  );
};

export default Statistic;
