'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { id: "home-link", title: "Home", link: "/" },
  { id: "portfolio-link", title: "Portfolio", link: "/portfolio" },
  { id: "blog-link", title: "Blog", link: "/blog" },
  { id: "about-link", title: "About", link: "/about" },
  { id: "contact-link", title: "Contact", link: "/contact" },
  { id: "dashboard-link", title: "Dashboard", link: "/dashboard" },
];

const Navbar = () => {

  const router = useRouter();
  return (
    <nav className="flex flex-row justify-center md:justify-between">
      <Link className="hidden md:block" href="/">
        <Image />
        MY BLOG
      </Link>
      <div className="flex  gap-4">
        {links.map((link) => (
          <Link className="hover:text-green-600" key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
