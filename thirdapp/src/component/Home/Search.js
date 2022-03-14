import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const url = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component{
    constructor(){
        super()

        console.log("inside constructor")

        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRestaurant = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.restaurant_id} key={item._id}>{item.restaurant_name}|{item.address}</option>
                )
            })
        }
    }
    

    handleCity = (event) => {
        console.log("inside handleCity>>>",event.target.value)
        const stateId = event.target.value
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })
    }

    handleRestaurants = (event) => {
        console.log("inside search>>",this.props)
        const restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`)
    }

    render() {
        console.log("inside render")
        return (
            <>
                <div id="search">
                    <div className="logo">
                        <span>D!</span>
                    </div>
                    <div id="heading">
                        Search Place Near To You
                    </div>
                    <div id="dropdown">
                        <select onChange={this.handleCity}>
                            <option>----SELECT LOCATION----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select id="restaurants" onChange={this.handleRestaurants}>
                            <option>----SELECT RESTAURANTS----</option>
                            {this.renderRestaurant(this.state.restaurant)}
                        </select>
                    </div>
                </div>
            </>
        )
    }

    //api calling on page load
    componentDidMount(){
        console.log("inside componentDidMount")
        // we are calling api and getting data an set in state
        fetch(url,{method: 'GET',})
        // return promise
        .then((res) => res.json())
        // return data
        .then((data) => { 
            this.setState({location:data})
        })
        .catch((err) => { console.log(err)})
    }
}

export default withRouter(Search)