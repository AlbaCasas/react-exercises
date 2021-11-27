import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise1 from "./Exercise1";
import Exercise3 from "./Exercise3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="exercise-1" element={<Exercise1 />} />
        <Route path="exercise-3" element={<Exercise3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
