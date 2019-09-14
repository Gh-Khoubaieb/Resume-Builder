import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

// Components
import NavBar from './ui/NavBar/NavBar';
import HomePage from './routes/HomePage';
import UploadPage from './routes/UploadPage';
import BuildPage from './routes/BuildPage';
import ContactPage from './routes/ContactPage';

class App extends Component {
    componentDidMount() {
        const history = createBrowserHistory();
        if (GOOGLE_ANALYTICS_KEY) {
            ReactGA.initialize(GOOGLE_ANALYTICS_KEY);
            history.listen((location) => ReactGA.pageview(location.pathname));
        }
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/upload" component={UploadPage} />
                        <Route exact path="/build" component={BuildPage} />
                        <Route exact path="/contact" component={ContactPage} />
                    </Switch>
                </HashRouter>
            </Fragment>
        );
    }
}

export default hot(module)(App);
