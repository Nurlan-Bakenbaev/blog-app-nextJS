import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold"> Let's keep in touch</h1>

      <div>
        <div>photo</div>
        <form>
          <input 
          type="text"
          placeholder="First name" />
          <input type="email"placeholder="Your email" />
        <textarea  cols="40" rows="10"></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
