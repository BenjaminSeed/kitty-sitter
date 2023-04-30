import "./App.css";
import CatOwnerForm from "./components/CatOwnerForm";
import CatSitterForm from "./components/CatSitterForm";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sitters" element={<CatSitterForm />} />
        <Route path="/owners" element={<CatOwnerForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/results/:name" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
