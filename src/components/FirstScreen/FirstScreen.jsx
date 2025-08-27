import React from "react";
import bgImage from "../../img/banner.jpg";
import MovieStat from "../MovieStat/MovieStat";
import "./FirstScreen.scss";
import PlayNowButton from "../playNowButton/PlayNowButton";
import { useNavigate } from "react-router";


function FirstScreen() {
  const navigate = useNavigate();
  const firstScreenMovieId = 'tt18412256';
  const showMoviePage = () => {
    navigate(`/movies/${firstScreenMovieId}`);
  }
  return (
    <div className="firstScreenWrapper wrapper">
      <img className="firstScreenBanner" src={bgImage} alt="" />
      <section className="contentContainer">
        <div className="firstScreen">
          <div className="firstScreenInfo">
            <div className="firstScreenSub">Kinoman HD</div>
            <div className="firstScreenDescr">
              Unlimited <span>Entertainment</span>, Movies, TVs shows, & More.
            </div>
            <MovieStat date={2024} time={"119"} genre={"Action, Horror"} />
            <PlayNowButton marginTop="50px" onClick={showMoviePage} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstScreen;
