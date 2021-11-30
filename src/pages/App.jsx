import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./Exercise6";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="exercise-1" element={<Exercise1 />} />
        <Route path="exercise-2" element={<Exercise2 />} />
        <Route path="exercise-3" element={<Exercise3 />} />
        <Route path="exercise-4" element={<Exercise4 />} />
        <Route path="dummy-blog" element={<Exercise5 />} />
        <Route path="smart-blog" element={<Exercise6 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
