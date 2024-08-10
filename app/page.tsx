"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>Home</h1>
      <button
        type="button"
        onClick={() => router.push("/auth/login")}
        className="border-2 p-2"
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => router.push("/auth/signup")}
        className="border-2 p-2"
      >
        Signup
      </button>
      <p>Welcome to the home page.</p>
    </main>
  );
}
