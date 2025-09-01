import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import allMovies from "../../components/Main/db.json"; //delete when fetching
import BigMovie from "../../components/BigMovie/BigMovie";
import BackButton from "../../components/BackButton/BackButton";
import "./Categories.scss";

function Categories() {
  const { category } = useParams();
  const [movies, setMovies] = useState(allMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  
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

  useEffect(() => {
    setFilteredMovies(movies.filter((movie) => movie.genre.includes(category)));
  }, [category]);

  return (
    <div className="categoriesPage">
      <div className="contentWrapper">
        <div className="categoriesWrapper wrapper">
        <img src={filteredMovies[0].big_image} className="categoryScreenBanner" alt="" />
        <BackButton marginBottom={'35px'}  />
          <p className="categoryName"> Selected category: <span>{category}</span> </p>
          <div className="bigMovies">
            {filteredMovies.map((movie) => (
              <>{<BigMovie movie={movie} key={movie.imdbid} />}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
