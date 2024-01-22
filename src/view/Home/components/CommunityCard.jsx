import React from 'react';
import { Card } from 'flowbite-react'; // Import Flowbite components
import CustomButton from "@/components/commom/CustomButton";

const CommunityCard = ({ title, text, buttonText, className }) => {
  return (
    <Card className={className}>
      <h5 className="text-2xl font-bold tracking-tight">
        {title}
      </h5>
      <p className="font-normal">
        {text}
      </p>
      <CustomButton
            background="bg-white"
            className='text-black border-black border-none '
            onClick={() => console.log("Search button clicked")}
          >
            {buttonText}
          </CustomButton>
        
    </Card>
  );
};

export default CommunityCard;
