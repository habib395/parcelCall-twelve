import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const Statistic = () => {
  const axiosSecure = useAxiosSecure();

  const { data: statData, isLoading } = useQuery({
    queryKey: ["adminStat"],
    queryFn: async () => {
      const { data } = await axiosSecure("/adminStat");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div id="Statistics" className="py-10 w-11/12 mx-auto">
      <SectionTitle heading={"Statistics"} />
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Statistic Card 1 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-white"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 pb-2 dark:text-white">
            Total Parcels Booked
          </h2>
          <p className="text-center text-3xl font-semibold text-yellow-600 ">
            {statData?.parcelBooked}
          </p>
        </div>

        {/* Statistic Card 2 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-white"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 pb-2  dark:text-white">
            Total Parcels Delivered
          </h2>
          <p className="text-center text-3xl font-semibold text-yellow-600">
            {statData?.parcelDelivered}
          </p>
        </div>

        {/* Statistic Card 3 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-white"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 pb-2 dark:text-white">
            Total Users
          </h2>
          <p className="text-center text-3xl font-semibold text-yellow-600">
            {statData?.TotalUser}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
