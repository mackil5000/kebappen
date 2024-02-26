import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kebappen",
  description: "Kebappen",
};

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
