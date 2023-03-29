import React from "react";
import "./Execrises.css";

function Execrises() {
  return (
    <>
      <div className='execrises'>
        <div className='execrises__container'>
          <div className='exercises__item item1'>
            <img src='/src/assets/yogagirl.png' alt='/' />
            <h1>Trx</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              fuga.
            </p>
          </div>
          <div className='exercises__item item2'>
            <img src='/src/assets/yogagirl.png' alt='/' />
            <h1>פונקציונאלי</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.
            </p>
          </div>
          <div className='exercises__item item3'>
            <img src='/src/assets/yogagirl.png' alt='/' />
            <h1>שרירי ליבה</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              illo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Execrises;
