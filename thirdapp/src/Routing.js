import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/home';
import NotFound from './Notfound';
import ListingApi from './component/listing/listingApi';
import Details from './component/details/restDetails';
import PlaceOrder from './component/Booking/placeOrder';
import ViewOrder from './component/Booking/viewOrder';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:mealId" component={ListingApi}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/PlaceOrder/:restName" component={PlaceOrder}/>
                <Route exact path="/viewBooking" component={ViewOrder}/>
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;