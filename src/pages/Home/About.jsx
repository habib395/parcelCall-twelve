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

  const items = [
    {
      title: "OUR MISSION",
      description:
        "We strive to deliver exceptional service with reliability, innovation, and dedication, ensuring every client experiences seamless solutions that drive success and efficiency in their journey.",
      icon: <GoGoal />,
    },
    {
      title: "WHAT WE OFFER",
      description:
        "Our comprehensive services include cutting-edge technology, user-friendly solutions, and customer-centric support, designed to enhance productivity, streamline operations, and provide outstanding value tailored to your unique needs.",
      icon: <MdLocalOffer />,
    },
    {
      title: "OUR PROMISE",
      description:
        "We guarantee transparency, quality, and unwavering commitment to customer satisfaction, ensuring every interaction is met with excellence, trust, and a dedication to exceeding expectations at every step.",
      icon: <RiChatVoiceAiFill />,
    },
  ];

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 transition-all duration-300 py-16 px-4 md:px-10">
      <SectionTitle heading="About Us" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-11/12 mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-8 lg:p-10 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
          >
            <div className="text-5xl lg:text-7xl text-blue-500 mb-4">{item.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-400 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;