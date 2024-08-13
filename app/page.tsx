"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center mt-20">
      <h1>Home</h1>
      <div className="flex mt-2 justify-between">
        <button
          type="button"
          onClick={() => router.push("http://localhost:3000/auth/login")}
          className="border p-2 mx-2"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => router.push("http://localhost:3000/auth/signup")}
          className="border p-2 mx-2"
        >
          Signup
        </button>
      </div>
      <p className="text-sm mt-2">Welcome to the home page.</p>
    </main>
  );
}
