import { Card } from "flowbite-react";
import CustomButton from "@/components/commom/CustomButton";

function PricingCard({ plan }) {
  const { title, price, active_points, inactive_points } = plan;

  const renderPoint = (item, isInactive = false) => (
    <li className={`flex space-x-3 ${isInactive ? 'line-through decoration-gray-500' : ''}`}>
      <svg
        className={`h-5 w-5 shrink-0 ${isInactive ? 'text-gray-400 dark:text-gray-500' : 'text-cyan-600 dark:text-cyan-500'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span className={`text-base font-normal leading-tight ${isInactive ? 'text-gray-500' : 'text-gray-500 dark:text-gray-400'}`}>
        {item}
      </span>
    </li>
  );

  return (
    <Card className="max-w-sm min-h-full">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div>
      <ul className="my-7 space-y-5">
        {/* Active Points */}
        {active_points?.map((item) => renderPoint(item))}

        {/* Inactive Points */}
        {inactive_points?.map((item) => renderPoint(item, true))}
      </ul>
      <CustomButton background="bg-black">Get Started</CustomButton>
    </Card>
  );
}

export default PricingCard;
