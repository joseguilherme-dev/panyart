import React, { Component } from 'react';
import {Link } from "react-router-dom";
import panyartCoverPart1 from '../assets/img/panyart_cover_part1.jpg';
import panyartCoverPart2 from '../assets/img/panyart_cover_part2.jpg';

function Home () {
    return (
        <main>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 py-md-5 text-center">
                        <img src={panyartCoverPart1} className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-4 py-md-5 text-center">
                        <img src={panyartCoverPart2} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;