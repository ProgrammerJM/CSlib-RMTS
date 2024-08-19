"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex pl-20 justify-evenly">
      <Link
        href={"/requests"}
        className={
          isActive("/requests")
            ? "text-black font-semibold dark:text-white dark:font-semibold"
            : "text-base text-gray-600 dark:text-gray-300 font-normal"
        }
      >
        Requests
      </Link>
      <Link
        href={"/quotations"}
        className={
          isActive("/quotations")
            ? "text-black font-semibold dark:text-white dark:font-semibold"
            : "text-base text-gray-600 dark:text-gray-300 font-normal"
        }
      >
        Quotations
      </Link>
      <Link
        href={"/reports"}
        className={
          isActive("/reports")
            ? "text-black font-semibold dark:text-white dark:font-semibold"
            : "text-base text-gray-600 dark:text-gray-300 font-normal"
        }
      >
        Report
      </Link>
      <Link
        href={"/bookFunds"}
        className={
          isActive("/bookFunds")
            ? "text-black font-semibold dark:text-white dark:font-semibold"
            : "text-base text-gray-600 dark:text-gray-300 font-normal"
        }
      >
        BookFunds
      </Link>
    </nav>
  );
}
