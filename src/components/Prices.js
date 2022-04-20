import React, { Component } from 'react';

/* React Router */
import { 
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";


/* Custom Components */
import Navbar from './Navbar';
import Commissions from './Commissions';
import RefSheets from './RefSheets';

/* Custom Images */
import gatoMaluko from '../assets/img/gatomaluko.png';

class Prices extends Component {
  render() {
    return (
        <main>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 text-center">
                        <img src={gatoMaluko} className="gatomaluko img-thumbnail" alt=""/>
                    </div>
                </div>
                <div className="row justify-content-center patrick-hand">
                    <div className="col-8 col-md-6 color_third text-center py-5">
                        <h4>
                            Check out the prices of my <u>illustrations</u> and <u>refsheets</u> below!
                            <br/><br/>
                            * All the images below are not in full quality! <br/> 
                        </h4>
                        <small>(otherwise the website would renderize itself very slowly! ;P)</small>
                    </div>
                </div>

                <div className='row pb-5 mb-5'>
                    <div className='col-12 text-center'>
                        <Link to="commissions" className="btn btn-danger hvr-wobble-top btn-lg btn-custom_1 px-3 me-3">Commissions</Link>
                        <Link to="refsheets" className="btn btn-danger hvr-wobble-top btn-lg btn-custom_1 px-3 me-3">RefSheets</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center color_third patrick-hand">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
  }
}

export default Prices;