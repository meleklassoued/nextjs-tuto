import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Post from "./Post";
import Link from "next/dist/client/link";
import cn from "classnames";


//add the Layout
import Layout from "../components/Layout";

export default function Home() {
 
  return (
    <>
      <Layout>
        <Head>
          <title>page1</title>
          <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        </Head>
        <div>melek lassoued</div>
        <style jsx>{`
          div {
            color: #5e5ccf;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            border: 10px solid #00000075;
            background: #9b9ba9;
            border-radius: 10%;
            font-size: 40px;
          }
        `}</style>
      
      </Layout>
    </>
  );
}
