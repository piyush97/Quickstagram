import React from "react";

const Post = ({ content }) => {
  return (
    <div className="rounded col-span-4 border bg-white mb-16">
      <pre>{JSON.stringify(content, null, 4)}</pre>
    </div>
  );
};

export default Post;
