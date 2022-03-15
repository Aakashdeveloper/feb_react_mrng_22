import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Register from './component/register';
import Login from './component/login';
import Profile from './component/profile';
import Users from './component/userList';
import NotFound from './Notfound';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/users" component={Users}/>
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;