import React from "react";
import { FiFacebook } from "react-icons/Fi";
import { FiInstagram } from "react-icons/Fi";
import { FiLinkedin } from "react-icons/Fi";
import { FiTwitter } from "react-icons/Fi";

import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" flex flex-row justify-between p-5 items-center">
      <div> 2023 Bakenbaev. All rights reserved</div>
      <div className="flex flex-row gap-3">
        <Link target="blank" href="https://www.facebook.com/">
          <FiFacebook />
        </Link>
        <Link target="blank" href="https://www.instagram.com/">
          <FiInstagram />
        </Link>
        <Link target="blank" href="https://www.linkedin.com/">
          <FiLinkedin />
        </Link>
        <Link target="blank" href="https://www.twitter.com/">
          <FiTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
