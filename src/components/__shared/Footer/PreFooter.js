import React from "react";

/* Assets */
import panyartFurryGif from "./assets/img/panyart_furry.gif";
import heart from "../../../assets/img/heart.png";

function PreFooter() {
  return (
    <section
      className="container-fluid bg-custom-white py-5 mt-5 mb-5"
      id="prefooter"
    >
      <div className="overlay"></div>
      <div className="content">
        <div className="row pt-2 align-items-center justify-content-center">
          <div
            className="col-md-3 text-center text-md-end color_secondary"
            id="credits"
          >
            <img src={panyartFurryGif} className="img-fluid panyart_gif" />
            <br />
            <div className="pe-md-4">
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
              <br />
            </div>
          </div>
          <div className="col-md-5 ps-md-5 text-center my-4 text-md-start introduction">
            <h3>
              <strong className="stroked-title">
                Hey, thanks for coming!
                <img className="ms-3" src={heart} width="50px" />
              </strong>
            </h3>
            <p class="color_third">
              I'm a full-time furry artist working on refsheets and
              ilustrations!
              <br />
              Wanna taste some fresh pieces from the <strong>art oven</strong>?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreFooter;
