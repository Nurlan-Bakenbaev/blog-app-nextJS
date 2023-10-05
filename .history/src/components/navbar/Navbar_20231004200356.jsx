"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/Ai";
import { RxHamburgerMenu } from "react-icons/Rx";
import DarkModeToogle from "../DarkModeToogle/DarkModeToogle";
import { ThemeContext } from "../../../context/ThemeContext";

const links = [
  { id: "home-link", title: "Home", link: "/" },
  { id: "portfolio-link", title: "Portfolio", link: "/portfolio" },
  { id: "blog-link", title: "Blog", link: "/blog" },
  { id: "about-link", title: "About", link: "/about" },
  { id: "contact-link", title: "Contact", link: "/contact" },
  { id: "dashboard-link", title: "Dashboard", link: "/dashboard" },
];

const Navbar = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <nav className={`flex flex-row justify-between py-5 px-12 bg-${mode === "dark" ? "" : [#d3d3d3']}`}>
      <Link className="md:text-sm text-center md:hidden lg:block mx-5" href="/">
        MY BLOG
      </Link>
      <div className=" hidden md:flex gap-4 items-center">
        <DarkModeToogle />
        {links.map((link) => (
          <Link
            className={`text-${
              mode === "dark" ? "white" : "black"
            } px-3 hover:text-green-500 
             hover:scale-110 hover:border-b-[1px] `}
            key={link.id}
            href={link.link}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center gap-5">
        <div className="md:hidden cursor-pointer hover:text-green-500">
          <RxHamburgerMenu size={28} />
        </div>
        <button className=" bg-green-600 md:py-2 rounded-lg md:px-3  sm:text-xs">
          <span className="hidden lg:block">Log Out </span>
          <span className="block lg:hidden px-4 py-1 ">
            <AiOutlineLogout size={16} />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
