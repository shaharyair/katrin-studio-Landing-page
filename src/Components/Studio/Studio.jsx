import { React, useState } from "react";
import "./Studio.css";
import ScrollTrigger from "react-scroll-trigger";
import studioPng from "/src/assets/StudioPhotos/studio3.png";

function Studio() {
  const [isVisible, setIsVisible] = useState(false);

  const handleEnter = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div className='studio' id='studio'>
        <ScrollTrigger onEnter={handleEnter}>
          <div
            className={`studio__container ${
              isVisible ? "studio-fade-bottom" : ""
            }`}
          >
            <div className='studio__text-container'>
              <h1>הסטודיו</h1>
              <p>
                פילאטיס היא צורת פעילות גופנית שפותחה בתחילת המאה ה-20 על ידי
                ג'וזף פילאטיס. המטרה של צורת פעילות גופנית זו היא להתמקד בליבת
                הגוף, הכוללת את השרירים העמוקים המייצבים ותומכים בעמוד השדרה.
                קרן פילאטיס
              </p>
              <p>
                ויוגה הינו סטודיו בוטיק פופולרי בעיר עפולה שאליו נשים יכולות
                ללכת ללמוד עוד על צורת פעילות גופנית זו בקבוצות קטנות. בסטודיו
                מערך מגוון של שיעורים לכל הרמות, מה שמקל על המתאמנות לתזמן את
                זמנם לפי לוח הזמנים של קרן פילאטיס. השיעורים בסטודיו שלנו
                מתאימים לנשים שרוצות
              </p>
            </div>
            <img src={studioPng} alt='' />
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Studio;
