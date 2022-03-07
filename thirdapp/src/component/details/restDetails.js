import React,{Component} from 'react';
import MenuDisplay from './menuDisplay';
import './details.css';
import axios from 'axios';

const url = "http://zomatoajulypi.herokuapp.com/details"
const menuUrl = "https://zomatoajulypi.herokuapp.com/menu"

class Details extends Component {

    constructor(props){
        super(props);

        this.state={
            details:'',
            menuList:''
        }
    }

    render(){
        let {details} = this.state
        return(
            <>  
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
                        </div>
                    </div>
                </div>
                
                <MenuDisplay/>
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