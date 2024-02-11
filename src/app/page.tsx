"use client"; // = frontend

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <button onClick={() => router.push("/login")}>Login page</button>
    </main>
  );
}
