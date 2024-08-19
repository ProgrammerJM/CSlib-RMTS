"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

async function handleSubmitSignup(
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
      router.push("http://localhost:3000/auth/login");
    }
  } catch (err: any) {
    console.error(err.message);
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
}

export default function SignUpForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <form
        onSubmit={(event) =>
          handleSubmitSignup(event, setError, setIsLoading, router)
        }
        className="flex flex-col max-w-fit"
      >
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
