import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="contentWrapper">
      <div className="footerWrapper wrapper">
        <footer className="footer">
          <div className="footerInfo">
            <div className="footerText">
              <p>
                Kinoman HD is an online movie streaming platform that offers
                pirated content that is not released. It has a huge collection
                of latest movies and films that still not available on the
                market and YouTube. You can watch and download all contents free
                of costs, but they are illegal, so you have to take some
                precautions. It is not available in all countries so you can use
                VPN and choose a location with access to Kinoman HD. Here, we
                will discuss the Kinoman HD.
              </p>
            </div>
            <nav>
              <ul className="footerNav">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Vlog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Report broken links</a>
                </li>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
