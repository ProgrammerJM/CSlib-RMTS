"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

async function handleLoginSubmit(
  event: FormEvent<HTMLFormElement>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  router: ReturnType<typeof useRouter>
) {
  event.preventDefault();

  setIsLoading(true);

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
      throw new Error("Failed to Login!");
    }

    if (response.ok) {
      router.push("/dashboard");
    }
  } catch (err: any) {
    console.error(err.message);
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
}

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <form
        onSubmit={(event) =>
          handleLoginSubmit(event, setError, setIsLoading, router)
        }
        className="flex flex-col "
      >
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
