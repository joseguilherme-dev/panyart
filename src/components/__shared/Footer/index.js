import { useEffect } from "react";

/* Custom Components */
import SocialIcons from "./SocialIcons";

/* Assets */
import panyartFurryGif from "./assets/img/panyart_furry.gif";
import heart from "../../../assets/img/heart.png";
import panCoins from "../../../assets/img/pancoins.png";

import "./assets/styles.css";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="container-fluid mt-5 p-0">
      <div className="overlay"></div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={panyartFurryGif} className="img-fluid panyart_gif" />
            <br />
            <small>
              Art by{" "}
              <a
                target="_blank"
                className="color_secondary"
                href="https://twitter.com/Gosetsuki"
              >
                <u>
                  <strong>@gosetsuki</strong>
                </u>
              </a>
            </small>
            <br />
            <small>
              Animated by{" "}
              <a
                target="_blank"
                className="color_secondary"
                href="https://twitter.com/LightGemArt"
              >
                <u>
                  <strong>@lightgem</strong>
                </u>
              </a>
            </small>
          </div>
          <div className="d-none d-md-flex col-md-6 justify-content-center align-items-center">
            <div className="text-center color_third">
              <img
                src={panCoins}
                className="img-fluid mb-3 px-2 pancoin"
                width="100px"
              />
            </div>
          </div>
        </div>
        <div className="row pt-2 mt-3">
          <div className="col-md-6 text-center color_secondary">
            <div className="mt-5">
              <h3>
                <strong className="stroked-title">
                  Thanks for coming!
                  <img className="ms-3" src={heart} width="50px" />
                </strong>
              </h3>
              <p class="color_third">
                I'm a full-time furry artist working on refsheets and
                ilustrations!
                <br />
                Wanna taste some fresh pieces from the <strong>art oven</strong>
                ?
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-start introduction">
            <p className="color_third text-center mt-5">
              Interested in my artwork?
              <br />
              <strong>Contact me</strong> through my socials:
              <SocialIcons />
            </p>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-12 text-center" id="credits">
            <small>
              © PanYart | All rights reserved | Developed with ♡ by:{" "}
              <a
                className="text-dark"
                href="https://github.com/nova-script"
                target="_blank"
              >
                <u>@nova-script</u>
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
