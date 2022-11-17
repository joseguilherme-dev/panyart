import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { validateEmail } from "../Login/validators";

// Axios
import axios from "axios";
import { BASEURL } from "../../../App";

// Animated Routes
import { motion } from "framer-motion";

function SendForgotPasswordEmail() {
  const navigate = useNavigate();

  // Fields
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setValidEmail(validateEmail(email));
  }, [email]);

  const [stage, setStage] = useState("");

  // Perform redeem
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const url = BASEURL + "/auth/password/forgot";
    const response = await axios
      .post(url, { email: email })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) navigate("/login");
        else setErrorMsg("There's no account registered on this email!");
      })
      .finally((response) => {
        return response;
      });
    if (response) {
      navigate("/user/forgot_password/email_confirmation", {
        state: {
          email: email,
        },
      });
    }
    setLoading(false);
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
            <Link to="/login" className="color_third">
              <small className="text-right color_third">
                <strong>
                  <u> &#8592; Return to login area</u>
                </strong>
              </small>
              <br />
            </Link>

            <hr className="mt-5"></hr>

            <div>
              <div className="px-5 mt-5">
                {errorMsg ? (
                  <div class="alert alert-danger" role="alert">
                    <strong>Ops!</strong> {errorMsg}
                  </div>
                ) : (
                  ""
                )}

                <h3>
                  <strong>Forgot your password?</strong>
                </h3>
                <p>Let us help you recover! ;)</p>
                <input
                  type="text"
                  className="py-1 text-center px-3 w-100"
                  placeholder="Enter your account email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={(e) => handleSubmit(e)}
                  disabled={!validEmail && !loading}
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

export default SendForgotPasswordEmail;
