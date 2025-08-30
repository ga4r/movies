import React, { useEffect, useState } from "react";
import bgImage from "../../img/mbg.jpg";
import "./Main.scss";
import axios, { all } from "axios";
import allMovies from "./db.json"; //delete kodga fench
import Slider from "../Slider/Slider";
import BigMovie from "../BigMovie/BigMovie";
import Studios from "../Studios/Studios";

function Main({ showBanner }) {
  const [movies, setMovies] = useState(allMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [type, setType] = useState("all");

  // const getMovies = async () => {
  //   try {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  //       headers: {
  //         'x-rapidapi-key': '0734eb07d6mshb4ccf34c971ba9fp1beb4cjsn3922e6b7e59b',
  //         'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  //       }
  //     };

  //     const res = await axios.request(options);
  //     const allMovies = res.data;
  //     setMovies(allMovies);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  // const filterMovies = (genre) => movies.filter((movie) => movie.genre.includes(genre));

  const handleFiltering = (genre) => {
    if (genre === "all") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter((movie) => movie.genre.includes(genre)));
    }
    setType(genre);
  };

  const genres = movies.map((movie) => movie.genre);
  const setGenres = new Set(genres.flat());
  const genresArray = [...setGenres];
  localStorage.setItem("genres", genresArray);

  const years = movies.map((movie) => movie.year);
  const setYears = new Set(years.flat());
  const yearsArray = [...setYears];
  yearsArray.sort().reverse()
  localStorage.setItem("years", yearsArray);

  return (
    <div className="mainWrapper wrapper">
      <img
        src={bgImage}
        className="mainScreenBanner"
        style={!showBanner ? { display: "none" } : {}}
        alt=""/>
      <main className="main" id="main">
        <div className="mainInfo">
          <div className="mainDescr">
            <div className="mainFirstText">Online streaming</div>
            <div className="mainSecondText">Best Movies</div>
          </div>
          <div className="mainContentBtn">
            <button
              className={`${type === "all" ? "active" : ""}`}
              onClick={() => handleFiltering("all")}
            >
              All Movies
            </button>

            {genresArray.map((genre, index) => (
              <button
                key={index}
                className={`${type === genre ? "active" : ""}`}
                onClick={() => handleFiltering(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        <div className="mainContent">
          <div className="bigMovies">
            {filteredMovies.slice(0, 4).map((movie, index) => (
              <BigMovie key={index} movie={movie} />
            ))}
          </div>
        </div>
        <Slider movies={filteredMovies} />
        <Studios />
        <Slider movies={filteredMovies} />
      </main>
    </div>
  );
}

export default Main;
