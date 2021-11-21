import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Post from "./Post";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div>
      <Link href='/Post'> aslema edheya the official page </Link>
    </div>
  );
}
