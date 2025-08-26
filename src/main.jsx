import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.scss";
import App from "./App.jsx";
import Movie from "./pages/Movie/Movie.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import Search from "./pages/Search/Search.jsx";
import Years from "./pages/Years/Years.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <div className="siteWrapper">
      <div className="overlay"></div>
      <Header />  
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/movies">
          <Route path=":movie" element={<Movie />} />
        </Route>

        <Route path="/categories">
          <Route path=":category" element={<Categories />} />
        </Route>

        <Route path="/years">
          <Route path=":year" element={<Years />} />
        </Route>

        <Route path="/search">
          <Route path=":title" element={<Search />} />
        </Route>

        <Route path="*" element={<p>error page 404</p>} />
      </Routes>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  </BrowserRouter>
  // </StrictMode>,
);
