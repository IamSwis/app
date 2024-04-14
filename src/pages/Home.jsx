import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home page">
      <h1>Welcome to The Future of Phone Service</h1>

      <Link className="btn btn-primary btn-outline-success" to="/catalog">
        Service You Can Trust!{""}
      </Link>
    </div>
  );
}

export default Home;
