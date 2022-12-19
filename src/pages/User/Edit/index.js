import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// Axios
import axios from "axios";
import { BASEURL } from "../../../App";

// Animated Routes
import { motion } from "framer-motion";

function Edit() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  // Fields
  const [nickname, setNickname] = useState("");
  const [discord, setDiscord] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [validForm, setValidForm] = useState(false);

  // Error treatment
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (nickname.length < 3) setValidForm(false);
    else setValidForm(true);
  }, [nickname, discord, twitter, facebook, instagram]);

  // Get current values
  async function getEditValue() {
    const url = BASEURL + "/auth/personal";
    const response = await axios
      .get(url, {
        headers: {
          authorization: cookies.get("jwt"),
        },
      })
      .catch((error) => {
        setError(true);
        if (error.response.status === 401) setErrorMsg(error.response.data.msg);
        else if (error.response.status === 400)
          setErrorMsg("Please, insert a valid code.");
        else if (error.response.status === 403) navigate("/login");
        else setErrorMsg("Server is currently unavailable");
      })
      .then((response) => {
        return response;
      });

    if (response) {
      const data = response.data.personal;
      setDiscord(data.discord);
      setTwitter(data.twitter);
      setFacebook(data.facebook);
      setInstagram(data.instagram);
      setNickname(data.nickname);
    }
  }

  useEffect(() => {
    (async () => await getEditValue())();
  }, []);

  // Perform redeem
  async function handleSubmit(e) {
    e.preventDefault();
    const url = BASEURL + "/auth/personal";
    const response = await axios
      .patch(
        url,
        { nickname, twitter, discord, instagram, facebook },
        {
          headers: {
            authorization: cookies.get("jwt"),
          },
        }
      )
      .catch((error) => {
        setError(true);
        setSuccess(false);
        setValidForm(false);
        if (error.response.status === 401)
          setErrorMsg("Nickname is not valid!");
        else if (error.response.status === 400)
          setErrorMsg("Nickname is not valid!");
        else if (error.response.status === 403) navigate("/login");
        else setErrorMsg("Server is currently unavailable");
      })
      .then((response) => {
        return response;
      });
    if (response) {
      setError(false);
      setValidForm(false);
      setSuccess(true);
      setSuccessMsg(response.data.success);
    }
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
          <div className="col-md-5 mt-3 mb-5 color_third">
            <Link to="/user" className="color_third">
              <small className="text-right color_third">
                <strong>
                  <u> &#8592; Return to user area</u>
                </strong>
              </small>
              <br />
            </Link>
            <hr className="mt-5"></hr>
            <div className="px-5 mt-5">
              {error ? (
                <div class="alert alert-danger" role="alert">
                  <strong>Ops!</strong> {errorMsg}
                </div>
              ) : (
                ""
              )}
              {success ? (
                <div class="alert alert-success" role="alert">
                  <strong>Yay!</strong> {successMsg}
                </div>
              ) : (
                ""
              )}
              <h3>
                <strong>Edit your account!</strong>
              </h3>
              <p className="mb-4">
                Edit your contact information and nickname ;)
              </p>
              <div className="row text-center">
                <div className="col-12 mb-4">
                  <small>
                    <strong>Nickname:</strong>
                  </small>
                  <input
                    type="text"
                    placeholder="Nickname"
                    onChange={(e) => setNickname(e.target.value)}
                    defaultValue={nickname}
                    className="py-1 text-center px-3 w-100"
                  ></input>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-6">
                  <small>
                    <strong>Discord:</strong>
                  </small>
                  <input
                    type="text"
                    placeholder="Discord"
                    onChange={(e) => setDiscord(e.target.value)}
                    defaultValue={discord}
                    className="py-1 text-center px-3 w-100"
                  ></input>
                  <small>Please, don't forget your #ID.</small>
                </div>
                <div className="col-6">
                  <small>
                    <strong>Twitter:</strong>
                  </small>
                  <input
                    type="text"
                    placeholder="Twitter"
                    onChange={(e) => setTwitter(e.target.value)}
                    defaultValue={twitter}
                    className="py-1 text-center px-3 w-100"
                  ></input>
                </div>
              </div>
              <div className="row mt-3 mb-4 text-center">
                <div className="col-6">
                  <small>
                    <strong>Facebook:</strong>
                  </small>
                  <input
                    type="text"
                    onChange={(e) => setFacebook(e.target.value)}
                    defaultValue={facebook}
                    placeholder="Facebook"
                    className="py-1 text-center px-3 w-100"
                  ></input>
                </div>
                <div className="col-6">
                  <small>
                    <strong>Instagram:</strong>
                  </small>
                  <input
                    type="text"
                    onChange={(e) => setInstagram(e.target.value)}
                    defaultValue={instagram}
                    placeholder="Twitter"
                    className="py-1 text-center px-3 w-100"
                  ></input>
                </div>
              </div>

              <button
                disabled={!validForm}
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="mt-4 btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default Edit;
