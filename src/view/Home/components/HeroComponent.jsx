import React, { useState } from "react";
import CustomDropdown from "@/components/commom/CustomDropdown";
import CustomButton from "@/components/commom/CustomButton";
import { Button } from "flowbite-react";

const HeroComponent = () => {
  const [activeButton, setActiveButton] = useState("Apps");

  const handleButtonClick = (item) => {
    setActiveButton(item);
  };

  const dropdownLabels = [
    "Destinations",
    "Check in",
    "Check out",
    "Add guests",
  ];

  const popularLabels = ["Settings", "Phone", "Camera", "Calendar", "Messages"];

  return (
    <div className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 flowbite-heading">
          Find the best Shopify apps
        </h2>

        <div className="flex flex-row items-center justify-center space-x-4 mb-6 sm:space-x-4">
          {["Apps", "Agencies", "Themes", "Services"].map((item) => (
            <Button
              key={item}
              color="gray"
              className={` ${activeButton !== item ? "border-none" : ""}`}
              pill
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-0 mb-6 px-4 sm:px-0">
          {dropdownLabels.map((label, index) => (
            <CustomDropdown
              key={label}
              className="border mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
              label={label}
              icon="calendar"
            />
          ))}

          <CustomButton
            background="bg-blue-500"
            onClick={() => console.log("Search button clicked")}
            className="w-full sm:w-auto"
          >
            <i className="icon-search"></i> Search
          </CustomButton>
        </div>

        <div className="flex flex-wrap items-center justify-center space-y-4 sm:space-y-0 mb-6">
          <span className="text-gray-400">Popular Now:</span>
          {popularLabels.map((item) => (
            <Button key={item} color="gray" className="px-1 py-0" pill>
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
