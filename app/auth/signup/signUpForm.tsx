"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function SignUpForm() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmitSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const username = formData.get("username");
      const password = formData.get("password");
      const role = formData.get("role");

      const response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });

      if (!response.ok) {
        throw new Error("Failed to signup!");
      }

      if (response.ok) {
        // Redirect to login page after
        router.push("http://localhost:3000/auth/login");
      } else {
        // Handle errors
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmitSignup} className="flex flex-col max-w-fit">
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="text-black indent-2"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="text-black indent-2"
        />
        <label htmlFor="role">Choose a role</label>
        <select name="role" className="text-black indent-2">
          <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="administrative-assistant">
            Administrative Assistant
          </option>
        </select>
        <button type="submit" disabled={isLoading} className="border mt-2 p-2">
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        {error && <p>{error}</p>}
      </form>
      <Link
        href={"http://localhost:3000/auth/login"}
        className="items-center center mt-10 max-w-fit"
      >
        <button>Go to Login</button>
      </Link>
    </div>
  );
}

export default SignUpForm;
