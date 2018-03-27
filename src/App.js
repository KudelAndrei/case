import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import CollectionWrap from './components/Collection/CollectionWrap';
import FullCollection from "./components/Collection/FullCollection";
import Home from './Pages/Home';
import Delivery from './Pages/Delivery';
import NotFound from "./Pages/NotFound";
import AboutProducts from './Pages/AboutProducts';
import InstallmentPlan from './Pages/InstallmentPlan';
import AboutUs from './Pages/AboutUs';
import AboutStore from './Pages/AboutStore/index';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./style/style.css";
import data from "./data/data";


class App extends Component {
    render() {
        const { categorys } = data;
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Navigation categorys={categorys} {...data} />
                    <Switch>
                        <Route exact path="/" render={(props) => <Home {...props} categorys={categorys} />} />
                        <Route exact path="/dostavka" component={Delivery} />
                        <Route exact path="/rassrochka" component={InstallmentPlan} />
                        <Route exact path="/o-produkcii" component={AboutProducts} />
                        <Route exact path="/o-nas" component={AboutUs} />
                        <Route exact path="/o-magazine" component={AboutStore} />
                        <Route exact path="/collections/:category" render={(props) => <CollectionWrap {...props} data={data} />} />
                        <Route exact path="/collections/:category/:model" render={(props) => <FullCollection {...props} data={data} />} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
