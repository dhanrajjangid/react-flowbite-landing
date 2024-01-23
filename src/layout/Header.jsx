import { Link as RouterLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { navItems } from "@/constants/navItems";
import { FiBell, FiSearch, FiUser } from "react-icons/fi"; // Assuming you have these icons available
import CustomButton from "@/components/commom/CustomButton";
import CustomDropdown from "@/components/commom/CustomDropdown";
export default function Header() {

  return (
    <Navbar fluid rounded className="bg-red-500 text-white">
      <Navbar.Brand as={RouterLink} to="https://flowbite-react.com">
        <img
          src="https://www.flowbite-react.com/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white border-r pr-4">
          Shop Digest
        </span>
      </Navbar.Brand>

      <CustomDropdown
        label="Platform"
        icon="your-icon"
        options={["Option 1", "Option 2", "Option 3"]}
        // defaultSelectedIndex={0}
        onChange={(selectedItem) => console.log("Selected Item:", selectedItem)}
        className="your-custom-class"
      />

      <div className="flex-grow flex items-center justify-center"> {/* Centered nav links */}
        <Navbar.Collapse>
          {navItems.map((item) => (
            <Navbar.Link
              as={RouterLink}
              to={item.path}
              key={item.label}
              className="text-white"
            >
              {item.label}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </div>
      <div className="flex items-center justify-end"> {/* Right-aligned icons and button */}
        <div className="mr-3">
          <FiBell className="text-white" />
        </div>
        <div className="mr-3">
          <FiSearch className="text-white" />
        </div>
        <div className="mr-3">
        <CustomButton background='bg-blue-500'>Add Post</CustomButton>
      </div>
        <div>
          <RouterLink to="/login" className="text-white flex items-center">
            <FiUser className="mr-1" />
            Login
          </RouterLink>
        </div>
      </div>
    </Navbar>
  );
}
