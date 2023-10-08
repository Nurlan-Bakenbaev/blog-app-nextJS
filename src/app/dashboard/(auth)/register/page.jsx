"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-[200px] flex flex-col gap-5 items-center"
      >
        {/* ...Input fields */}
        <input
          name="name"
          className="pl-4 outline-none text-green-600 md:w-[350px] py-3 rounded-md"
          type="text"
          placeholder="User Name"
        />
        <input
          name="email"
          className="pl-4 outline-none text-green-600 md:w-[350px] py-3 rounded-md"
          required
          type="email"
          placeholder="email"
        />
        <input
          name="password"
          className="pl-4 outline-none text-green-600 md:w-[350px] py-3 rounded-md"
          required
          type="password"
          placeholder="password"
        />
        <button className="hover:bg-blue-500 px-4 rounded-md out bg-green-600 p-2">Register
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <Link href="/dashboard/login">Log In</Link>
      </form>
    </div>
  );
};

export default Register;
