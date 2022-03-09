import React, {Component} from 'react';

const url = "http://zomatoajulypi.herokuapp.com/menuItem"

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id: Math.floor(Math.random()* 100000),
            hotel_name:this.props.match.params.restName,
            name:'',
            email:'',
            cost:0,
            phone:'',
            address:'Hno 34',
            menuItem:''
        }
    }

    render(){
        return(
            <>
                <h1>{this.state.cost}</h1>
            </>
        )
    }

    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.menu_price)
                return 'ok'
            })
            this.setState({cost:totalPrice})
        })
    }
}

export default PlaceOrder