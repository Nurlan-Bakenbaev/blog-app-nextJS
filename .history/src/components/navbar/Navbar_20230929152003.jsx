import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <nav className="flex flex-row justify-between">
      <Link href="/">
        <Image />
        MY BLOG
      </Link>
      <div className="">
        {links.map((link) => (
          <Link key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
