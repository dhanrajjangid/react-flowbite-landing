import React, { useState, useEffect } from "react";
import CustomDropdown from "../../../components/commom/CustomDropdown";
import { Navbar } from "flowbite-react";

const SubHeader = () => {
  const dropdownOptions = [
    {
      label: "ICC Cricket World Cup 2023",
      items: ["Home", "Company", "Team", "Features", "Marketplace", "News"],
    },
    {
      label: "UEFA Euro 2024",
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(dropdownOptions[0]);
  const [isMobile, setIsMobile] = useState(false);

  const handleDropdownChange = (selectedLabel) => {
    const selectedOption = dropdownOptions.find(
      (option) => option.label === selectedLabel
    );
    setSelectedCategory(selectedOption || dropdownOptions[0]);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    checkMobile(); // Initial check

    // Attach event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <Navbar fluid>
      <div className="mr-4">
        <CustomDropdown
          icon="arrow-down"
          className="border-r"
          defaultSelectedIndex={0}
          options={dropdownOptions.map((option) => option.label)}
          onChange={handleDropdownChange}
        />
      </div>

      <nav className="flex flex-wrap items-center justify-between  mb-2 sm:mb-0">
        {selectedCategory.items.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`mr-4 sm:mb-0 hover:text-gray-400 ${
              isMobile && index > 0 ? "hidden" : "" // Hide items after the first one on mobile
            }`}
          >
            {item}
          </a>
        ))}
        {selectedCategory.items.length > 2 && isMobile && (
          <div className="relative group">
            <a href="#" className="mr-4 mb-2 sm:mb-0 hover:text-gray-400">
              More
            </a>
            <div className="absolute hidden bg-white text-gray-800 rounded-md shadow-md z-10 group-hover:block right-0">
              {selectedCategory.items.slice(2).map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="border-l px-2 mb-2 sm:mb-0 hidden sm:block">
        <a href="#" className="mr-4 hover:text-gray-400">
          Become a Zola vendor
        </a>
        <a href="#" className="hover:text-gray-400">
          Shop Zola Home
        </a>
      </div>
    </Navbar>
  );
};

export default SubHeader;
