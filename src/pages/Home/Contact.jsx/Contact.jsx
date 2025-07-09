import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaRegArrowAltCircleUp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { motion } from 'framer-motion';
import bannerImage from "../../../../assets/contact.jpg"

const Contact = () => {
  return (
    <div id="contact" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center px-8 lg:px-20 py-24">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
         
        >
           <motion.img
        src={bannerImage}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",}}
      ></motion.img>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Left Info */}
          <div className="max-w-2xl text-left lg:pr-10 space-y-6">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Let's Connect & Create Something Amazing!
            </h1>
            <div className="space-y-4 text-lg text-gray-300">
              <p className="flex items-center gap-3">
                <MdEmail className="text-blue-500 text-2xl" />
                md.habiburrahmanjwd@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500 text-2xl" />
                +880 1742923499
              </p>
              <p className="flex items-center gap-3">
                <FaWhatsapp className="text-blue-500 text-2xl" />
                +880 1742923499
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                Rajshahi, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 w-full max-w-lg mt-10 lg:mt-0">
            {["Your Name", "Your Email", "Your Message"].map((label, i) => (
              <div key={i} className="relative mb-6">
                <input
                  type={label === "Your Email" ? "email" : "text"}
                  required
                  placeholder={label}
                  className="peer w-full p-4 rounded-md bg-white/10 text-white placeholder-transparent focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <label className="absolute left-4 top-4 text-gray-300 text-lg peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400 transition-all">
                  {label}
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Contact Cards */}
      <div className="py-16 w-11/12 mx-auto">
        <SectionTitle heading="Connect with Me" />
        <div className="grid md:grid-cols-3 gap-10 mt-10">
        {/* LinkedIn */}
<div className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-8 rounded-2xl text-center transition shadow-lg">
  <div className="flex justify-center items-center gap-4 text-5xl text-blue-600 dark:text-blue-400 mb-4">
    <a
      href="https://www.linkedin.com/in/md-habibur-rahman-205038350/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-800 transition"
    >
      <BsLinkedin />
    </a>
    <FaRegArrowAltCircleUp />
  </div>
  <h2 className="text-xl font-bold text-gray-800 dark:text-white">LinkedIn</h2>
  <p className="text-gray-600 dark:text-gray-300 mt-2">
    Join me on LinkedIn for secure delivery solutions!
  </p>
</div>

{/* Facebook */}
<div className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-8 rounded-2xl text-center transition shadow-lg">
  <div className="flex justify-center items-center gap-4 text-5xl text-blue-600 dark:text-blue-400 mb-4">
    <a
      href="https://www.facebook.com/md.habibur.rahman.sujon.788802"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-800 transition"
    >
      <IoLogoFacebook />
    </a>
    <FaRegArrowAltCircleUp />
  </div>
  <h2 className="text-xl font-bold text-gray-800 dark:text-white">Facebook</h2>
  <p className="text-gray-600 dark:text-gray-300 mt-2">
    Join me on Facebook for lightning-fast delivery with real-time tracking!
  </p>
</div>

{/* Email */}
<div className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-8 rounded-2xl text-center transition shadow-lg">
  <div className="flex justify-center items-center gap-4 text-5xl text-blue-600 dark:text-blue-400 mb-4">
    <MdEmail />
  </div>
  <h2 className="text-xl font-bold text-gray-800 dark:text-white">Email</h2>
  <p className="text-gray-600 text-xs dark:text-gray-300 mt-2">md.habiburrahmanjwd@gmail.com</p>
  <p className="text-gray-600 dark:text-gray-300">Send mail anytime!</p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;