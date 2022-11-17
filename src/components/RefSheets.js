import React, { Component } from "react";

import image01 from "../assets/img/prices/01.png";
import image02 from "../assets/img/prices/02.png";
import image03 from "../assets/img/prices/03.png";
import image04 from "../assets/img/prices/04.png";
import image05 from "../assets/img/prices/05.png";
import image06 from "../assets/img/prices/23.png";
import image07 from "../assets/img/prices/22.png";
import image08 from "../assets/img/prices/24.png";
import designImage from "../assets/img/prices/refsheet/design.png";

/* Animated Routes */
import { motion } from "framer-motion";

class RefSheets extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <h2>♥ REFSHEETS ♥ </h2>
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img src={designImage} className="img-fluid" width="50%" alt="" />
          </div>
        </div>
        <h4>
          <br />
          <strong>Custom Design/Redesign: +$20</strong>
          <br />
          <br />
          <br />
        </h4>

        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img src={image01} className="img-fluid" width="100%" alt="" />
          </div>
        </div>
        <h4>
          <br />
          <strong>Front View: $60</strong>
          <br />
          - Includes basic info, color palette and colored background.
          <br />
          <br />
          <strong>Back View: $30</strong>
          <br />
          <br />
          <br />
        </h4>

        <div className="row ps-3 justify-content-center">
          <div className="col-12 ms-5 ps-5 col-md-6">
            <img src={image06} className="img-fluid" width="50%" alt="" />
          </div>
        </div>

        <h4>
          <br />
          <strong>Side View: $30</strong>
          <br />
          <br />
          <br />
          <br />
        </h4>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img src={image02} className="img-fluid" width="50%" alt="" />
          </div>
        </div>

        <h4>
          <br />
          <strong>Extra View: $15</strong>
          <br />
          - With clothes, accessories, alternative hair style, etc.
          <br />
          <br />
          <br />
        </h4>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img src={image03} className="img-fluid" width="100%" alt="" />
          </div>
        </div>
        <h4>
          <br />
          <strong>Headshots: $10 (each)</strong>
          <br />
          - With different expressions, alternative hair style, etc.
          <br />
          <br />
          <br />
        </h4>
        <br />
        <br />
        <div className="row align-items-center justify-content-center">
          <div className="col-6 col-md-2">
            <img src={image07} className="img-fluid" width="100%" alt="" />
          </div>
          <div className="col-6 col-md-2">
            <img src={image08} className="img-fluid" width="100%" alt="" />
          </div>
        </div>
        <h4>
          <br />
          <strong>Close-up: $5 (each)</strong>
          <br />
          - Mouth, eyes, paws, etc.
          <br />
          <br />
          <br />
        </h4>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img src={image04} className="img-fluid" width="100%" alt="" />
          </div>
        </div>
        <h4>
          <br />
          <strong>Accessories / Small Objects: $5 (each)</strong>
          <br />
          <strong>Complex Objects: $10 (each) </strong>
          <br />
          <br />
          <br />
        </h4>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img src={image05} className="img-fluid" width="100%" alt="" />
          </div>
        </div>
        <h4>
          <br />
          <strong>Chibi: $20 (extra ones: $5)</strong>
          <br />
          - With clothes, accessories, alternative hair style, etc.
          <br />
          <br />
          <br />
        </h4>
        <h4>
          <br />
          <strong>NSFW Version: +$20 </strong>
          <br />
          - Make the front, back, side and extra views NSFW
          <br />
          (things such as close-up and headshots are <strong>+$5</strong>)
          <br />
          <br />
          <h4 className="text-danger">
            <strong> I DO NOT DO NSFW CHIBI!</strong>
          </h4>
          <br />
        </h4>
      </motion.div>
    );
  }
}

export default RefSheets;
