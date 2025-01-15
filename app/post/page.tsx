import Link from "next/link";
import React from "react";


export default function Post() {
  return (
    <>
      <div>post</div>
      <Link href="/post">Postingan</Link> <br />
      <Link href="/albums">Albums</Link>
    </>
  );
}
