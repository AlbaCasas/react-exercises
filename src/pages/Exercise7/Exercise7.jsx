import { useState } from "react/cjs/react.development";

const Exercise7 = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    if (inputValue !== "") {
      setPosts([...posts, inputValue]);
    }
  };
  return (
    <div>
      <form onSubmit={handlePostSubmit}>
        <input placeholder="Write the content"></input>
        <button>New post</button>
        {posts.map((posts) => {
          return <p>{posts}</p>;
        })}
      </form>
    </div>
  );
};

export default Exercise7;
