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
    <div className="py-10 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-yellow-500 text-center mb-10">
      Our Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Feature Card 1 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200"
          data-aos="fade-up"
        >
          <div className="flex justify-center text-5xl text-yellow-600">
            <MdHealthAndSafety />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 pt-4">
            Parcel Safety
          </h2>
          <p className="text-center text-gray-700 mt-2">
            We ensure secure handling and tracking for all deliveries.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200"
          data-aos="fade-up"
        >
          <div className="flex justify-center text-5xl text-yellow-600">
            <FaShippingFast />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 pt-4">
            Super Fast Delivery
          </h2>
          <p className="text-center text-gray-700 mt-2">
            Get your products delivered at lightning speed with real-time tracking.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div
          className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200"
          data-aos="fade-up"
        >
          <div className="flex justify-center text-5xl text-yellow-600">
            <GiStairsGoal />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 pt-4">
            Our Mission
          </h2>
          <p className="text-center text-gray-700 mt-2">
            We aim to provide a seamless and efficient parcel delivery experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
