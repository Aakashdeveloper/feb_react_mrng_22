import React,{Component} from 'react';
import MenuDisplay from './menuDisplay';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../../Header'


const url = "http://zomatoajulypi.herokuapp.com/details"
const menuUrl = "https://zomatoajulypi.herokuapp.com/menu"

class Details extends Component {

    constructor(props){
        super(props);

        this.state={
            details:'',
            menuList:'',
            userItems:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
        }
    }

    addToCart = (data) => {
        this.setState({userItems:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItems)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        let {details} = this.state
        return(
            <>  
                <Header/>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt=""/>
                        </div>
                    </div>
                    <div className="tileContent">
                        <div className="content">
                            <h1>{details.restaurant_name}</h1>
                            <span id="cfeedback">245 Customer Say {details.rating_text}</span>
                            <h4>Old Price: <strike>Rs 1200</strike></h4>
                            <h4>Offer Price: Rs 600</h4>
                            <div>
                                <div class="icons">
                                    <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="sentizied"/>
                                </div>
                                <div class="icons">
                                    <img src="https://i.ibb.co/s56LLF9/homedelivery.png"/>
                                </div>
                            </div>
                            <div>
                                <Tabs>
                                    <TabList>
                                        <Tab>Details</Tab>
                                        <Tab>Contact</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h2>{details.restaurant_name}</h2>
                                        <p>
                                            {details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>{details.address}</h2>
                                        <h2>Phone: {details.contact_number}</h2>
                                    </TabPanel>
                                </Tabs>
                                <Link to={`/list/${this.state.mealId}`} class="btn btn-danger">Back </Link> &nbsp;
                                <button className="btn btn-success" onClick={this.proceed}>
                                    Proceed    
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <center><h2>Menu</h2></center>
                    <MenuDisplay menuData={this.state.menuList}
                    finalOrder = {(data) => {this.addToCart(data)}}/>
                </div>
               
            </>
        )
    }

    //call api with axios 
    async componentDidMount(){
        let mealId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${url}/${mealId}`)
        let menuResponse = await axios.get(`${menuUrl}/${mealId}`)
        this.setState({details:response.data[0], menuList:menuResponse.data})
    }

}

export default Details