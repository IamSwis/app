import { useState } from "react";
import "./About.css";

function About() {
  const [contactVisible, setContactVisible] = useState(false);

  function showData() {
    console.log("button clicked");
    setContactVisible(!contactVisible);
  }

  return (
    <div className="about page">
      <h3>William Sims</h3>

      {contactVisible ? (
        <div className="box">
          <p>
            To get in touch with our team write to <b>contact@LTspace.io</b>
          </p>
        </div>
      ) : null}

      <button onClick={showData} className="btn btn-outline-dark">
        Lets Connect
      </button>
    </div>
  );
}
export default About;
