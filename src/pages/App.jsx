import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="exercise-1" element={<Exercise1 />} />
        <Route path="exercise-2" element={<Exercise2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
