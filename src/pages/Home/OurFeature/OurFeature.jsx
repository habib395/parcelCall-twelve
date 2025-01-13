import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdHealthAndSafety,  } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OurFeature = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="py-5">
        <SectionTitle heading={'Our Features'}></SectionTitle>
      <div className="sm:flex flex-cols items-center justify-center">
        <div
          className="bg-base-200 shadow-xl p-3 lg:p-10 m-5 rounded-lg lg:w-full"
          data-aos="fade-down"
        >
          <p className="text-2xl lg:text-5xl">
          <MdHealthAndSafety />
          </p>
          <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
          Parcel Safety
          </h2>
          <p className="lg-py-20 text-center">
            Our Section "Our mission is to empower users to create a seamless
          </p>
        </div>
        <div
          className="bg-base-200 shadow-xl p-3 lg:p-10 m-5 rounded-lg md:w-full"
          data-aos="fade-up"
        >
          <p className="text-2xl lg:text-5xl">
          <FaShippingFast />
          </p>
          <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
          Super Fast Delivery
          </h2>
          <p>
            "We offer a dynamic platform where users can easily manage their
            product queries, 
          </p>
        </div>
        <div
          className="bg-base-200 shadow-xl p-3 lg:p-10 m-5 rounded-lg md:w-full"
          data-aos="fade-down"
        >
          <p className="text-2xl lg:text-5xl">
          <GiStairsGoal />
          </p>
          <h2 className="text-xl lg:text-2xl font-bold text-center pb-2">
            OUR MISSION
          </h2>
          <p>
            "We promise to deliver a seamless and responsive platform, ensuring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
