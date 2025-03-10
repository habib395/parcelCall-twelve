import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="relative min-h-[80vh] flex items-center px-8 lg:px-20 py-24 z-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://i.ibb.co/1GQZc26T/contact.jpg)",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content Section */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="max-w-2xl text-left lg:pr-10">
            <h1 className="py-16 text-5xl font-bold text-white leading-tight">
              Let's Connect & Create Something Amazing!
            </h1>

            {/* Contact Details */}
            <div className="flex flex-col gap-6 text-gray-300 text-lg">
              <div className="flex items-center gap-4">
                <MdEmail className="text-yellow-400 text-2xl" />
                <p className="hover:text-yellow-300 transition">
                  md.habiburrahmanjwd@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-400 text-2xl" />
                <p className="hover:text-yellow-300 transition">
                  +880 1742923499
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-yellow-400 text-2xl" />
                <p className="hover:text-yellow-300 transition">
                  +880 1742923499
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                <p className="hover:text-yellow-300 transition">
                  Rajshahi, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form with Glassmorphism Effect */}
          <form className="flex flex-col items-start gap-6 bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-white/20 max-w-lg w-full">
            {["Your Name", "Your Email", "Your Message"].map((label, index) => (
              <div key={index} className="relative w-full">
                <input
                  className="peer w-full p-4 rounded-md bg-white/10 text-white placeholder-transparent focus:ring-2 focus:ring-yellow-400 outline-none transition"
                  type={label === "Your Email" ? "email" : "text"}
                  placeholder={label}
                  required
                />
                <label className="absolute left-4 top-4 text-gray-300 text-lg peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400 transition-all">
                  {label}
                </label>
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-500 to-purple-600 text-white font-medium text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-400/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="py-10 w-full mx-auto dark:bg-gray-900 dark:text-white">
        <SectionTitle heading={"Contact Us"} />
        <div className="grid md:grid-cols-3 gap-8 items-center w-11/12 mx-auto">
          {/* Feature Card 1 */}
          <div
            className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-gray-100"
            data-aos="fade-down"
          >
            <div className="flex justify-center text-5xl text-yellow-600 gap-6">
              <a
                href="https://www.linkedin.com/in/md-habibur-rahman-205038350/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-6xl text-gray-400 hover:text-yellow-600 transition"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <BsLinkedin />
              </a>
              <h2 className="text-2xl font-bold text-center text-gray-800 pt-4 dark:text-yellow-400">
                LinkedIn
              </h2>
              <h2 className="text-4xl font-bold text-center text-gray-800 pt-4 dark:text-yellow-400">
                <FaRegArrowAltCircleUp />
              </h2>
            </div>

            {/* <LuSquareArrowUpRight /> */}
            <p className="text-center text-gray-700 mt-2 dark:text-gray-300">
              "Join me on LinkedIn for secure delivery solutions!".
            </p>
          </div>

          {/* Feature Card 2 */}
          <div
            className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-gray-100"
            data-aos="fade-up"
          >
            <div className="flex justify-center gap-6 text-5xl text-yellow-600">
              <a
                href="https://www.facebook.com/md.habibur.rahman.sujon.788802"
                target="_blank"
                rel="noopener noreferrer"
                className="text-6xl text-gray-400 hover:text-yellow-600 transition"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <IoLogoFacebook />
              </a>
              <h2 className="text-2xl font-bold text-center text-gray-800 pt-4 dark:text-yellow-400">
                Facebook
              </h2>
              <h2 className="text-4xl font-bold text-center text-gray-800 pt-4 dark:text-yellow-400">
                <FaRegArrowAltCircleUp />
              </h2>
            </div>
            <p className="text-center text-gray-700 mt-2 dark:text-gray-300">
              "Join me on Facebook for lightning-fast delivery with real-time
              tracking!"
            </p>
          </div>

          {/* Feature Card 3 */}
          <div
            className="bg-yellow-100 shadow-lg p-6 lg:p-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 dark:bg-gray-800 dark:text-gray-100"
            data-aos="fade-down"
          >
            <div className="flex justify-center text-5xl text-yellow-600 gap-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-6xl text-yellow-400"
              >
                <MdEmail />
              </a>
              <h2 className="text-2xl font-bold text-center text-gray-800 pt-4 dark:text-yellow-400">
                Email
              </h2>
            </div>
            <p className="text-center text-lg text-gray-700 mt-2 dark:text-gray-300">
              "md.habiburrahmanjwd@gmail.com"
            </p>
            <p className="text-center text-gray-700 mt-2 dark:text-gray-300">
              Sent mail me anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
