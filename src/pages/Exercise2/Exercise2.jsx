import { useState } from "react";

const Exercise2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>I have been clicked {count} times</p>
    </div>
  );
};

export default Exercise2;
