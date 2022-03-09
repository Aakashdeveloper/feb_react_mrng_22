import React,{Component} from 'react';
import './listing.css';
import ListingDisplay from './listingDisplay';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class ListingApi extends Component {
    constructor(){
        super()

        this.state={
            restaurantList:''
        }
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filters</h3> 
                            </center>
                        </div>

                    </div>
                    <ListingDisplay listData={this.state.restaurantList}/>
                </div>
            </>
        )
    }
    
    //call api with axios 
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }

}

export default ListingApi