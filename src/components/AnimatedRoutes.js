import React, { Component } from "react";

/* React Router */
import { Routes, Route, useLocation } from "react-router-dom";

/* Custom Components */
import Home from "./Home";
import Queue from "./Queue";
import Prices from "./Prices";
import Commissions from "./Commissions";
import RefSheets from "./RefSheets";
import Login from "./User/Login/index";

import { AnimatePresence } from "framer-motion";
import UserArea from "./User/Area";
import Redeem from "./User/Redeem";
import Edit from "./User/Edit";
import ChangePassword from "./User/ChangePassword";
import Register from "./User/Register";
import SendForgotPasswordEmail from "./User/ForgotPassword/sendEmail";
import ForgotPasswordEmailConfirmation from "./User/ForgotPassword/index";
import CreatePassword from "./User/ForgotPassword/CreatePassword";

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
