import InnerLayout from "@/components/InnerLayout";
import React from "react";

export default function BookFundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <InnerLayout>{children}</InnerLayout>;
}
