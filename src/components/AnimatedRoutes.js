import React, { Component } from 'react';

/* React Router */
import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

/* Custom Components */
import Home from './Home'
import Queue from './Queue';
import Prices from './Prices';
import Commissions from './Commissions';
import RefSheets from './RefSheets';
import Login from './User/Login/index'

import {AnimatePresence} from 'framer-motion';
import UserArea from './User/Area';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="/queue" element={<Queue />}/>
                <Route path="/prices" element={<Prices />}>
                    <Route path="illustrations" element={<Commissions />}/>
                    <Route path="refsheets" element={<RefSheets />}/>
                </Route>
                <Route path="/login" element={<Login />}/>
                <Route path="/user_area" element={<UserArea />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;