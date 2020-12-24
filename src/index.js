import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import 'semantic-ui-css/semantic.min.css';

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" exact component= {App}/>
            <Route path="/login" component= {Login}/>
            <Route path="/register" component= {Register}/>
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
