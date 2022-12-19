/* Animated Routes */
import { motion } from "framer-motion";

export default function Queue() {
  return (
    <motion.main
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 py-md-5 text-center color_third patrick-hand">
            <h4>
              You can always visit my <strong>queue</strong> in order to check
              some examples of my artworks and also it's current status.
              <br />
              <br />
              It's organized on a beautiful <u>Trello</u> template!
              <br />
              <br />
            </h4>
            <a
              className="btn btn-danger hvr-wobble-top btn-lg btn-custom_1 px-3 me-3"
              href="https://trello.com/b/YdEpOgiH/pan-yart-queue"
              target="_blank"
            >
              Click here to visit!
            </a>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
