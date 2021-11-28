import { useState } from "react";

const Exercise5 = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          setPosts([...posts, "Hello I'm a post"]);
        }}
      >
        New post
      </button>
      {posts.map((post) => {
        return <p>{post}</p>;
      })}
    </div>
  );
};

export default Exercise5;
