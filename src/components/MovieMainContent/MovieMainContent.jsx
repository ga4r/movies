import React, { useEffect, useLayoutEffect, useState } from "react";
import MovieStat from "../../components/MovieStat/MovieStat";
import PlayNowButton from "../../components/playNowButton/PlayNowButton";
import "./MovieMainContent.scss";

function MovieMainContent({
  isTrailerShown,
  currentMovie,
  showTrailer,
  cancelTrailer,
  trailer,
}) {
  const [mobileVersion, setMobileVersion] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobileVersion(window.innerWidth < 980);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [isTrailerShown]);

  return (
    <div className="movieMainContent">
      {!mobileVersion ? (
        <div className="movieMainContentWide">
          <div className="moviePoster">
            <img src={currentMovie.Poster} alt="" />
            <button onClick={showTrailer} className="moviePlayButton">
              <svg
                width="112"
                height="112"
                viewBox="0 0 112 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_86_304)">
                  <g filter="url(#filter0_d_86_304)">
                    <path
                      d="M44.3335 77L77.0002 56L44.3335 35V77ZM56.0002 102.667C49.5446 102.667 43.4779 101.441 37.8002 98.9893C32.1224 96.5378 27.1835 93.2136 22.9835 89.0167C18.7835 84.8167 15.4593 79.8778 13.0108 74.2C10.5624 68.5222 9.33661 62.4556 9.3335 56C9.3335 49.5444 10.5593 43.4778 13.0108 37.8C15.4624 32.1222 18.7866 27.1833 22.9835 22.9833C27.1835 18.7833 32.1224 15.4591 37.8002 13.0107C43.4779 10.5622 49.5446 9.33645 56.0002 9.33334C62.4557 9.33334 68.5224 10.5591 74.2002 13.0107C79.8779 15.4622 84.8168 18.7864 89.0168 22.9833C93.2168 27.1833 96.5426 32.1222 98.9942 37.8C101.446 43.4778 102.67 49.5444 102.667 56C102.667 62.4556 101.441 68.5222 98.9895 74.2C96.5379 79.8778 93.2137 84.8167 89.0168 89.0167C84.8168 93.2167 79.8779 96.5424 74.2002 98.994C68.5224 101.446 62.4557 102.67 56.0002 102.667ZM56.0002 93.3333C66.4224 93.3333 75.2502 89.7167 82.4835 82.4833C89.7168 75.25 93.3335 66.4222 93.3335 56C93.3335 45.5778 89.7168 36.75 82.4835 29.5167C75.2502 22.2833 66.4224 18.6667 56.0002 18.6667C45.5779 18.6667 36.7502 22.2833 29.5168 29.5167C22.2835 36.75 18.6668 45.5778 18.6668 56C18.6668 66.4222 22.2835 75.25 29.5168 82.4833C36.7502 89.7167 45.5779 93.3333 56.0002 93.3333Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_86_304"
                    x="9.3335"
                    y="9.33334"
                    width="105.333"
                    height="101.333"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="8" dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_86_304"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_86_304"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_86_304">
                    <rect width="112" height="112" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          {isTrailerShown
            ? trailer && (
                <div className="trailer">
                  <p>Loading...</p>
                  <span className="trailerCancel" onClick={cancelTrailer}>
                    ✖
                  </span>
                  <iframe
                    //  { window.innerWidth < 1000 ? width='600' : width="840" }
                    width="840"
                    height="472.5"
                    src={trailer}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  <div className="trailerCancel"></div>
                </div>
              )
            : null}
          <div className="movieInfo">
            <div className="movieTitle">{currentMovie.Title}</div>
            <MovieStat
              genre={currentMovie.Genre}
              time={currentMovie.Runtime}
              date={currentMovie.Year}
            />
            <div className="movieResponse">
              <div className="share">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.4757 31.8739C34.0008 31.8739 32.6812 32.4561 31.672 33.3682L17.8351 25.3144C17.9321 24.868 18.0097 24.4217 18.0097 23.9559C18.0097 23.4902 17.9321 23.0438 17.8351 22.5975L31.5168 14.6213C32.5647 15.5917 33.9426 16.1933 35.4757 16.1933C38.6972 16.1933 41.2977 13.5928 41.2977 10.3713C41.2977 7.14976 38.6972 4.54927 35.4757 4.54927C32.2542 4.54927 29.6537 7.14976 29.6537 10.3713C29.6537 10.837 29.7313 11.2834 29.8284 11.7297L16.1467 19.7059C15.0987 18.7355 13.7208 18.1339 12.1877 18.1339C8.96622 18.1339 6.36572 20.7344 6.36572 23.9559C6.36572 27.1774 8.96622 29.7779 12.1877 29.7779C13.7208 29.7779 15.0987 29.1763 16.1467 28.206L29.9642 36.2792C29.8672 36.6867 29.809 37.1137 29.809 37.5406C29.809 40.6651 32.3512 43.2073 35.4757 43.2073C38.6002 43.2073 41.1425 40.6651 41.1425 37.5406C41.1425 34.4161 38.6002 31.8739 35.4757 31.8739Z"
                    fill="white"
                  />
                </svg>
                <span>Share</span>
              </div>
              <div className="rating">
                <span className="appeal">Rate The Show</span>
                <span className="rank">
                  <svg
                    width="33"
                    height="31"
                    viewBox="0 0 33 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4658 0.456238L20.2327 12.0494H32.4225L22.5607 19.2144L26.3276 30.8076L16.4658 23.6427L6.60406 30.8076L10.3709 19.2144L0.509154 12.0494H12.699L16.4658 0.456238Z"
                      fill="white"
                    />
                  </svg>
                  {currentMovie?.Ratings?.[0]?.Value ?? <p>has no rating</p>}
                </span>
              </div>
              <PlayNowButton onClick={showTrailer} />
            </div>
            <div className="movieText">
              <div className="movieDescr">{currentMovie.Plot}</div>
              <div className="movieReleased">
                <span>Released:</span> {currentMovie.Released}
              </div>
              <div className="movieDirector">
                {currentMovie.Director !== "N/A" && (
                  <>
                    <span>Director:</span> {currentMovie.Director}
                  </>
                )}
              </div>
              <div className="movieAwards">
                <span>Awards:</span> {currentMovie.Awards}
              </div>
              <div className="movieCountry">
                <span>Country:</span>
                {currentMovie.Country}
              </div>
              <div className="movieBoxOffice">
                {currentMovie.BoxOffice !== "N/A" && currentMovie.BoxOffice && (
                  <>
                    <span>BoxOffice:</span> {currentMovie.BoxOffice}{" "}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="movieMainContentMoblie">
          <div className="movieHeader">
            <div className="movieTitle">{currentMovie.Title}</div>

            <div className="moviePoster">
              <img src={currentMovie.Poster} alt="" />
              <button onClick={showTrailer} className="moviePlayButton">
                <svg
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_86_304)">
                    <g filter="url(#filter0_d_86_304)">
                      <path
                        d="M44.3335 77L77.0002 56L44.3335 35V77ZM56.0002 102.667C49.5446 102.667 43.4779 101.441 37.8002 98.9893C32.1224 96.5378 27.1835 93.2136 22.9835 89.0167C18.7835 84.8167 15.4593 79.8778 13.0108 74.2C10.5624 68.5222 9.33661 62.4556 9.3335 56C9.3335 49.5444 10.5593 43.4778 13.0108 37.8C15.4624 32.1222 18.7866 27.1833 22.9835 22.9833C27.1835 18.7833 32.1224 15.4591 37.8002 13.0107C43.4779 10.5622 49.5446 9.33645 56.0002 9.33334C62.4557 9.33334 68.5224 10.5591 74.2002 13.0107C79.8779 15.4622 84.8168 18.7864 89.0168 22.9833C93.2168 27.1833 96.5426 32.1222 98.9942 37.8C101.446 43.4778 102.67 49.5444 102.667 56C102.667 62.4556 101.441 68.5222 98.9895 74.2C96.5379 79.8778 93.2137 84.8167 89.0168 89.0167C84.8168 93.2167 79.8779 96.5424 74.2002 98.994C68.5224 101.446 62.4557 102.67 56.0002 102.667ZM56.0002 93.3333C66.4224 93.3333 75.2502 89.7167 82.4835 82.4833C89.7168 75.25 93.3335 66.4222 93.3335 56C93.3335 45.5778 89.7168 36.75 82.4835 29.5167C75.2502 22.2833 66.4224 18.6667 56.0002 18.6667C45.5779 18.6667 36.7502 22.2833 29.5168 29.5167C22.2835 36.75 18.6668 45.5778 18.6668 56C18.6668 66.4222 22.2835 75.25 29.5168 82.4833C36.7502 89.7167 45.5779 93.3333 56.0002 93.3333Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_86_304"
                      x="9.3335"
                      y="9.33334"
                      width="105.333"
                      height="101.333"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="8" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.44 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_86_304"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_86_304"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_86_304">
                      <rect width="112" height="112" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          {isTrailerShown
            ? trailer && (
                <div className="trailer">
                  <p>Loading...</p>
                  <span className="trailerCancel" onClick={cancelTrailer}>
                    ✖
                  </span>
                  <iframe
                     width={window.innerWidth <= 800 ? "380" : "600"}
                     height={window.innerWidth <= 800 ? "270" : "337.5"}

                    src={trailer}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  <div className="trailerCancel"></div>
                </div>
              )
            : null}
          <div className="movieInfo">
            <MovieStat
              genre={currentMovie.Genre}
              time={currentMovie.Runtime}
              date={currentMovie.Year}
            />
            <div className="movieResponseWrapper">
              <div className="movieResponse">
                <div className="share">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.4757 31.8739C34.0008 31.8739 32.6812 32.4561 31.672 33.3682L17.8351 25.3144C17.9321 24.868 18.0097 24.4217 18.0097 23.9559C18.0097 23.4902 17.9321 23.0438 17.8351 22.5975L31.5168 14.6213C32.5647 15.5917 33.9426 16.1933 35.4757 16.1933C38.6972 16.1933 41.2977 13.5928 41.2977 10.3713C41.2977 7.14976 38.6972 4.54927 35.4757 4.54927C32.2542 4.54927 29.6537 7.14976 29.6537 10.3713C29.6537 10.837 29.7313 11.2834 29.8284 11.7297L16.1467 19.7059C15.0987 18.7355 13.7208 18.1339 12.1877 18.1339C8.96622 18.1339 6.36572 20.7344 6.36572 23.9559C6.36572 27.1774 8.96622 29.7779 12.1877 29.7779C13.7208 29.7779 15.0987 29.1763 16.1467 28.206L29.9642 36.2792C29.8672 36.6867 29.809 37.1137 29.809 37.5406C29.809 40.6651 32.3512 43.2073 35.4757 43.2073C38.6002 43.2073 41.1425 40.6651 41.1425 37.5406C41.1425 34.4161 38.6002 31.8739 35.4757 31.8739Z"
                      fill="white"
                    />
                  </svg>
                  <span>Share</span>
                </div>
                <div className="rating">
                  <span className="appeal">Rate The Show</span>
                  <span className="rank">
                    <svg
                      width="33"
                      height="31"
                      viewBox="0 0 33 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.4658 0.456238L20.2327 12.0494H32.4225L22.5607 19.2144L26.3276 30.8076L16.4658 23.6427L6.60406 30.8076L10.3709 19.2144L0.509154 12.0494H12.699L16.4658 0.456238Z"
                        fill="white"
                      />
                    </svg>
                    {currentMovie?.Ratings?.[0]?.Value ?? <p>no rating</p>}
                  </span>
                </div>
                <PlayNowButton onClick={showTrailer} />
              </div>
            </div>
            <div className="movieText">
              <div className="movieDescr">{currentMovie.Plot}</div>
              <div className="movieReleased">
                <span>Released:</span> {currentMovie.Released}
              </div>
              <div className="movieDirector">
                {currentMovie.Director !== "N/A" && (
                  <>
                    <span>Director:</span> {currentMovie.Director}
                  </>
                )}
              </div>
              <div className="movieAwards">
                <span>Awards:</span> {currentMovie.Awards}
              </div>
              <div className="movieCountry">
                <span>Country:</span>
                {currentMovie.Country}
              </div>
              <div className="movieBoxOffice">
                {currentMovie.BoxOffice !== "N/A" && currentMovie.BoxOffice && (
                  <>
                    <span>BoxOffice:</span> {currentMovie.BoxOffice}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieMainContent;
