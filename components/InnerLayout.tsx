import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <section className="flex-shrink-0">
          <Navbar />
        </section>
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  );
}
