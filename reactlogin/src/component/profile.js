import React,{Component} from 'react'
import {Link} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

class Profile extends Component {
    constructor(props){
        super(props)

        this.state={
            user:""
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('rtk')
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role === "Admin"){
                return(
                    <Link to="/users" className="btn btn-success">
                        Users
                    </Link>
                )
            }
        }
    }


    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/?message=Login-First')
        }
        let {user} = this.state
        sessionStorage.setItem('rtk',user.role)
        
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {user.name}</h1>
                        <h2>Your Email Id Is {user.email}</h2>
                        <h2>Your Phone Number is Is {user.phone}</h2>
                        <h2>Your Role is Is {user.role}</h2>
                        {this.conditionalRender()} &nbsp;
                        <button className="btn btn-danger" onClick={this.handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // 
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default Profile;