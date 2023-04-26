import React from "react";
import "./BeforeAndAfter.css";

const BeforeAndAfter = () => {
  const images = [
    { url: "/src/assets/BeforeAndAfter/Daniel/1.jpg" },
    { url: "/src/assets/BeforeAndAfter/Daniel/2.jpg" },
    { url: "/src/assets/BeforeAndAfter/Noa/1.jpg" },
    { url: "/src/assets/BeforeAndAfter/Noa/3.jpg" },
    { url: "/src/assets/BeforeAndAfter/Limor/1.jpg" },
    { url: "/src/assets/BeforeAndAfter/Limor/2.jpg" },
    { url: "/src/assets/BeforeAndAfter/Daniel/1.jpg" },
    { url: "/src/assets/BeforeAndAfter/Daniel/2.jpg" },
  ];

  return (
    <div className='gallery-box' id='beforeandafter'>
      <div className='gallery-head'>
        <h1>לפני ואחרי</h1>
        <p>מההתחלה עד הסוף - סיפורי הצלחה של מתאמנות</p>
      </div>
      <div className='gallery-container'>
        {images.map((img, i) => (
          <img src={img.url} key={i} alt='/' />
        ))}
      </div>
    </div>
  );
};

export default BeforeAndAfter;
