/* React Router */
import { Routes, Route, useLocation } from "react-router-dom";

/* Pages */
import Home from "../pages/Home";
import Queue from "../pages/Queue";
import Prices from "../pages/Prices";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import UserArea from "../pages/User/Area";
/* User Area Pages */
import Redeem from "../pages/User/Redeem";
import Edit from "../pages/User/Edit";
import ChangePassword from "../pages/User/ChangePassword";
import SendForgotPasswordEmail from "../pages/User/ForgotPassword/sendEmail";
import ForgotPasswordEmailConfirmation from "../pages/User/ForgotPassword/index";
import CreatePassword from "../pages/User/ForgotPassword/CreatePassword";

/* Animated Routes */
import { AnimatePresence } from "framer-motion";
import Commissions from "../pages/Prices/components/Commissions";
import RefSheets from "../pages/Prices/components/RefSheets";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/prices" element={<Prices />}>
          <Route path="illustrations" element={<Commissions />} />
          <Route path="refsheets" element={<RefSheets />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/user" element={<UserArea />} />
        <Route path="/user/redeem" element={<Redeem />} />
        <Route path="/user/edit" element={<Edit />} />
        <Route path="/user/change_password" element={<ChangePassword />} />
        <Route
          path="/user/forgot_password"
          element={<SendForgotPasswordEmail />}
        />
        <Route
          path="/user/forgot_password/email_confirmation"
          element={<ForgotPasswordEmailConfirmation />}
        />
        <Route
          path="/user/forgot_password/create_new_password"
          element={<CreatePassword />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
