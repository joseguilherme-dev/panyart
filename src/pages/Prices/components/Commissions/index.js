import { useEffect, useRef } from "react";

/* Animated Routes */
import { motion } from "framer-motion";

/* Custom Components */
import Nsfw from "./nsfw.js";

/* Assets */
import illustrations from "./assets/js/illustrations.js";

function renderIllustrations() {
  function renderIllustrationImages(images) {
    const imageClasses = ["text-start", "text-end", "text-center"];
    const oneImage = images.length === 1;

    return images.map((image, index) => {
      return (
        <div
          className={`col-12 ${oneImage ? "col-md-6" : "col-md-4"} py-2 ${
            imageClasses[index]
          }`}
        >
          <img src={image} className="img-thumbnail" width="100%" alt="" />
        </div>
      );
    });
  }

  return illustrations.map((illustration) => {
    return (
      <div>
        <div className="row justify-content-center align-items-center">
          {renderIllustrationImages(illustration.images)}
        </div>
        <h4 className="my-5 pb-5">
          <strong className="mb-5 pb-5">{illustration.title}</strong>
        </h4>
      </div>
    );
  });
}

function Commissions() {
  const reference = useRef();

  useEffect(() => {
    reference.current.scrollIntoView();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      ref={reference}
      className="pt-5"
    >
      <div className="my-5">
        <h2>♥ ILLUSTRATIONS ♥ </h2>
        <h5 className="mb-5">
          Here you can see examples and the prices of my art!
        </h5>
      </div>

      {renderIllustrations()}
      <Nsfw />
    </motion.div>
  );
}

export default Commissions;
