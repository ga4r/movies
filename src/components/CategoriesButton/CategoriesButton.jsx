import React, { useState } from "react";
import { Link } from "react-router";
import './CategoriesButton.scss'

function CategoriesButton({genres, setBurgerMenuCondition}) {
  const [categoriesButtonState, setCategoriesButtonState] = useState(false);

  const handleCategoriesButton = () => {
    if (categoriesButtonState) {
      setCategoriesButtonState(false);
    } else setCategoriesButtonState(true);
  };
  
  const handleCategoryChanging = () => {
    setCategoriesButtonState(false)
    setBurgerMenuCondition(false);
    document.querySelector(".burgerMenuOpenBtn").style.display = "block";
  }

  return (
    <>
      <span onClick={handleCategoriesButton} className={categoriesButtonState ? 'categoriesBtnActive' : '' } >Categories</span>
      {categoriesButtonState && (
        <div className="categoriesContainer">
            { genres.split(',').map((genre, index) => 
                <Link onClick={handleCategoryChanging} key={index} to={`/categories/${genre}`}>{genre}</Link>
            ) }
        </div>
      )}
    </>
  );
}
export default CategoriesButton;

