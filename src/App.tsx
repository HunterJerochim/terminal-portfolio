import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects/Projects";
import Work from "./views/Work/Work";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

export default App;
