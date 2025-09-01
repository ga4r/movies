import React from "react";
import "./PlayNowButton.scss";

function PlayNowButton({marginTop, onClick}) {
  
  return (
    <button className="playNowBtn" onClick={onClick} 
    style={{marginTop: marginTop }}
    >
      <svg
        width="11"
        height="14"
        viewBox="0 0 11 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.525 13.025C1.19167 13.2417 0.854333 13.2543 0.513 13.063C0.171666 12.8717 0.000666667 12.5757 0 12.175V1.825C0 1.425 0.171 1.129 0.513 0.936998C0.855 0.744998 1.19233 0.757665 1.525 0.974998L9.675 6.15C9.975 6.35 10.125 6.63333 10.125 7C10.125 7.36667 9.975 7.65 9.675 7.85L1.525 13.025Z"
          fill="white"
        />
      </svg>
      {window.innerWidth <= 420 || window.innerWidth >= 581 ? 'Play now' : 'Play'}
      </button>
  );
}

export default PlayNowButton;
