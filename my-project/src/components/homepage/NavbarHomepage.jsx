import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonMenu from "../ButtonMenu";
import IconHamburguerMenu from "../IconHamburguerMenu";
import LogoNavbar from "../LogoNavbar";
import IconDarkMode from "./IconDarkMode";

const NavbarHomepage = ({ active }) => {
  const classborder =
    "relative before:w-full before:h-1 before:rounded before:bg-blue-regular before:absolute before:-bottom-1";
  const [open, setOpen] = useState(false);
  const handleNav = () => {
      setOpen(!open)
  }

  return (
    <nav className="  sm:items-center sm:justify-between  text-end sm:flex-wrap font-primary ">
      <div className="flex w-full items-start flex-grow md:flex md:items-center md:w-auto  text-purple-dark ">
        <div className="pt-4 ml-8 mb-2">
          <Link to="/">
            <LogoNavbar />
          </Link>
        </div>

        <div
          onClick={handleNav}
          className=" mr-10 ml-2 mt-6 sm:hidden flex-auto grid justify-items-end"
        >
          <IconHamburguerMenu name={open ? "close" : "menu"} />
        </div>

        <ul
          className={`flex-auto text-sm sm:flex-grow self-start hidden sm:flex justify-end pr-6 pt-6 gap-14 md:gap-6 sm:gap-4 items-center lg:text-xl ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <Link
            to="/"
            className={`lg:inline-block lg:mt-0 font-bold ${
              active == "home" ? classborder : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/howitwork"
            className={`lg:inline-block lg:mt-0 font-bold ${
              active == "how" ? classborder : ""
            }`}
          >
            How it Work
          </Link>
          <Link
            to="/about"
            className={`lg:inline-block lg:mt-0 font-bold ${
              active == "about" ? classborder : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`lg:inline-block lg:mt-0 font-bold ${
              active == "contact" ? classborder : ""
            }`}
          >
            Contact
          </Link>

          <Link to="/Signin">
            <ButtonMenu name="Signin" />
          </Link>

          <Link to="/Login">
            <ButtonMenu name="Login" />
          </Link>

          <Link>
            <IconDarkMode />
          </Link>
        </ul>
        <div className={!open ?"mt-16 mr-1 vy-sm:mr-10 fixed right-0 top-0 w-[30%] ease-in-out duration-500 rounded sm:hidden bg-[#E8E1FF] border-purple-dark border-2" :"fixed left-[-100%]" }>
        
          <div >
          <ul className="grid justify-items-start pt-3 ">
            <li className="text-sm vy-sm:text-base vy-sm:p-1 hover:text-purple-regular vy-sm:font-bold">
              <Link to="/" >
                Home
              </Link>
            </li>

            <li className="text-sm vy-sm:text-base vy-sm:p-1 hover:text-purple-regular vy-sm:font-bold">
              <Link to="/howitwork" >
                How it Work
              </Link>
            </li>
            <li className="text-sm vy-sm:text-base vy-sm:p-1 hover:text-purple-regular vy-sm:font-bold">
              <Link
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="text-sm vy-sm:text-base  vy-sm:p-1 hover:text-purple-regular vy-sm:font-bold">
              <Link to="/contact">
                Contact
              </Link>
            </li>
             
            <li className="p-1">
            <Link to="/Signin">
              <ButtonMenu name="Signin" />
            </Link>
            </li>
            <li className="p-1">
            <Link to="/Login">
              <ButtonMenu name="Login" />
            </Link>
            </li>
            <li>
              <Link className="mr-2 grid justify-items-end px-2 py-1">
                <IconDarkMode />
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHomepage;
