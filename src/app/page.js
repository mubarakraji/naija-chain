"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import SmallCards from "@/components/SmallCards";

export default function Page() {
  useEffect(() => {
    sal(); 
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 bg-[#1c1c28]">
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 lg:w-5/12 mt-10 md:mt-0 ml-9">
          <h2 className="text-5xl font-bold leading-tight text-white" data-sal="fade" data-sal-delay="200" data-sal-duration="1000">
            Discover Local Nigerian Crafts, Collect and Purchase Unique Artisanal Products.
          </h2>
          <p className="mt-4 text-gray-300 text-2xl" data-sal="slide-up" data-sal-delay="400" data-sal-duration="1000">
            Partner with one of Nigeria's largest decentralized marketplaces to showcase your crafts and products.
          </p>
          {/* Buttons */}
          <div className="mt-6 flex space-x-6">
            <a
              href="/"
              className="px-6 py-3 bg-[#232e46] text-white rounded-lg shadow-md hover:bg-blue-400 transition"
            >
              Get Started
            </a>
            <a
              href="/create"
              className="px-6 py-3 border border-blue-400 text-white rounded-lg hover:bg-blue-400 hover:text-white transition"
            >
              Create
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 lg:w-5/12 flex justify-center ml-9">
          <Image
            src="/bg1.png"
            width={585}
            height={593}
            alt="Slider Image"
            className="rounded-lg shadow-lg"
            data-sal="zoom-in"
            data-sal-delay="600"
            data-sal-duration="1000"
          />
        </div>
      </div>

      {/* Blinking Dot & Live Bidding Title */}
      <div className="flex items-center ml-9 mt-12 space-x-3">
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-blink"></span>
        <h3
          className="text-white text-3xl font-semibold"
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="800"
        >
          Live Bidding
        </h3>
      </div>
      <SmallCards/>
    </div>
  );
}
