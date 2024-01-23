import React from "react";
import CustomCard from "@/components/StoryCard";
import StoriesData from "@/constants/StoriesData";
import AdCard from "@/components/AdCard";

const Stories = () => {
  return (
    <div className="md:py-12 px-3">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 flowbite-heading">
          Discover Exciting Features
        </h2>
        <h6 className="text-lg text-gray-500 mb-6">
          Explore the latest and greatest features for your needs.
        </h6>

        <div className="flowbite-grid md:flowbite-grid-cols-2 lg:flowbite-grid-cols-3 xl:flowbite-grid-cols-4 gap-6">
          {StoriesData.map((item, index) => (
            <CustomCard key={index} title={item.title} imageUrl={item.url} />
          ))}
          <AdCard title="To know everything about Shopify" />
        </div>
      </div>
    </div>
  );
};

export default Stories;
