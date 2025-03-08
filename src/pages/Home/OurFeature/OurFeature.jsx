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

  return (
    <div className="py-10 w-11/12 mx-auto dark:bg-gray-900 dark:text-white">

      <SectionTitle heading={"Our Features"} />
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Feature Card 1 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-gray-100"
          data-aos="fade-down"
        >
          <div className="flex justify-center text-5xl text-yellow-600">
            <MdHealthAndSafety />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 pt-4 dark:text-yellow-400">
            Parcel Safety
          </h2>
          <p className="text-center text-gray-700 mt-2 dark:text-gray-300">
            We ensure secure handling and tracking for all deliveries.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-gray-100"
          data-aos="fade-up"
        >
          <div className="flex justify-center text-5xl text-yellow-600">
            <FaShippingFast />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 pt-4 dark:text-yellow-400">
            Super Fast Delivery
          </h2>
          <p className="text-center text-gray-700 mt-2 dark:text-gray-300">
            Get your products delivered at lightning speed with real-time tracking.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-gray-100"
          data-aos="fade-down"
        >
          <div className="flex justify-center text-5xl text-yellow-600">
            <GiStairsGoal />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 pt-4 dark:text-yellow-400">
            Our Mission
          </h2>
          <p className="text-center text-gray-700 mt-2 dark:text-gray-300">
            We aim to provide a seamless and efficient parcel delivery experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
