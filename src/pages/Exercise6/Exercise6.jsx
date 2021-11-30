import { useState } from "react";

const Excercise6 = (props) => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    if (inputValue !== "") {
      setPosts([...posts, inputValue]);
    }
  };
  return (
    <form onSubmit={handlePostSubmit}>
      <input placeholder="Write the content" />
      <button>New post</button>
      {posts.map((post) => {
        return <p>{post}</p>;
      })}
    </form>
  );
};

export default Excercise6;
