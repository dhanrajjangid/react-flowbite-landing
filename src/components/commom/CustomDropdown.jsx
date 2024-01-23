import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";

export default function CustomDropdown({
  label,
  icon,
  options,
  defaultSelectedIndex,
  onChange,
  className,
}) {
  const [selectedOption, setSelectedOption] = useState(
    options?.[defaultSelectedIndex] ?? ""
  );

  console.log();
  const dropdownStyle = {
    backgroundColor: "transparent",
    color: "inherit",
    borderRadius: 0
  };

  const iconStyle = {
    marginRight: "8px",
  };

  const handleOptionChange = (selectedItem) => {
    setSelectedOption(selectedItem);
    onChange(selectedItem);
  };

  return (
    <div className={className}>
    <Dropdown
      label={defaultSelectedIndex || defaultSelectedIndex === 0 ? selectedOption : label} // Set the label to the selected option or the default label
      style={dropdownStyle}
      dismissOnClick={false}
      defaultIndex={0}
    >
      {icon && <i className={`icon-${icon}`} style={iconStyle}></i>}
      {options?.map((item, index) => (
        <Dropdown.Item onClick={() => handleOptionChange(item)} key={index}>
          {item}
        </Dropdown.Item>
      ))}
    </Dropdown>
    </div>
  );
}
