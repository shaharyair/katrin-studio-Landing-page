import React from "react";
import "./Reviews.css";
import Carousel from "../Carousel/Carousel";

function Reviews() {
  return (
    <>
      <div className='reviews-box'>
        <div className='reviews-container'>
          <div className='reviews-container-text'>
            <h1>מתאמנות מספרות</h1>
            <h2>תמיד כיף לשמוע לגבי תהליך של המתאמנות</h2>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Reviews;
