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

        <div className="flex items-center justify-center space-x-4 mb-6">
          {["Apps", "Agencies", "Themes", "Services"].map((item) => (
            <Button
              color="gray"
              className={` ${activeButton !== item ? "border-none" : ""}`}
              pill
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="flex justify-center items-center mb-6">
          {dropdownLabels.map((label, index) => (
            <CustomDropdown
              className='border'
              key={label}
              label={label}
              icon="calendar"
            />
          ))}

          <CustomButton
            background="bg-blue-500"
            onClick={() => console.log("Search button clicked")}
          >
            <i className="icon-search"></i> Search
          </CustomButton>
        </div>

        {/* <hr className="divider my-6" /> */}

        <div className="flex items-center justify-center space-x-4">
          <span className="text-gray-400">Popular Now:</span>
          {popularLabels.map((item) => {
            return (
              <Button color="gray" className="px-1 py-0" pill>
                {item}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
