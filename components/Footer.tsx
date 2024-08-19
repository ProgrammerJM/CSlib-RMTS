import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-24 p-4 bg-black text-white">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Library RMTS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
