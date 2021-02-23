import React from "react";
import Footer from "./footer";
import Image from "./image";

const Post = ({ content }) => {
  return (
    <div className="rounded col-span-4 border bg-white mb-16">
      <Image src={content.imageSrc} caption={content.caption} />
      <Footer username={content.username} caption={content.caption} />
    </div>
  );
};

export default Post;
