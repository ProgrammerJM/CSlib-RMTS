import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col pl-20">
      <Link href={"/requests"} className="">
        Requests
      </Link>
      <Link href={"/quotations"} className="max-w-fit">
        Quotations
      </Link>
      <Link href={"/reports"} className="max-w-fit">
        Report
      </Link>
      <Link href={"/bookFunds"} className="max-w-fit">
        BookFunds
      </Link>
    </nav>
  );
}
