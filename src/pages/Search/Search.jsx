import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import axios from "axios";
import "./Search.scss";
import BigMovie from "../../components/BigMovie/BigMovie";
import Pagination from "../../components/Pagination/Pagination";
import BackButton from "../../components/BackButton/BackButton";
import screenBannerPlaceholder from '../../img/screenBannerPlaceholder.jpg'

function Search() {
  const { title } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [moviesNum, setMoviesNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${title}&apikey=7038d12e&page=${page}&plot=full&type=movie`
      );
      setMovies(res.data.Search || []);
      setMoviesNum(res.data.totalResults || 0);
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [title, page]);

  useEffect(() => {
    setPage(searchParams.get("page") || 1);
  }, [searchParams]);

  useEffect(() => {
    setPage(1);
  }, [title]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [title, page]);

  const pagesNum = Math.ceil(moviesNum < 100 ? moviesNum / 10 : 10);

  return (
    <div className="searchPage">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="contentWrapper">
            {movies.length ? (
              <div className="searchWrapper wrapper">
                <img
                  src={
                    movies[0]?.Poster !== "N/A"
                      ? movies[0]?.Poster || movies[1]?.Poster|| movies[2]?.Poster|| movies[3]?.Poster
                      : screenBannerPlaceholder
                  }
                  className="searchScreenBanner"
                  alt=""
                />
                <BackButton marginBottom={"40px"} />
                <Pagination pagesNum={pagesNum} />
                <div className="bigMovies">
                  {movies?.map((movie) => (
                    <BigMovie
                      key={movie.imdbID}
                      movie={{
                        big_image: movie.Poster,
                        title: movie.Title,
                        imdbid: movie.imdbID,
                        year: movie.Year,
                        rating: movie.Type,
                      }}
                    />
                  ))}
                </div>
                <Pagination pagesNum={pagesNum} />
              </div>
            ) : (
              <div className="searchErrorWrapper wrapper">
                <img
                  src={
                    "https://images.wallpaperscraft.com/image/single/bright_background_light_50370_2560x1440.jpg"
                  }
                  className="searchErrorScreenBanner"
                  alt=""
                />
                <BackButton marginBottom={"40px"} />
                <div className="SearchError">
                  <div className="searchErrorText">
                    <p>Oops.. Something went wrong! </p>
                    <p>Try another movie name</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
