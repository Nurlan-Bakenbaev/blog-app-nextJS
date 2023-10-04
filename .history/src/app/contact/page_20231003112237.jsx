import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl font-bold mt-3 ">
        {" "}
        Let's keep in touch
      </h1>

      <div className="flex flex-col md:flex-row mt-10  justify-center items-center">
        <div>
          <Image
            className="px-auto animate-bounce-custom "
            height={300}
            width={550}
            src="/contact.png"
          />
        </div>
        <form className="flex flex-col gap-4 px-5 md:px-2">
          <input
            className="bg-transparent  border-[1px] border-[#3498db] rounded-md py-2 px-4 focus:outline-none focus:border-blue-700"
            type="text"
            placeholder="First name"
          />
          <input
            className="bg-transparent  border-[1px] border-[#3498db] rounded-md py-2 px-4 focus:outline-none focus:border-blue-700"
            type="email"
            placeholder="Your email"
          />
          <textarea
            className="bg-transparent  border-[1px] border-[#3498db] rounded-md py-2 px-4 focus:outline-none focus:border-blue-700"
            placeholder="Message..."
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;