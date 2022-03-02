import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/home';
import NotFound from './Notfound';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;