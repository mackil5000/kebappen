import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles.scss";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kebappen",
  description: "Kebappen",
};

function Loading() {
  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
