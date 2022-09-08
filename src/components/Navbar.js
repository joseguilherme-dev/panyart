import React, { Component } from 'react';
import {Link } from "react-router-dom";

function Navbar () {
    return (
        <div className='container'>
            <div className='row py-5'>
                <div className='col-12 text-center'>
                    <Link to='/' className='btn btn-danger hvr-wobble-top btn-lg btn-custom_1 px-4 me-3'>
                        Home
                    </Link>
                    <Link to='/queue' className='btn btn-danger hvr-wobble-top btn-lg btn-custom_1 px-4 me-3'>
                        Queue
                    </Link>
                    <Link to='/prices' className='btn btn-danger hvr-wobble-top btn-lg btn-custom_1 px-4 me-3'>
                        Prices
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;