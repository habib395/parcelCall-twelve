import { motion } from "framer-motion";
import bannerImage from "../../../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden flex items-center px-8 lg:px-20 z-10">
      {/* Animated Background Image */}
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
            <h1 className="text-white text-7xl font-extrabold drop-shadow-lg">
              Express Home Delivery
            </h1>
          </motion.div>

          {/* Animated Paragraph */}
          <motion.p
            className="text-white text-lg mt-6 drop-shadow-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Express home delivery ensures that your packages, groceries, or essential items are
            delivered safely, securely, and on time, providing you with ultimate convenience and a
            stress-free shopping experience from the comfort of your home.
          </motion.p>
        </motion.div>

        {/* Vertical Line for Styling */}
        <div className="hidden lg:block border-l-4 border-yellow-400 h-64"></div>
      </div>
    </div>
  );
};

export default Banner;
