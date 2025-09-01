import { React, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Movie.scss";
// import MovieStat from "../../components/MovieStat/MovieStat";
// import PlayNowButton from "../../components/playNowButton/PlayNowButton";
import Main from "../../components/Main/Main";
import BackButton from "../../components/BackButton/BackButton";
import MovieMainContent from "../../components/MovieMainContent/MovieMainContent";

function Movie() {
  const { movie } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});
  const [trailer, setTrailer] = useState("");
  const [isTrailerShown, setIsTrailerShown] = useState(false);
  const fadeElement = document.querySelector(".overlay");
  const setFade = () => {
    fadeElement.classList.add("fade");
    document.body.style.overflow = "hidden";
  };
  const unSetFade = () => {
    fadeElement.classList.remove("fade");
    document.body.style.overflow = "";
  };
  const showTrailer = () => {
    trailer && setIsTrailerShown(true);
    trailer && setFade();
  };

  const cancelTrailer = () => {
    setIsTrailerShown(false);
    unSetFade();
  };

  const getMovies = async () => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${movie}&apikey=7038d12e`
      );
      setCurrentMovie(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const apiKey = "4761b031286e65b0eee74d759ee35b71";

  async function getTrailerByImdbId() {
    try {
      const trailerResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${apiKey}`
      );

      const trailer = trailerResponse.data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      if (trailer) {
        setTrailer(`https://www.youtube.com/embed/${trailer.key}`);
      }
    } catch (error) {
      console.error("Ошибка при запросе трейлера:", error);
    }
  }

  useEffect(() => {
    getMovies();
    getTrailerByImdbId();
  }, [movie]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [movie, isTrailerShown]);

  return (
    <div className="moviePage">
      <div className="contentWrapper">
        <div className="movieWrapper wrapper">
          <img src={currentMovie.Poster} className="movieScreenBanner" alt="" />
          <BackButton marginBottom={"0px"} />
          <MovieMainContent
            isTrailerShown={isTrailerShown}
            currentMovie={currentMovie}
            showTrailer={showTrailer}
            trailer={trailer}
            cancelTrailer={cancelTrailer}
          />
          <Main showBanner={false} />
        </div>
      </div>
    </div>
  );
}

export default Movie;
