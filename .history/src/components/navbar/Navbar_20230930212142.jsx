"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/Ai";
import { RxHamburgerMenu } from "react-icons/Rx";

const links = [
  { id: "home-link", title: "Home", link: "/" },
  { id: "portfolio-link", title: "Portfolio", link: "/portfolio" },
  { id: "blog-link", title: "Blog", link: "/blog" },
  { id: "about-link", title: "About", link: "/about" },
  { id: "contact-link", title: "Contact", link: "/contact" },
  { id: "dashboard-link", title: "Dashboard", link: "/dashboard" },
];

const Navbar = () => {
  return (
    <nav className=" flex flex-row justify-between py-5 px-3 ">
      <Link className="md:text-sm text-center md:hidden mx-5" href="/">
        MY BLOG
      </Link>
      <div className=" hidden md:flex gap-4 items-center">
        {links.map((link) => (
          <Link
            className="text-white px-3 hover:text-green-500 
             hover:scale-110 hover:border-b-[1px] "
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
        <button className=" bg-green-600 md:py-2 rounded-lg outline md:px-3  sm:text-xs">
          <span className="hidden md:block">Log Out </span>
          <span className="block md:hidden p-2">
            <AiOutlineLogout />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
