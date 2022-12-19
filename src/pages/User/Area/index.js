import { useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Cookies from "universal-cookie";

// Axios
import axios from "axios";
import request from "../../../axios/request";

// Animated Routes
import { motion } from "framer-motion";

// Images
import panCoinsImg from "./assets/img/pancoins.png";

function Area() {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const cookies = new Cookies();

  async function checkIfUserIsLoggedIn() {
    console.log(cookies.get("jwt"));
    await request
      .get("/auth/personal", {
        headers: {
          authorization: cookies.get("jwt"),
        },
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      })
      .then((response) => {
        setUserInfo(response.data.personal);
      });
  }

  async function handleLogout(e) {
    e.preventDefault();
    cookies.remove("jwt", { path: "/" });
    navigate("/login");
  }

  useEffect(() => {
    (async () => {
      await checkIfUserIsLoggedIn();
    })();
  }, []);

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
              {" "}
              Hey, <strong>{userInfo.nickname}</strong>!
            </p>
            <small>
              {" "}
              <i>Your Pan Coins:</i>
            </small>
            <br />
            <div className="coins-box">
              <input
                className="text-center py-2 w-50"
                type="text"
                defaultValue={userInfo.coins}
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
                  data-toggle="modal"
                  data-target="#exampleModal"
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
