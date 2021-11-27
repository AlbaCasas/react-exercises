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
      {content}
    </div>
  );
};

export default Exercise1;
