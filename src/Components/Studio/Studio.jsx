import React from "react";
import "./Studio.css";

function Studio() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal-anim");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 25;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active-anim");
      } else {
        reveals[i].classList.remove("active-anim");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load

  return (
    <>
      <div className='studio' id='studio'>
        <div className='studio__container'>
          <div className='studio__text-container reveal-anim fade-bottom'>
            <h1>הסטודיו</h1>
            <p>
              פילאטיס היא צורת פעילות גופנית שפותחה בתחילת המאה ה-20 על ידי
              ג'וזף פילאטיס. המטרה של צורת פעילות גופנית זו היא להתמקד בליבת
              הגוף, הכוללת את השרירים העמוקים המייצבים ותומכים בעמוד השדרה. קרן
              פילאטיס
            </p>
            <p>
              ויוגה הינו סטודיו בוטיק פופולרי בעיר עפולה שאליו נשים יכולות ללכת
              ללמוד עוד על צורת פעילות גופנית זו בקבוצות קטנות. בסטודיו מערך
              מגוון של שיעורים לכל הרמות, מה שמקל על המתאמנות לתזמן את זמנם לפי
              לוח הזמנים של קרן פילאטיס. השיעורים בסטודיו שלנו מתאימים לנשים
              שרוצות
            </p>
          </div>
          <img
            src='/src/assets/gymexample.jpg'
            alt=''
            className='reveal-anim fade-bottom'
          />
        </div>
      </div>
    </>
  );
}

export default Studio;
