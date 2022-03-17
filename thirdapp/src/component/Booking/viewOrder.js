import React, {Component} from 'react'
import axios from 'axios';
import DisplayOrder from './displayOrder';
import Header from '../../Header'

const url = "http://localhost:6700/orders"

class ViewOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        return(
           <>
            <Header/>
            <DisplayOrder orderData={this.state.orders}/>
           </>
        )
    }

    componentDidMount(){
        axios.get(url).then((res)=>{this.setState({orders:res.data})})
    }

}

export default ViewOrder