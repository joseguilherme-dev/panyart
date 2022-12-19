/* React Router */
import { Link, Outlet } from "react-router-dom";

/* Custom Images */
import profilePicture from "./assets/profilePicture.png";

/* Animated Routes */
import { motion } from "framer-motion";

/* Assets */
import heart from "../../assets/img/heart.png";

export default function Prices() {
  return (
    <motion.main
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="prices-section"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 text-center">
            <h4 className="my-5">
              <strong className="stroked-title">
                Prices!
                <img className="ms-3" src={heart} width="50px" />
              </strong>
            </h4>
            <img
              src={profilePicture}
              className="profile-picture img-thumbnail"
              alt=""
            />
          </div>
        </div>
        <div className="row justify-content-center patrick-hand">
          <div className="col-8 col-md-6 color_third text-center py-5">
            <p>
              Check out the prices of my <u>artwork</u>!
              <br />
              <br />
              * All images shown here are not in full quality! <br />
              <small>
                (otherwise the website would renderize itself very slowly! ;P)
              </small>
            </p>
          </div>
        </div>

        <div className="row pb-5 mb-5">
          <div className="col-12 text-center">
            <Link
              to="illustrations"
              className="my-3 btn btn-danger hvr-wobble-top btn-lg btn-custom_1 px-5 me-3"
            >
              Illustrations
            </Link>
            <Link
              to="refsheets"
              className="btn btn-danger hvr-wobble-top btn-lg btn-custom_1 px-5 me-3"
            >
              RefSheets
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center color_third patrick-hand">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
