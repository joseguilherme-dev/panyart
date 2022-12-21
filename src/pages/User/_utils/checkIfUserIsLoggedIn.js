import request from "../../../axios/request";
import Cookies from "universal-cookie";

export default async function checkIfUserIsLoggedIn() {
  /* Verifies if the user is logged in and returns it's information if so.
  It also verifies if the authentication JWT token stored in cookie has not expired. */
  const cookies = new Cookies();
  const url = "/auth/personal";
  const headers = {
    authorization: cookies.get("jwt"),
  };

  var personalData;

  await request
    .get(url, { headers: headers })
    .catch((error) => {
      personalData = null;
    })
    .then((response) => {
      personalData = response.data.personal;
    });

  return personalData;
}
