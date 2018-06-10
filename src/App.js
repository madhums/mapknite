import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

// Containers
import Home from './containers/Home';
import Maps from './containers/Maps';
import About from './containers/About';
import Features from './containers/Features';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Offer from "./containers/Offer";
import Service from "./containers/Service";

class App extends Component {
    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/offer" component={Offer}/>
                    <Route exact path="/services" component={Service}/>
                    <Route exact path="/features" component={Features}/>
                    <Route exact path="/maps" component={Maps}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
