import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

/* Custom Components */
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';


class Footer extends Component {
  render() {
    return (
        <footer className="container-fluid">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-4 patrick-hand color_third">
                    <h4>
                        Interested in my work?<br/>
                        <strong>Contact me</strong> through my socials:
                    </h4>
                </div>
            </div>
            <SocialIcons/>
            <div className="row pt-2">
                <div className="col-12 text-center bg-white" id="credits">
                    <small>
                        © PanYart | All rights reserved | Developed with ♡ by: @joseguilherme-dev
                    </small>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;