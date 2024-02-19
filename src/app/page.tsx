"use client"; // = frontend

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  return (
    <main>
      <button onClick={() => router.push("/login")}>Login page</button>
    </main>
  );
}
