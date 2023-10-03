import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold"> Let's keep in touch</h1>

      <div className="flex flex-row mt-10 gap-12">
        <div>
          <Image height={300} width={800} src="/contact.png" />
        </div>
        <form className="flex flex-col gap-4">
          <input
            className="bg-transparent outline"
            type="text"
            placeholder="First name"
          />
          <input
            className="bg-transparent outline"
            type="email"
            placeholder="Your email"
          />
          <textarea
            className="bg-transparent outline"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
