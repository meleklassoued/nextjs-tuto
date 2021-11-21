import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "../public/vercel.svg";
import alert from "../components/alert.module.css";
import cn from "classnames";

function Post() {
  const [state, setState] = useState(Boolean);
  const bhim = "aslema";
  return (
    <div>
      <Link href='/'>aslema edheya el post page </Link>
      <Image src={img} height={100} width={144} alt='vercel' />
      <button onClick={() => setState(!state)}>click here</button>
      <h1
        className={cn({
          [alert.success]: state === true,
          [alert.error]: state === false,
        })}>
        9oli ay shih wala ghalet
      </h1>
    </div>
  );
}

export default Post;
