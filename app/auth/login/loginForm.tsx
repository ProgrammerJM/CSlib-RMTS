"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const username = formData.get("username");
      const password = formData.get("password");

      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login!");
      }

      if (response.ok) {
        router.push("/dashboard");
      } else {
        // Handle Error
        throw new Error("Failed to redirect!");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <form onSubmit={handleLoginSubmit} className="flex flex-col ">
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          className="text-black indent-2 max-w-auto"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className="text-black indent-2 max-w-auto"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="border p-2 mt-2 max-w-auto"
        >
          {isLoading ? "Logging In..." : "Login"}
        </button>
        {error && (
          <p className="text-red-500 text-wrap whitespace-pre-wrap">{error}</p>
        )}
      </form>
      <Link href={"http://localhost:3000/auth/signup"} className="mt-10">
        <button>Go to Signup</button>
      </Link>
    </div>
  );
}
