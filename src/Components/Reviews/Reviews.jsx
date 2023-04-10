import React from "react";
import "./Reviews.css";
import ImgSlider from "../ImgSlider/ImgSlider";

function Reviews() {
  return (
    <>
      <div className='reviews-box'>
        <h1>מתאמנות מספרות</h1>
        <ImgSlider className='reviews-imgslider' />
      </div>
    </>
  );
}

export default Reviews;
