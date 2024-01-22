// src/components/MyComponent.js
import React from "react";
import MyCard from "@/view/Home/components/CommunityCard";
import { communityData } from "@/constants/communityData";
const Community = ({ cardData }) => {
  return (
    <div className="my-component bg-red-600 text-white py-6 px-48">
      <h1 className="text-4xl font-bold mb-4">3 Ways to join our community</h1>
      <h2 className="text-3xl font-bold mb-4">We help make Madicare easier</h2>
      <h6 className="text-base mb-4">
        These medicare solutions can help you find a plan best suited for your
        lifestyle and budget
      </h6>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {communityData?.map((card, index) => (
          <MyCard
            key={index}
            title={card.title}
            text={card.text}
            buttonText={card.buttonText}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
