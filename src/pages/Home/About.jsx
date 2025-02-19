import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoGoal } from "react-icons/go";
import { RiChatVoiceAiFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
      <div id="about">
        <SectionTitle heading={"About Us"}></SectionTitle>
           <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
      {/* OUR MISSION */}
      <div
        className="bg-yellow-100 dark:bg-gray-800 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:hover:bg-gray-700"
        data-aos="fade-up"
      >
        <p className="text-4xl lg:text-7xl text-center text-yellow-600 dark:text-yellow-400">
          <GoGoal />
        </p>
        <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 dark:text-gray-200 py-2">
          OUR MISSION
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300">
          We strive to deliver exceptional service with reliability, innovation, and dedication, ensuring every client experiences seamless solutions that drive success and efficiency in their journey.
        </p>
      </div>

      {/* WHAT WE OFFER */}
      <div
        className="bg-yellow-100 dark:bg-gray-800 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:hover:bg-gray-700"
        data-aos="fade-up"
      >
        <p className="text-4xl lg:text-7xl text-center text-yellow-600 dark:text-yellow-400">
          <MdLocalOffer />
        </p>
        <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 dark:text-gray-200 py-2">
          WHAT WE OFFER
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300">
          Our comprehensive services include cutting-edge technology, user-friendly solutions, and customer-centric support, designed to enhance productivity, streamline operations, and provide outstanding value tailored to your unique needs.
        </p>
      </div>

      {/* OUR PROMISE */}
      <div
        className="bg-yellow-100 dark:bg-gray-800 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:hover:bg-gray-700"
        data-aos="fade-down"
      >
        <p className="text-4xl lg:text-7xl text-center text-yellow-600 dark:text-yellow-400">
          <RiChatVoiceAiFill />
        </p>
        <h2 className="text-xl lg:text-2xl font-bold text-center text-gray-800 dark:text-gray-200 py-2">
          OUR PROMISE
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300">
          We guarantee transparency, quality, and unwavering commitment to customer satisfaction, ensuring every interaction is met with excellence, trust, and a dedication to exceeding expectations at every step.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
