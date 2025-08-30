import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Header.scss";
import HeaderWide from "../HeaderWide/HeaderWide";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const genres = localStorage.getItem("genres");
  const years = localStorage.getItem("years");
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setBurgerMenu(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="headerWrapper">
      <div className="header">
        <div className="headerLogo">
          <Link to="/">Kinoman HD</Link>
        </div>
        {burgerMenu ? <BurgerMenu setBurgerMenu={setBurgerMenu} /> : <HeaderWide />}
      </div>
    </header>
  );
};

export default Header;
