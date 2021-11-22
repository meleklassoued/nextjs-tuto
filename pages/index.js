import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

// import { getSortedPostsData } from "../lib/posts";
// import getSortedPostsData from "../lib/TestApi";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(res.json);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

//add the Layout
import Layout from "../components/Layout";

export default function Home({ data }) {
  return (
    <>
      <Layout>
        {data.map(({ id, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
          </li>
        ))}
      </Layout>
    </>
  );
}
