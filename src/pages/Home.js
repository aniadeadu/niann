import { useCallback, useEffect, useRef, useState } from "react";
import niann_women from "../assets/images/niann_women.webp";
import niannZ from "../assets/images/niannZ.jpg";
// import zara_men from '../assets/images/zara_men.webp';
import niann_man from "../assets/images/niann_man.jpg";
import niann_men from "../assets/images/niann_men.webp";
// import zara_men0 from '../assets/images/zara_men0.jpeg';
import { HeroUI } from "../components/home/HeroUI";
import { NavUI } from "../components/home/NavUI";
import arrow_backw from "../assets/svgs/arrowbackw.svg";
import arrow_forward from "../assets/svgs/arrow_forward.svg";

export const Home = () => {
  const timerRef = useRef(null);
  // index of the images
  const [currentIndex, setcurrentIndex] = useState(0);

  // background images
  const images = [niannZ, niann_men];

  // back arrow  for changing  background images
  const back = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  // forward arrow for changing background images
  const forward = useCallback(() => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  }, [currentIndex, images]);

  // timer for changing images
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      forward();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [forward]);

  const Images = (index) => {
    return (
      <img
        src={images[index]}
        // alt='Two women in a black and white outfit posing'
        className=" object-cover w-screen flex-1 h-screen  object-center "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,.88), rgba(0,0,0,.9))",
        }}
      />
    );
  };

  const style = () => ({
    transform: `translateX(${-currentIndex * 100}vw)`,
    transition: "transform ease 0.3s",
  });

  console.log(currentIndex);
  return (
    <div className="    w-full overflow-x-hidden overflow-y-hidden ">
      <main className="relative w-full  ">
        <>
          <div
            className="flex flex-1  w-[200%] overflow-x-hidden overflow-y-hidden absolute transition-all bg-black h-screen -z-10"
            style={style()}
          >
            {images.map((_, index) => (
              <div className="basis-[100%] flex-1">{Images(index)}</div>
            ))}
          </div>

          <div onClick={() => back()}>
            <img
              src={arrow_backw}
              className="w-5 cursor-pointer absolute top-[50%] left-[8%]"
            />
          </div>
          <div onClick={() => forward()}>
            <img
              src={arrow_forward}
              className="w-5 cursor-pointer absolute top-[50%] right-[8%]"
            />
          </div>
        </>

        <section>
          <header className="w-full h-full">
            <NavUI />
          </header>

          <section>
            <HeroUI
              setcurrentIndex={setcurrentIndex}
              currentIndex={currentIndex}
            />
          </section>
        </section>
      </main>
    </div>
  );
};
