import React, { Component } from 'react';

import image01 from '../assets/img/prices/01.png';
import image02 from '../assets/img/prices/02.png';
import image03 from '../assets/img/prices/03.png';
import image04 from '../assets/img/prices/04.png';
import image05 from '../assets/img/prices/05.png';


class RefSheets extends Component {
    render () {
        return (
            <div>
                <h2>♥ REFSHEETS ♥ </h2><br/>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <img src={image01} className="img-fluid" width="100%" alt=""/>
                    </div>
                </div>
                <h4><br/>
                    <strong>Fullbody: $50</strong><br/>
                    - Includes basic info, color palette and colored background.<br/><br/>
                    <strong>Back View: $30</strong><br/><br/><br/>
                </h4>
                
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <img src={image02} className="img-fluid" width="50%" alt=""/>
                    </div>
                </div>
                <h4><br/>
                    <strong>Extra View: $15</strong><br/>
                    - With clothes, accessories, alternative hair style, etc.
                    <br/><br/><br/>
                </h4>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <img src={image03} className="img-fluid" width="100%" alt=""/>
                    </div>
                </div>
                <h4><br/>
                    <strong>Headshots: $10 (each)</strong><br/>
                    - With different expressions, alternative hair style, etc.
                    <br/><br/><br/>
                </h4>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <img src={image04} className="img-fluid" width="100%" alt=""/>
                    </div>
                </div>
                <h4><br/>
                    <strong>Accessories / Small Objects: $5 (each)</strong><br/>
                    <strong>Complex Objects: $10 (each) </strong><br/><br/><br/>
                </h4>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <img src={image05} className="img-fluid" width="100%" alt=""/>
                    </div>
                </div>
                <h4><br/>
                    <strong>Chibi: $15 (extra ones: $5)</strong><br/>
                    - With clothes, accessories, alternative hair style, etc.<br/><br/><br/>
                </h4>
            </div>
        )
    }
}



export default RefSheets;