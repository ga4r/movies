import React, { useState } from "react";
import { Link } from "react-router";
import "./YearsButton.scss";

function YearsButton({ years, setBurgerMenuCondition }) {
  const [yearButtonState, setYearsButtonState] = useState(false);

  const handleYearsButton = () => {
    if (yearButtonState) {
      setYearsButtonState(false);
    } else setYearsButtonState(true);
  };

  const handleYearChanging = () => {
    setYearsButtonState(false);
    setBurgerMenuCondition(false);
    document.querySelector(".burgerMenuOpenBtn").style.display = "block";
  };

  return (
    <>
      <span
        onClick={handleYearsButton}
        className={yearButtonState ? "yearsBtnActive" : ""}
      >
        Years
      </span>
      {yearButtonState && (
        <div className="yearContainer">
          {years.split(",").map((year, index) => (
            <Link
              onClick={handleYearChanging}
              key={index}
              to={`/years/${year}`}
            >
              {year}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default YearsButton;
