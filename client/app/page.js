"use client";
import Slider from "./components/Slider";
import Slide from "./components/Slide";
import { useEffect, useRef } from "react";

export default function Home() {
  const pauseScrollRef = useRef(false);
  const touchStartYRef = useRef(0);
  const translationRef = useRef(0);
  const activeSlideRef = useRef(1);
  const numberOfSlides = 4;
  const slideHeightInt = 80;

  useEffect(() => {
    const wheel = (e) => {
      if (!pauseScrollRef.current) {
        pauseScrollRef.current = true;

        //if scrolling down
        if (e.deltaY > 0 && activeSlideRef.current < numberOfSlides) {
          activeSlideRef.current++;
          translationRef.current -= slideHeightInt;
          sliderInner.style.transform = `translateY(${translationRef.current}vh)`;
        }
        //if scrolling up
        if (e.deltaY < 0 && activeSlideRef.current > 1) {
          activeSlideRef.current--;
          translationRef.current += slideHeightInt;
          sliderInner.style.transform = `translateY(${translationRef.current}vh)`;
        }

        setTimeout(() => {
          pauseScrollRef.current = false;
        }, 1500);
      }
    };

    const touchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const touchEnd = (e) => {
      const deltaY =
        Number(e.changedTouches[0].clientY) - Number(touchStartYRef.current);

      if (!pauseScrollRef.current) {
        pauseScrollRef.current = true;

        //if scrolling down
        if (deltaY > 0 && activeSlideRef.current < numberOfSlides) {
          activeSlideRef.current++;
          translationRef.current -= slideHeightInt;
          sliderInner.style.transform = `translateY(${translationRef.current}vh)`;
        }
        //if scrolling up
        if (deltaY < 0 && activeSlideRef.current > 1) {
          activeSlideRef.current--;
          translationRef.current += slideHeightInt;
          sliderInner.style.transform = `translateY(${translationRef.current}vh)`;
        }

        setTimeout(() => {
          pauseScrollRef.current = false;
        }, 1200);
      }
    };

    const keyDown = (e) => {
      if (!pauseScrollRef.current) {
        //if scrolling down
        if (e.keyCode === 40 && activeSlideRef.current < numberOfSlides) {
          activeSlideRef.current++;
          translationRef.current -= slideHeightInt;
          sliderInner.style.transform = `translateY(${translationRef.current}vh)`;
        }
        //if scrolling up
        if (e.keyCode == 38 && activeSlideRef.current > 1) {
          activeSlideRef.current--;
          translationRef.current += slideHeightInt;
          sliderInner.style.transform = `translateY(${translationRef.current}vh)`;
        }
      }
    };
    const sliderInner = document.getElementById("slider-inner");
    const sliderContainer = document.getElementById("slider-container");
    sliderContainer?.addEventListener("wheel", wheel);
    sliderContainer?.addEventListener("touchstart", touchStart);
    sliderContainer?.addEventListener("touchend", touchEnd);
    document.addEventListener("keydown", keyDown);
    return () => {
      sliderContainer?.removeEventListener("wheel", wheel);
      sliderContainer?.removeEventListener("touchstart", touchStart);
      sliderContainer?.removeEventListener("touchend", touchEnd);
      document.removeEventListener("keydown", keyDown);
    };
  }, []);
  return (
    <main className="main">
      <div className="center">
        {" "}
        <h1>Responsive Slider</h1>
        <Slider>
          <Slide slideNumber="one" />
          <Slide slideNumber="two" />
          <Slide slideNumber="three" />
          <Slide slideNumber="four" />
        </Slider>
      </div>
    </main>
  );
}
