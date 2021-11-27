import { useState } from "react";

const Exercise3 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <p>Likes: {count}</p>
    </div>
  );
};

export default Exercise3;
