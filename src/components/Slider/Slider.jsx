import React, { useState, useEffect, useLayoutEffect, memo } from "react";
import TinySlider from "tiny-slider-react";
import { Link } from "react-router";

import "tiny-slider/dist/tiny-slider.css";
import "./Slider.scss";

function Slider({ movies }) {
  const [sliderMovies, setSliderMovies] = useState(movies);

  useEffect(() => {
    setSliderMovies(movies);
  }, [movies]);

  const settings = {
    items: 3,
    slideBy: 1,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    speed: 800,
    mouseDrag: true,
    nav: false,
    responsive: {

      1341: {
        items: 7, // На экранах > 1340 пикселей
      },
      791: {
        items: 5, // На экранах > 600 пикселей
      },
    },
  };
  

  return (
    <div className="wrapper sliderWrapper">
      <div className="slider">
        <TinySlider settings={settings}>
          {sliderMovies.slice(4).map((movie) => (
            <div
              className="carousel-item"
              key={movie.rank}
            >
              <Link preventScrollReset={true} to={`/movies/${movie.imdbid}`}>
                <img
                  src={movie.image}
                  // style={{ width: "200px", userSelect: "none" }}
                />
              </Link>
            </div>
          ))}
        </TinySlider>
      </div>
    </div>
  );
}

export default memo(Slider);
