import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden flex items-center px-8 lg:px-20 z-10">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://i.ibb.co/1GQZc26T/contact.jpg)" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }} // Subtle zoom-in effect
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      ></motion.div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content (Text & Heading) */}
        <motion.div
          className="max-w-2xl text-left lg:pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-yellow-400 text-8xl font-extrabold drop-shadow-lg">
              Contact Us
            </h1>
          </motion.div>

          {/* Animated Paragraph */}
          <motion.p
            className="text-white text-lg mt-6 drop-shadow-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
          Have questions or need assistance with your delivery? Reach out to us!
          <br />
          📞 Phone: [+8801742923499]
          <br />
          📧 Email: [md.habiburrahmanjed@gmail.com]
          <br />
          📍 Address: [Rajshahi, Bangladesh]
          <br />
          We're here to ensure a smooth and hassle-free delivery experience for you! 🚀.
          </motion.p>
        </motion.div>

        {/* Vertical Line for Styling */}
        <div className="hidden lg:block border-l-4 border-yellow-400 h-64"></div>
      </div>
    </div>
    );
};

export default Contact;