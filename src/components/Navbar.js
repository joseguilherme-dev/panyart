import React, { Component } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="row justify-content-center py-5">
        <div className="col-md-2 my-2 text-center">
          <Link
            to="/"
            className="btn btn-danger hvr-wobble-top w-100 btn-lg btn-custom_1 px-4"
          >
            Home
          </Link>
        </div>
        <div className="col-md-2 my-2 text-center">
          <Link
            to="/queue"
            className="btn btn-danger hvr-wobble-top w-100 btn-lg btn-custom_1 px-4"
          >
            Queue
          </Link>
        </div>
        <div className="col-md-2 my-2 text-center">
          <Link
            to="/prices"
            className="btn btn-danger hvr-wobble-top w-100 btn-lg btn-custom_1 px-4"
          >
            Prices
          </Link>
        </div>
        <div className="col-md-2 my-2 text-center">
          <Link
            to="/login"
            className="btn btn-danger hvr-wobble-top w-100 btn-lg btn-custom_1 px-4"
          >
            Client Area
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
