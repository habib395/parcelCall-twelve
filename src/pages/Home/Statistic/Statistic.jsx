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

  const stats = [
    {
      label: "Total Parcels Booked",
      value: statData?.parcelBooked,
    },
    {
      label: "Total Parcels Delivered",
      value: statData?.parcelDelivered,
    },
    {
      label: "Total Users",
      value: statData?.TotalUser,
    },
  ];

  return (
    <div id="Statistics" className="py-16 px-4 md:px-10 lg:px-20 dark:bg-gray-900 dark:text-white bg-gray-50 transition-colors duration-300">
      <SectionTitle heading="Statistics" />

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 dark:text-white border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-md hover:shadow-xl transition-transform hover:scale-105 duration-300 text-center"
          >
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              {stat.label}
            </h2>
            <p className="text-4xl font-bold text-indigo-600 dark:text-white">
              {stat.value ?? 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;