import React from "react";
import { motion } from "framer-motion";
import { MdHealthAndSafety } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OurFeature = () => {
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

  // Animation variants for feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
    delay: i * 0.2,
    duration: 0.6,
    ease: "easeOut",
    },
   }),
  };

  return (
    <motion.div
      id="Feature"
      className="py-16 px-4 md:px-8 lg:px-20 w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle heading={"Our Features"} />

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 dark:text-white p-8 rounded-3xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center border border-gray-100 dark:border-gray-700"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-5xl text-indigo-600 dark:text-blue-400 mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-blue-300 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurFeature;
