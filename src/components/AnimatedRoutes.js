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

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="queue" element={<Queue />}/>
                <Route path="prices" element={<Prices />}>
                    <Route path="illustrations" element={<Commissions />}/>
                    <Route path="refsheets" element={<RefSheets />}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;