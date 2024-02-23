"use client"; // = frontend
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  return (
    <main>
      <button onClick={() => router.push("/admin/login")}>Login page</button>
    </main>
  );
}
