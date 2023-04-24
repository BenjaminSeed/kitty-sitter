import "./App.css";
import CatOwnerForm from "./components/CatOwnerForm";
import CatSitterForm from "./components/CatSitterForm";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sitters" element={<CatSitterForm />} />
        <Route path="/owners" element={<CatOwnerForm />} />
      </Routes>
    </div>
  );
}

export default App;
