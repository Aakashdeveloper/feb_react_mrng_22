import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/home';
import NotFound from './Notfound';
import ListingApi from './component/listing/listingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:mealId" component={ListingApi}/>
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;