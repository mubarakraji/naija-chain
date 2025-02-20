import React from "react";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Set up your wallet",
    description: "Powerful features and inclusions, which makes DMLA standout, easily customizable and scalable.",
    image: "/sm1.png",
    link: "/setup-wallet",
  },
  {
    id: 2,
    title: "Create your collection",
    description: "A great collection of beautiful Nigerian crafts for your need. Choose the best suitable craft.",
    image: "/sm2.png",
    link: "/create-collection",
  },
  {
    id: 3,
    title: "Add your Crafts",
    description: "We've made the marketplace fully responsive, so it looks great on all devices: desktop, tablets, and mobile.",
    image: "/sm3.png",
    link: "/add-crafts",
  },
  {
    id: 4,
    title: "Sell Your Crafts",
    description: "Reach millions of buyers worldwide by showcasing your unique crafts and increasing your sales.",
    image: "/sm4.png",
    link: "/sell-crafts",
  },
];

const SmallCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card) => (
        <Link key={card.id} href={card.link} className="group">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 cursor-pointer">
            <img src={card.image} alt={card.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SmallCards;
