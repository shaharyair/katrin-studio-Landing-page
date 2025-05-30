import React from "react";
import "./BeforeAndAfter.css";
import daniel1 from "../../assets/BeforeAndAfter/Daniel/1.jpg";
import daniel2 from "../../assets/BeforeAndAfter/Daniel/2.jpg";
import noa1 from "../../assets/BeforeAndAfter/Noa/1.jpg";
import noa2 from "../../assets/BeforeAndAfter/Noa/2.jpg";
import limor1 from "../../assets/BeforeAndAfter/Limor/1.jpg";
import limor2 from "../../assets/BeforeAndAfter/Limor/2.jpg";
import revital1 from "../../assets/BeforeAndAfter/Revital/1.jpg";
import revital2 from "../../assets/BeforeAndAfter/Revital/2.jpg";

const BeforeAndAfter = () => {
  const images = [
    { url: daniel1 },
    { url: daniel2 },
    { url: noa1 },
    { url: noa2 },
    { url: limor1 },
    { url: limor2 },
    { url: revital1 },
    { url: revital2 },
  ];

  return (
    <div className='gallery-box' id='beforeandafter'>
      <div className='gallery-head'>
        <h1>לפני ואחרי</h1>
        <h2>מההתחלה עד הסוף - סיפורי הצלחה של מתאמנות</h2>
      </div>
      <div className='gallery-container'>
        {images.map((img, i) => (
          <img src={img.url} key={i} alt={img.url} />
        ))}
      </div>
    </div>
  );
};

export default BeforeAndAfter;
