import { useState } from "react";

const INPUT_NAME = "postInput";
const Excercise6 = (props) => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[INPUT_NAME].value;
    if (inputValue !== "") {
      setPosts([...posts, inputValue]);
    }
  };
  return (
    <div>
      <form onSubmit={handlePostSubmit}>
        <input placeholder="Write the content" name={INPUT_NAME} />
        <button>New post</button>
      </form>
      {posts.map((post) => {
        return <p>{post}</p>;
      })}
    </div>
  );
};

export default Excercise6;
