import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "universal-cookie";

// Utils
import checkIfUserIsLoggedIn from "../_utils/checkIfUserIsLoggedIn";

// Animated Routes
import { motion } from "framer-motion";

// Assets
import panCoinsImg from "./assets/img/pancoins.png";

function Area() {
  // Core:
  const navigate = useNavigate();
  const cookies = new Cookies();

  // Component-specific data:
  const [userPersonalInformation, setUserPersonalInformation] = useState({});

  // Verify if the user is logged in before anything.
  useEffect(() => {
    (async () => {
      setUserPersonalInformation(await checkIfUserIsLoggedIn());
      /* If the user is trying to enter in an exclusive area for logged in users
      then the user must be redirected to login page.*/
      if (!userPersonalInformation) navigate("/login");
    })();
  }, []);

  // Component-specific fuctions:
  async function handleLogout(e) {
    e.preventDefault();
    cookies.remove("jwt", { path: "/" });
    navigate("/login");
  }

  return (
    <motion.main
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-5 mt-3 mb-1 color_third">
            <p>
              Hey, <strong>{userPersonalInformation.nickname}</strong>!
            </p>
            <small>
              <i>Your Pan Coins:</i>
            </small>
            <br />
            <div className="coins-box">
              <input
                className="text-center py-2 w-50"
                type="text"
                defaultValue={userPersonalInformation.coins}
                disabled
              />
              <img src={panCoinsImg} />
            </div>
            <hr className="mt-5"></hr>
            <div className="row mt-5">
              <div className="col-12 col-md-6 my-2">
                <Link
                  to="redeem"
                  className="btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3"
                >
                  Redeem Coins
                </Link>
              </div>
              <div className="col-12 col-md-6 my-2">
                <span
                  className="d-inline-block w-100"
                  tabindex="0"
                  data-toggle="tooltip"
                  title="In soon!"
                >
                  <button
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Tooltip on top"
                    className="btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3"
                    disabled
                  >
                    Buy on Store
                  </button>
                </span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-md-6 my-2">
                <Link
                  to="edit"
                  className="btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3"
                >
                  Edit Account
                </Link>
              </div>
              <div className="col-12 col-md-6 my-2">
                <Link
                  to="change_password"
                  className="btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3"
                  disabled
                >
                  Change Password
                </Link>
              </div>
            </div>

            <p className="mt-5">
              <button
                onClick={(e) => handleLogout(e)}
                className="color_third btn-clean"
              >
                <strong>
                  <u> Logout </u>
                </strong>
              </button>
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default Area;
