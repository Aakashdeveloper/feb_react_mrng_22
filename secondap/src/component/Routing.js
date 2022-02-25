import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import NotFound from './NotFound'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/post" component={Post}/>
                <Route exact path="/post/:topic" component={PostDetails}/>
                <Route exact path="/profile" component={Profile}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing