import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Register from '../pages/Register';


function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register}/>
        </Router>
    );
}

export default Routes;