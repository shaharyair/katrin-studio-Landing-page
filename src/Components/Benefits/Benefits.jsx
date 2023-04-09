import React from "react";
import "./Benefits.css";
import Pic1 from "/src/assets/benefits1.jpg";
import Pic2 from "/src/assets/benefits2.jpg";
import Pic3 from "/src/assets/benefits4.jpg";
import Pic4 from "/src/assets/benefits3.jpg";

function Benefits() {
  return (
    <>
      <div className='benefits'>
        <div className='benefits-container'>
          <div className='benefit'>
            <img src={Pic1} alt='/' />
            <div className='benefits__text-container'>
              <h1 className='title'>ליווי אישי להצלחה</h1>
              <p className='content'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                repellendus?
              </p>
            </div>
          </div>
          <div className='benefit'>
            <img src={Pic2} alt='/' />
            <div className='benefits__text-container'>
              <h1 className='title'>ליווי אישי להצלחה</h1>
              <p className='content'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                repellendus?
              </p>
            </div>
          </div>
          <div className='benefit'>
            <img src={Pic3} alt='/' />
            <div className='benefits__text-container'>
              <h1 className='title'>ליווי אישי להצלחה</h1>
              <p className='content'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                repellendus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
