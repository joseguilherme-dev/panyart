import { useEffect } from "react";

/* Animated Routes */
import { motion } from "framer-motion";

/* Custom Components */
import Nsfw from "./nsfw.js";

/* Assets */
import refsheets from "./assets/js/refsheets.js";

function renderRefsheets() {
  function renderRefsheetImages(images, imageCol) {
    const imageClasses = ["text-center", "text-start", "text-center"];

    return images.map((image, index) => {
      return (
        <div className={`col-12 ${imageCol} py-2 ${imageClasses[index]}`}>
          <img src={image} className="img-fluid" width="80%" alt="" />
        </div>
      );
    });
  }

  return refsheets.map((refsheet) => {
    return (
      <div>
        <div className="row justify-content-center align-items-center">
          {renderRefsheetImages(refsheet.images, refsheet.imageCol)}
        </div>
        <h4 className="my-5 pb-5">
          <strong className="mb-5 pb-5">{refsheet.title}</strong>
        </h4>
      </div>
    );
  });
}

export default function RefSheets() {
  //useEffect(() => {
  //  window.scrollTo(0, 0);
  //}, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <hr />
      <div className="my-5">
        <h2>♥ REFSHEETS ♥ </h2>
      </div>

      {renderRefsheets()}

      <Nsfw />
    </motion.div>
  );
}
