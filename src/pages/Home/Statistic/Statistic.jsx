import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const Statistic = () => {
  const axiosSecure = useAxiosSecure()

  const { data: statData, isLoading} = useQuery({
    queryKey: ['adminStat'],
    queryFn: async() =>{
      const { data } = await axiosSecure('/adminStat')
      return data
    }
  })

  if (isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className="py-5 w-11/12 mx-auto">
      <SectionTitle heading={'Statistic'}></SectionTitle>
     <div className="sm:flex">
     <div className="bg-base-200 shadow-xl p-3 lg:p-10 m-5 rounded-lg md:w-full">
        <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
          Total Parcels Booked
        </h2>
        <p className="text-center text-2xl">{statData?.parcelBooked}</p>
      </div>
      <div className="bg-base-200 shadow-xl p-3 lg:p-10 m-5 rounded-lg md:w-full">
        <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
          Total Parcels Delivered
        </h2>
        <p className="text-center text-2xl">{statData?.parcelDelivered}</p>
      </div>
      <div className="bg-base-200 shadow-xl p-3 lg:p-10 m-5 rounded-lg md:w-full">
        <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
          Total Users
        </h2>
        <p className="text-center text-2xl">{statData?.TotalUser}</p>
      </div>
     </div>
    </div>
  );
};

export default Statistic;
