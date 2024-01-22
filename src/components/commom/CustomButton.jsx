import { Button } from "flowbite-react";
import React from "react";

const CustomButton = ({ children, onClick, className, background }) => {
  return (
    <Button
      className={`${background} rounded-none ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
