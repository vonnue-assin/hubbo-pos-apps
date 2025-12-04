import { Route, Routes } from "react-router-dom";

import { Contact, ContactlessOrdering, PlansAndPrice } from "./pages";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContactlessOrdering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mypricing" element={<PlansAndPrice />} />
      </Routes>
    </div>
  );
};

export default App;
