import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Demo } from './components/demo/demo';

const Routing = (
    <Router>
        <div>
            <Route path="/demo" component={Demo}/>            
        </div>          
    </Router>
);

ReactDOM.render(Routing, document.getElementById('root'));