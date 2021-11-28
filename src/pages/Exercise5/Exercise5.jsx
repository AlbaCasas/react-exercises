import { useState } from "react";

const Exercise5 = () => {
  const [posts, setPosts] = useState([]);

  const handleButtonClick = () => {
    setPosts([...posts, "Hello I'm a post"]);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>New post</button>
      {posts.map((post) => {
        return <p>{post}</p>;
      })}
    </div>
  );
};

export default Exercise5;
