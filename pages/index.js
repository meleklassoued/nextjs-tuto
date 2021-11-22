import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//add the Layout
import Layout from "../components/Layout";

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </Layout>
    </>
  );
}
