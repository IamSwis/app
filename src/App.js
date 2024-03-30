import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog></Catalog>

      <About></About>

      <Footer></Footer>
      {/* Here*/}
    </div>
  );
}

export default App;
