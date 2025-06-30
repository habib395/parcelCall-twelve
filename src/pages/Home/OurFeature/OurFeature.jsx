import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdHealthAndSafety } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OurFeature = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const features = [
    {
      icon: <MdHealthAndSafety />,
      title: "Parcel Safety",
      desc: "We ensure secure handling and tracking for all deliveries.",
    },
    {
      icon: <FaShippingFast />,
      title: "Super Fast Delivery",
      desc: "Get your products delivered at lightning speed with real-time tracking.",
    },
    {
      icon: <GiStairsGoal />,
      title: "Our Mission",
      desc: "We aim to provide a seamless and efficient parcel delivery experience.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 lg:px-20 w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <SectionTitle heading={"Our Features"} />

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center border border-gray-100 dark:border-gray-700"
            data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
          >
            <div className="text-5xl text-indigo-600 dark:text-yellow-400 mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-yellow-300 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeature;