import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

/* Custom Components */
import Navbar from './Navbar';


class SocialIcons extends Component {
  render() {
    return (
        <div>
            <div className="row py-5">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <a className="icon_box facebook_icon hvr-float-shadow " target="_blank" href="https://www.facebook.com/PanYart">
                        <i className="fa fa-brands fa-facebook"></i>
                    </a>
                    <a className="icon_box twitter_icon hvr-float-shadow " target="_blank" href="https://twitter.com/pan_yart">
                        <i className="fa fa-brands fa-twitter"></i>
                    </a>
                    <a className="icon_box deviantart_icon hvr-float-shadow " target="_blank" href="https://www.deviantart.com/panyart">
                        <i className="fa fa-brands fa-deviantart"></i>
                    </a>
                    <a className="icon_box instagram_icon hvr-float-shadow " target="_blank" href="https://www.instagram.com/panyart.studio/">
                        <i className="fa fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    )
  }
}

export default SocialIcons;