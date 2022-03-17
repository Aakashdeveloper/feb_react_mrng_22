import React,{Component} from 'react'
import axios from 'axios';
import UserDisplay from './userDisplay'

const url = "https://developerjwt.herokuapp.com/api/auth/users"

class Users extends Component {
    constructor(props){
        super(props)

        this.state={
            users:''
        }
    }

    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/?message=Login-First')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile?message=You are not authorised for the users')
        }
        return(
           <>
            <UserDisplay userData={this.state.users}/>
           </>
        )
    }

    componentDidMount(){
        axios.get(url).then((res)=>{this.setState({users:res.data})})
    }
}

export default Users;