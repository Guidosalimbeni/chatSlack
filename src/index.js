import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import firebase from "./firebase";
import 'semantic-ui-css/semantic.min.css';

import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Spinner from "./Spinner"

import rootReducer from "./reducers";
import { setUser } from "./actions";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.setUser(user);
                this.props.history.push("/");
            }
        });
    }

    render() {
        return this.props.isLoading ? <Spinner /> : (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        );
    }
}

//const RootwithAuth = withRouter(Root);

const mapStateFromProps = state => ({

    isLoading: state.user.isLoading
});


const RootWithAuth = withRouter(
    connect(mapStateFromProps, 
        { setUser })(Root));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
