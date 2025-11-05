import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
