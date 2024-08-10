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

      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to signup!");
      }

      if (response.ok) {
        router.push("/login");
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
    <div>
      <form onSubmit={handleSubmitSignup}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="text-black"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        {error && <p>{error}</p>}
      </form>
      <Link href={"http://localhost:3000/auth/login"}>
        <button>Go to Login</button>
      </Link>
    </div>
  );
}

export default SignUpForm;
