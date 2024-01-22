import React, { useState } from "react";
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

  const handleDropdownChange = (selectedLabel) => {
    const selectedOption = dropdownOptions.find(
      (option) => option.label === selectedLabel
    );
    setSelectedCategory(selectedOption || dropdownOptions[0]);
  };

  return (
      <Navbar fluid>
        <div className="mr-4">
          <CustomDropdown
            // label="Select Category"
            icon="arrow-down"
            className="border-r"
            defaultSelectedIndex={0}
            options={dropdownOptions.map((option) => option.label)}
            onChange={handleDropdownChange} // Pass the handleDropdownChange function
          />
        </div>

        <nav className="flex justify-between">
          {selectedCategory.items.map((item, index) => (
            <a key={index} href="#" className="mr-4 hover:text-gray-400">
              {item}
            </a>
          ))}
        </nav>

        <div className="border-l px-2">
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
