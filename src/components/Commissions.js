import React, { Component } from 'react';

import image06 from '../assets/img/prices/06.png';
import image07 from '../assets/img/prices/07.png';
import image08 from '../assets/img/prices/08.png';
import image09 from '../assets/img/prices/09.png';
import image10 from '../assets/img/prices/10.png';
import image11 from '../assets/img/prices/11.png';
import image12 from '../assets/img/prices/12.png';
import image13 from '../assets/img/prices/13.png';
import image14 from '../assets/img/prices/14.png';
import image15 from '../assets/img/prices/15.png';
import image16 from '../assets/img/prices/16.png';
import image17 from '../assets/img/prices/17.png';
import image18 from '../assets/img/prices/18.png';
import image19 from '../assets/img/prices/19.png';
import image20 from '../assets/img/prices/20.png';
import image21 from '../assets/img/prices/21.png';


/* Animated Routes */
import {motion} from 'framer-motion';

class Commissions extends Component {
  render() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h2>♥ ILUSTRATIONS ♥ </h2>
            <h5>Here you can see examples and the prices of my art!</h5><br/>
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 py-2 text-end">
                    <img src={image06} className="img-thumbnail" width="100%" alt=""/>
                </div>
                <div className="col-12 col-md-4 py-2 text-start">
                    <img src={image07} className="img-thumbnail" width="100%" alt=""/>
                </div>
            </div>
            <h4><br/><strong>Icon: $35 (extra character +$25)</strong><br/><br/><br/></h4>

            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-4 py-2 text-end">
                    <img src={image08} className="img-thumbnail" width="100%" alt=""/>
                </div>
                <div className="col-12 col-md-4 py-2 text-start">
                    <img src={image11} className="img-thumbnail" width="100%" alt=""/>
                </div>
            </div>
            <h4><br/><strong>Bust: $50 (extra character: +$40)</strong><br/><br/><br/></h4>

            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-4 py-2 text-end">
                    <img src={image09} className="img-thumbnail" width="100%" alt=""/>
                </div>
                <div className="col-12 col-md-4 py-2 text-start">
                    <img src={image10} className="img-thumbnail" width="100%" alt=""/>
                </div>
                <div className="col-12 col-md-4 py-2 pt-3 text-center">
                    <img src={image15} className="img-thumbnail" width="100%" alt=""/>
                </div>
            </div>
            <h4><br/><strong>Halfbody: $60 (extra character: +$50)</strong><br/><br/><br/></h4>

            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-4 py-2 text-end">
                    <img src={image12} className="img-thumbnail" width="100%" alt=""/>
                </div>
                <div className="col-12 col-md-4 py-2 text-start">
                    <img src={image13} className="img-thumbnail" width="100%" alt=""/>
                </div>
                <div className="col-12 col-md-4 py-2 text-center">
                    <img src={image14} className="img-thumbnail" width="100%" alt=""/>
                </div>
            </div>
            <h4><br/><strong>Fullbody: $70 (extra character: +$60)</strong><br/><br/><br/></h4>

            <div className="row justify-content-center">
                <div className="col-12 col-md-4 py-2 text-end">
                    <img src={image16} className="img-thumbnail" width="100%" alt=""/>
                </div>
                <div className="col-12 col-md-4 py-2 text-start">
                    <img src={image17} className="img-thumbnail" width="100%" alt=""/>
                </div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-12 col-md-4 py-2 text-end">
                    <img src={image18} className="img-thumbnail" width="100%" alt=""/>
                </div>
                <div className="col-12 col-md-4 py-2 text-start">
                    <img src={image20} className="img-thumbnail" width="100%" alt=""/>
                </div>
            </div>
            <h4><br/><strong>Chibi: $35 (extra character: +$25)</strong><br/><br/><br/></h4>

            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <img src={image19} className="img-thumbnail" width="100%" alt=""/>
                </div>
            </div>
            <h4><br/><strong>Icon Chibi: $25 (extra character: +$15)</strong><br/><br/><br/></h4>


            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <img src={image21} className="img-thumbnail" width="100%" alt=""/>
                </div>
            </div>
            <h4><br/><strong>NSFW: +$20</strong><br/>

            - Check out more examples on
            <a className="color_bluedy" href="https://twitter.com/Bluedy_X" target="_blank">
                my NSFW twitter.
            </a>.
            <br/><br/><br/>
            </h4>
        </motion.div>
    )
  }
}

export default Commissions;