import React from "react";
import "./BigMovie.scss";
import { Link } from "react-router";

function BigMovie({ movie }) {
  return (
    <div className="bigMovie">
      <Link to={`/movies/${movie.imdbid}`}>
        <img
          src={
            movie.big_image === "N/A"
              ? "https://s3-ap-southeast-1.amazonaws.com/popcornsg/placeholder-movieimage.png"
              : movie.big_image
          }
          alt=""
          className="img"
        />
      </Link>
      <div className="info">
        <div className="title">
          <span>
            <Link to={`/movies/${movie.imdbid}`}>{movie.title}</Link>
          </span>
        </div>
        <div className="parametr">
          <div className="date">{movie.year}</div>
          <div className="rating">
            <span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                  fill="#CCFF00"
                />
              </svg>
              {movie.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigMovie;
