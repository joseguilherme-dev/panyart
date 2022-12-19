import { useEffect } from "react";

/* Assets */
import panyartCoverPartOne from "./assets/panyart_cover1.png";
import panyartCoverPartTwo from "./assets/panyart_cover2.png";

/* Animated Routes */
import { motion } from "framer-motion";

export default function Home() {
  // Scroll to top every time the page renders.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4 py-md-5 text-center">
            <img src={panyartCoverPartOne} className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 py-md-5 text-center">
            <img src={panyartCoverPartTwo} className="img-fluid" />
          </div>
        </div>
      </div>
    </motion.main>
  );
}
