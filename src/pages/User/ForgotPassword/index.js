import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// Axios
import axios from "axios";
import { BASEURL } from "../../../App";

// Animated Routes
import { motion } from "framer-motion";

function ForgotPasswordEmailConfirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email } = state;

  // Fields
  const [OTP, setOTP] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [validOTP, setValidOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setValidOTP(OTP.length === 6);
  }, [OTP]);

  // Perform redeem
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log("entrou aqui");
    const url = BASEURL + "/auth/password/forgot/verify";
    const response = await axios
      .post(url, { token: OTP, email: email })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) navigate("/login");
      })
      .finally((response) => {
        return response;
      });
    if (response) {
      if (!response.data.isOtpValid)
        setErrorMsg("The inserted code is not correct!");
      else
        navigate("/user/forgot_password/create_new_password", {
          state: {
            OTP: OTP,
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
                  <strong>Security confirmation</strong>
                </h3>
                <p>
                  We've just sent an email to <br />
                  <strong> {email} </strong>
                  <br /> containing a code which you can use here to reset your
                  password!
                </p>
                <input
                  type="text"
                  className="py-1 text-center px-3 w-100"
                  placeholder="Insert the code we sent you"
                  onChange={(e) => setOTP(e.target.value)}
                />
                <button
                  onClick={(e) => handleSubmit(e)}
                  disabled={validOTP && !loading ? false : true}
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

export default ForgotPasswordEmailConfirmation;
