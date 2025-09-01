import React from "react";
import "./Studios.scss";
import studio1 from "../../img/studios/disney.png";
import studio2 from "../../img/studios/marvel.png";
import studio3 from "../../img/studios/dc.png";
import studio4 from "../../img/studios/starwars.png";

function Studios() {
  const studios = [
    {
      img: studio1,
      link: "https://www.imdb.com/search/title/?companies=disney",
    },
    {
      img: studio2,
      link: "https://www.imdb.com/search/title/?companies=co0051941",
    },
    {
      img: studio3,
      link: "https://www.imdb.com/search/title/?companies=co0123927",
    },
    {
      img: studio4,
      link: "https://www.imdb.com/find/?s=tt&q=star%20wars",
    },
  ];

  return (
    <div className="studiosWrapper">
      <div className="studios">
        {studios.map((studio, index) => (
          <div className="studio" key={index}>
            <a href={studio.link} target="_blank" rel="noopener noreferrer">
              <img src={studio.img} alt={`Studio ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Studios;
