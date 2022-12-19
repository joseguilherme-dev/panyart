import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// Axios
import axios from "axios";
import { BASEURL } from "../../../App";

// Animated Routes
import { motion } from "framer-motion";

function CreatePassword(props) {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const { state } = useLocation();

  var OTP = "";
  var email = "";

  if (state) {
    OTP = state.OTP;
    email = state.email;
  }

  // Fields
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  // Fields Validations
  const [eightCharacters, setEightCharacters] = useState(false);
  const [oneLetter, setOneLetter] = useState(false);
  const [oneNumber, setOneNumber] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  useEffect(() => {
    if (password1.length < 8) setEightCharacters(false);
    else setEightCharacters(true);
    if (!password1.match(/[a-zA-Z]/)) setOneLetter(false);
    else setOneLetter(true);
    if (!password1.match(/\d/)) setOneNumber(false);
    else setOneNumber(true);
  }, [password1]);
  useEffect(() => {
    if (password1 === password2) setPasswordsMatch(true);
    else setPasswordsMatch(false);
  }, [password1, password2]);

  // Form Validations
  const [validForm, setValidForm] = useState(false);
  useEffect(() => {
    if (eightCharacters && oneLetter && oneNumber && passwordsMatch)
      setValidForm(true);
    else setValidForm(false);
  }, [eightCharacters, oneLetter, oneNumber, passwordsMatch]);

  // API error treatment
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Perform redeem
  async function handleSubmit(e) {
    e.preventDefault();
    setValidForm(false);
    const url = BASEURL + "/auth/password/forgot/perform";
    const response = await axios
      .post(url, {
        token: OTP,
        email: email,
        password1: password1,
        password2: password2,
      })
      .catch((error) => {
        setError(true);
        if (error.response.status === 403) navigate("/login");
        else setErrorMsg("Server is currently unavailable");
      })
      .then((response) => {
        return response;
      });
    if (response) {
      email = "";
      OTP = "";
      alert("Password successfully changed!");
      navigate("/login");
    }
    setValidForm(true);
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
            <div>
              <div className="px-5 mt-5">
                {error ? (
                  <div class="alert alert-danger" role="alert">
                    <strong>Ops!</strong> {errorMsg}
                  </div>
                ) : (
                  ""
                )}

                <h3>
                  <strong>Change your password!</strong>
                </h3>
                <p>
                  Your new password must:
                  <br />[{eightCharacters ? "✔️" : "❌"}] contain at least{" "}
                  <strong>8 characters</strong>.<br />[{oneLetter ? "✔️" : "❌"}
                  ] contain at least <strong>one letter</strong>.<br />[
                  {oneNumber ? "✔️" : "❌"}] contain at least{" "}
                  <strong>one number</strong>.<br />[
                  {passwordsMatch ? "✔️" : "❌"}]{" "}
                  <strong>Be the same in the two fields</strong>.<br />
                </p>
                <input
                  type="text"
                  className="py-1 text-center px-3 w-100"
                  placeholder="Enter your new password"
                  onChange={(e) => setPassword1(e.target.value)}
                />

                <input
                  type="text"
                  className="mt-2 py-1 text-center px-3 w-100"
                  placeholder="Enter your new password again"
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <button
                  onClick={(e) => handleSubmit(e)}
                  disabled={!validForm}
                  className="mb-3 mt-3 btn hvr-wobble-top btn-lg btn-custom_1 w-100 px-4 me-3"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default CreatePassword;
