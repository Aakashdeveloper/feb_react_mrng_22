import React, {Component,Fragment} from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super()
        // console.log(">>>>>inside constructor")
        this.state={
            title:'React Application',
            keywords:'User Text Here'
        }
    }

    handleChange = (event) => {
        //  console.log(event.target.value)
        this.setState({keywords:event.target.value?event.target.value:'User Text Here'})
        // passing the data
        this.props.userInput(event.target.value)
    }

    render(){
        // console.log(">>>>>inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}}>{this.state.keywords}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}


export default Header