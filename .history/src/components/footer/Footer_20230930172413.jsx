import React from "react";
import { FiFacebook } from "react-icons/Fi";
import { FiInstagram } from "react-icons/Fi";
import { FiLinkedin } from "react-icons/Fi";
import { FiTwitter } from "react-icons/Fi";
import Link from "next/link";

const social =[{
  id: 2,
  icon: "twitter", // You caicon you want to use (e.g., a URL to an image).
  link: "https://www.twitter.com",
}]
const Footer = () => {
  return (
    <footer className=" flex flex-row justify-between py-5 items-center">
      <div> 2023 Bakenbaev. All rights reserved</div>
      <div className="flex flex-row">
      
      </div>
    </footer>
  );
};

export default Footer;
