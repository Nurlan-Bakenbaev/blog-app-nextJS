import React from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { id: "home-link", title: "Home", link: "/home" },
  { id: "portfolio-link", title: "Portfolio", url: "/portfolio" },
  { id: "blog-link", title: "Blog", link: "/blog" },
  { id: "about-link", title: "About", link: "/about" },
  { id: "contact-link", title: "Contact", link: "/contact" },
  { id: "dashboard-link", title: "Dashboard", link: "/dashboard" },
];

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <Image />
        MY BLOG
      </Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
