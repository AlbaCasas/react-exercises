import { useState } from "react";

const Exercise4 = () => {
  const [text, setText] = useState();
  return (
    <div>
      <button onClick={() => setText("Yes was clicked")}>Yes</button>
      <button onClick={() => setText("No was clicked")}>No</button>
      <p>{text}</p>
    </div>
  );
};

export default Exercise4;
