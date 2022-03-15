import React, { Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <header>
                <div id="brand">
                    Developer Funnel
                    &nbsp;
                </div>
                <div id="social">
                   <Link to="/" className="btn btn-success">
                       <span className="glyphicon glyphicon-log-in"></span> LogIn</Link>
                   &nbsp;
                   <Link to="/register" className="btn btn-info">
                    <span className="glyphicon glyphicon-user"></span> Register</Link>
                </div>
            </header>
        )
    }
}

export default Header;