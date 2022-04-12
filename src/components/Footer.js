import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

/* Custom Components */
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';


class Footer extends Component {
  render() {
    return (
        <footer class="container-fluid">
            <SocialIcons/>
            <div class="row pt-2">
                <div class="col-12 text-center bg-white" id="credits">
                    <small>
                        © All rights reserved. Developed with ♡ by: @joseguilherme-dev
                    </small>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;