import { useState } from "react";

const list = [
  "dog",
  "cat",
  "horse",
  "parrot",
  "vulture",
  "lion",
  "snake",
  "pinguin",
  "ant",
  "canary",
  "elephant",
  "fish",
  "fly",
  "eagle",
];

const Exercise7 = () => {
  const [input, setInput] = useState();

  return (
    <div>
      <input
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></input>
      {list
        .filter((animal) => animal.includes(input))
        .map((filteredAnimal) => (
          <p>{filteredAnimal}</p>
        ))}
    </div>
  );
};

export default Exercise7;
