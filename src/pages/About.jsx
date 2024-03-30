import { useState } from "react";
import "./About.css";

function About() {
  const [contactVisible, setContactVisible] = useState(false);

  function showData() {
    console.log("button clicked");
    setContactVisible(true);
  }
  return (
    <div className="about page">
      <h3>William Sims</h3>

      <div className="box">
        <p>
          To get in touch with our team write to <b>contact@LTspace.io</b>
        </p>

        <button className="btn btn-outline-dark">Lets Connect</button>
      </div>
    </div>
  );
}

export default About;
