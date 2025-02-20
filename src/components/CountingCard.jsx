"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { label: "All Crafts", count: 100 },
    { label: "All Artisans", count: 500 },
    { label: "Total Earnings", count: 700 },
    { label: "Top Sellers", count: 900 },
  ];

  return (
    <div className="container mx-auto px-6 py-16 flex flex-col items-center bg-gray-100">
      {/* Title at the Top and Centered */}
      <h2 className="text-3xl font-bold text-black mb-10 text-center">
        DMLA Statistics
      </h2>

      {/* Centered Stats Boxes with 2 Per Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="w-72 h-64 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-500">
              <AnimatedCounter target={stat.count} />+
            </h2>
            <p className="text-lg font-semibold text-black">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 🟢 Counter that Updates on Scroll
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let increment = Math.ceil(target / 50); // Controls speed of counting

    const handleScroll = () => {
      let scrollDelta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      // Only count when user is scrolling
      if (scrollDelta !== 0) {
        setCount((prev) => {
          let newValue = prev + Math.abs(increment);
          return newValue >= target ? target : newValue;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [target]);

  return <>{count}</>;
};

export default StatsSection;
