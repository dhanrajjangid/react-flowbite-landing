import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Navbar, Card } from "flowbite-react";
import { FiBell, FiSearch, FiUser, FiMenu, FiArchive } from "react-icons/fi";
import CustomButton from "@/components/commom/CustomButton";
import CustomDropdown from "@/components/commom/CustomDropdown";
import { navItems } from "@/constants/navItems";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isMobile = window.innerWidth <= 640; // Adjust the breakpoint as needed


  return (
    <Navbar fluid rounded className="bg-red-500 text-white">
      <div className="flex items-center">
        {/* Menu button for small screens */}
        <FiMenu className="text-white mr-2 sm:hidden" onClick={toggleMenu} />
        {/* Site name */}
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

        {isMobile ? (
          // Render icon instead of label in mobile view
          <FiArchive className="text-white ml-2" />
        ) : (
          <CustomDropdown
            label="Platform"
            icon={<FiArchive className="text-white" />}
            options={["Option 1", "Option 2", "Option 3"]}
            onChange={(selectedItem) =>
              console.log("Selected Item:", selectedItem)
            }
            className="your-custom-class"
          />
        )}
      </div>

      <div className="hidden sm:flex items-center justify-center">
        {/* Centered nav links for larger screens */}
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

      <div className="flex items-center justify-end">
        {/* Right-aligned icons and button */}
        <div className="mr-3 hidden sm:flex">
          <FiBell className="text-white" />
        </div>
        <div className="mr-3 hidden sm:flex">
          <FiSearch className="text-white" />
        </div>
        <div className="mr-3 hidden sm:flex">
          <CustomButton background="bg-blue-500">Add Post</CustomButton>
        </div>
        <div className="hidden sm:flex">
          <RouterLink to="/login" className="text-white flex items-center">
            <FiUser className="mr-1" />
            Login
          </RouterLink>
        </div>

        {/* Additional items for small screens */}
        <div className="flex sm:hidden items-center">
          <FiSearch className="text-white mr-3" />
          <CustomButton background="bg-blue-500">Add Post</CustomButton>
        </div>

        {/* Menu card for small screens */}
        {isMenuOpen && (
          <Card className="sm:hidden absolute top-16 right-0">
            <Card.Body>
              {navItems.map((item) => (
                <Card.Link
                  as={RouterLink}
                  to={item.path}
                  key={item.label}
                  className="text-gray-800 hover:text-blue-500 block py-2"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Card.Link>
              ))}
            </Card.Body>
          </Card>
        )}
      </div>
    </Navbar>
  );
}
