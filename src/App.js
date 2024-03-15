import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1>Welcome to my online store!!!</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
