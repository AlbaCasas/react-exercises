import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="exercise-1" element={<Exercise1 />} />
        <Route path="exercise-2" element={<Exercise2 />} />
        <Route path="exercise-3" element={<Exercise3 />} />
        <Route path="exercise-4" element={<Exercise4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
