// MajitaLiveSessions.jsx
import React from "react";
import bgImage from "../bgimages/pexels-gpn-1820086864-28538956.jpg"; 

const MajitaLiveSessions = () => {
  return (
    <div
      className="blomas-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="blomas-content">
        <h1>Majita Live Sessions (Coming Soon)</h1>
        <p>
          Live, raw, and unplugged. We’re creating a stage for up-and-coming
          artists to perform in intimate, honest spaces. No filters, no
          gimmicks, just pure talent and story-driven performances.
        </p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "45%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default MajitaLiveSessions;
