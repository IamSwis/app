import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import ShoppingList from "./pages/ShoppingList";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/About" element={<About />} />
          <Route path="/ShoppingList" element={<ShoppingList />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
