import React from "react";
import Link from "next/link";
import Image from "next/image";
import img from "../public/vercel.svg";

function Post() {
  return (
    <div>
      <Link href='/'>aslema edheya el post page </Link>
      <Image src={img} height={100} width={144} alt='vercel' />
    </div>
  );
}

export default Post;
