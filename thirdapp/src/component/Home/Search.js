import React,{Component} from 'react';
import './Search.css';

const url = "https://zomatoajulypi.herokuapp.com/location";
const cityUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=1"

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            restaurant:''
        }
    }
    render() {
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
                        <select>
                            <option>----SELECT LOCATION----</option>
                        </select>
                        <select id="restaurants">
                            <option>----SELECT RESTAURANTS----</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}

export default Search;