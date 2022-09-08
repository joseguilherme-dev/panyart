import React, { Component } from 'react';
import {Link } from "react-router-dom";
import panyartCoverPart1 from '../assets/img/panyart_cover_part1.png';
import panyartCoverPart2 from '../assets/img/panyart_cover_part2.png';


/* Animated Routes */
import {motion} from 'framer-motion';

function Home () {
    return (
        <motion.main
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={{duration: 1}}
        >
            <div className='container'>
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-4 py-md-5 text-center">
                        <img src={panyartCoverPart1} className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-4 py-md-5 text-center">
                        <img src={panyartCoverPart2} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </motion.main>
    )
}

export default Home;