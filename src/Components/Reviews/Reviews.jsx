import React from "react";
import "./Reviews.css";
import Carousel from "../Carousel/Carousel";

function Reviews() {
  return (
    <>
      <div className='reviews-box'>
        <div className='reviews-container'>
          <h1>מתאמנות מספרות</h1>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Reviews;
