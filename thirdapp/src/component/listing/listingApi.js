import React,{Component} from 'react';
import './listing.css';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import CuisineFilter from '../Filters/cuisineFilter';
import CostFilter from '../Filters/costFilter';
import Header from '../../Header'

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class ListingApi extends Component {
    constructor(){
        super()

        this.state={
            restaurantList:''
        }
    }

    setDatPerFilter = (data) => {
        this.setState({restaurantList:data})
    }
    render(){
        return(
            <>
                <Header/>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filters</h3> 
                            </center>
                            <CuisineFilter mealId={this.props.match.params.mealId}
                            restPerCuisine={(data) => {this.setDatPerFilter(data)}}/>
                            <hr/>
                            <CostFilter mealId={this.props.match.params.mealId}
                            restPerCost={(data) => {this.setDatPerFilter(data)}}/>
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