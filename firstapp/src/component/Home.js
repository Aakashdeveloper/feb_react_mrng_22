import React,{Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import ProductsDisplay from './ProductsDisplay'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state={
            products:JSON
        }
    }

    render(){
        return (
            <>
                <Header/>
                <ProductsDisplay prodData={this.state.products}/>
                <Footer year="2022"/>
            </>
        )
    }
}

export default Home
