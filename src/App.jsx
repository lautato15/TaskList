import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:listId" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
