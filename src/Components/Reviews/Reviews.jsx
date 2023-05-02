import React from "react";
import "./Reviews.css";
import Carousel from "../Carousel/Carousel";

function Reviews() {
  return (
    <>
      <div className='reviews-box' id='reviews'>
        <div className='reviews-container'>
          <div className='reviews-container-text'>
            <h1>הכי גאה בהן!</h1>
            <h2>המתאמנות שלי משוויצות בתוצאות</h2>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Reviews;
