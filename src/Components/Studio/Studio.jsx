import { React, useState } from "react";
import "./Studio.css";
import ScrollTrigger from "react-scroll-trigger";
import studioPng from "/src/assets/StudioPhotos/studio3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                בסטודיו מאוד חשוב לי ליצור אווירה תומכת ומקבלת שתרגיש לכן כמו
                הבית השני שלכן. כמאמנת אני מחויבת לעזור לכן להגיע ליעדים שהצבנו,
                בין אם אתן בכושר שיא או בתחילת התהליך אנחנו ניצור תוכנית שמותאם
                לך אישית שנוכל למקסם את הפוטנציאל שלך ולהגיע לגוף חלומותיך.
              </p>
              <p>
                אני מאמינה שכשיש לך מקום, חזון וליווי תוכלי להגשים כל דבר שרק
                תרצי. אני מזמינה אותך לקחת את הצעד הראשון לחיים בריאים ושמחים
                יותר.
              </p>
            </div>
            <LazyLoadImage src={studioPng} alt={studioPng} />
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Studio;
