import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold"> Let's keep in touch</h1>

      <div>
        <div>photo</div>
        <form className="flex flex-col gap-4">
          <input 
          type="text"
          placeholder="First name" />
          <input type="email"placeholder="Your email" />
        <textarea className="bg-opacity-0"  cols="30" rows="10"></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
