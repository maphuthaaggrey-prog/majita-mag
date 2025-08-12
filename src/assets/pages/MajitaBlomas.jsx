import React from "react";
import bgImage from "../bgimages/cottonbro.jpg"; 


const MajitaBlomas = () => {
  return (

    <div
    className="blomas-container"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
  
      <div className="blomas-content">
        <h1>Majita Blomas (Coming Soon)</h1>
        <p>
          A podcast and interview series offering unfiltered, thought-provoking
          conversations with creators, leaders, and visionaries. From mental
          health to hustle culture. Majita Blomas explores it all, from a
          relatable, grounded lens.
        </p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "75%" }}></div>
        </div>
      </div>
    </div>

  );
};

export default MajitaBlomas;
