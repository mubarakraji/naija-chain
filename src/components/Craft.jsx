"use client";

import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-16 bg-gray-100">
      {/* Heading */}
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
      >
        Discover rare Nigerian crafts <br /> and start your collection
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        className="mt-4 text-lg text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
      >
        Join the DMLA community and start discovering unique Nigerian crafts.
        Whether you're an artisan or a collector, there's something for
        everyone here.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <a
          href="/create"
          className="bg-[#232e46] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-400 transition duration-300"
        >
          Create
        </a>
        <a
          href="/contact"
          className="bg-[#232e46]  text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-400 transition duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default CallToAction;
