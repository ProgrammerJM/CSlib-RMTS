"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("username");
      const password = formData.get("password");

      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login!");
      }

      if (response.ok) {
        router.push("/profile");
      } else {
        // Handle Error
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          className="text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className="text-black"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging In..." : "Login"}
        </button>
        {error && <p>{error}</p>}
      </form>
      <Link href={"http://localhost:3000/auth/signup"}>
        <button>Go to Signup</button>
      </Link>
    </div>
  );
}
