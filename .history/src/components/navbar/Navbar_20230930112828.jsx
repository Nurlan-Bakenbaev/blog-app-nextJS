"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/Ai";

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
    <nav className=" flex flex-row justify-between py-5 items-center ">
      <Link className="hidden md:block" href="/">
        <Image />
        MY BLOG
      </Link>
      <div className="flex  gap-4 items-center">
        {links.map((link) => (
          <Link
            className="text-white px-3  hover:text-green-500 
             hover:scale-110 hover:border-b-[1px] "
            key={link.id}
            href={link.link}
          >
            {link.title}
          </Link>
        ))}
        <button className="outline md:px-3 py-1">
          <span className="hidden md:block">Log Out </span><span>AiOutlineLogout></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
