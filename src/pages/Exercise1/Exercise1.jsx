import { useState } from "react";

const Exercise1 = () => {
  const [content, setContent] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </form>
      <p>{content}</p>
    </div>
  );
};

export default Exercise1;
