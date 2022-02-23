import React,{Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import ProductsDisplay from './ProductsDisplay'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state={
            products:JSON,
            filtered:JSON
        }
    }
    // var a = [4,6,7,3,5,2,9,3,5]
    // a.filter((data) => { return data>5 })
    filterProduct = (keyword) =>{
        let output = this.state.products.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({filtered:output})
    }
 
    render(){
        return (
            <>
                <Header userInput={(inputData) => {this.filterProduct(inputData)}}/>
                <ProductsDisplay prodData={this.state.filtered}/>
                <Footer year="2022"/>
            </>
        )
    }
}

export default Home
