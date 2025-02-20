"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountingCard from "@/components/CountingCard";
import Craft from "@/components/Craft";

const NigerianCraftsSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto mb-8 px-6">
        <div className="w-full pt-24 lg:ml-10 text-center lg:text-left">
          <motion.h3
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            Empowering Local Artisans. <br />
            With Decentralized Marketplace
          </motion.h3>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/ab1.png"
          alt="Slider BG"
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-6 mt-12 grid md:grid-cols-2 gap-8 bg-gray-100">
        {/* First Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Why We Do This
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We believe in the power of local Nigerian crafts and the artisans
            who create them. By providing a decentralized marketplace, we're
            helping these artisans reach a global audience and receive fair
            compensation for their work.
          </motion.p>
          <motion.a
            href="/blog"
            className="inline-block mt-6 px-6 py-3 bg-[#232e46] text-white font-semibold rounded-lg hover:bg-blue-400 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            See Our Blog
          </motion.a>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Helping You <br /> Grow At Every Stage.
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From setting up your wallet, creating your collection, adding your
            crafts, to selling them, we're here to support you at every stage of
            your journey.
          </motion.p>
        </motion.div>
      </div>

      {/* New Right Section as a Card */}
      <div className="container mx-auto px-6 mt-12 flex flex-col lg:flex-row items-center gap-5 bg-gray-100">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <motion.h3
            className="text-2xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            Create, Sell, and Collect Unique Nigerian Crafts at DMLA
          </motion.h3>
        </div>

        {/* Right Section as a Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 relative lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            The growth of decentralized marketplaces is tremendous, providing
            unique opportunities for local artisans to showcase their crafts to
            a global audience. Join us in this revolution and start selling your
            crafts today.
          </motion.p>
        </motion.div>
      </div>
      <CountingCard/>
      <Craft/>
    </div>
  );
};

export default NigerianCraftsSection;
