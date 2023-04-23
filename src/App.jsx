import "./App.css";
import CatOwnerForm from "./components/CatOwnerForm";
import CatSitterForm from "./components/CatSitterForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CatSitterForm />
      <CatOwnerForm />
    </div>
  );
}

export default App;
