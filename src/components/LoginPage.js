import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './LoginPage.css'
import UserConsumer from '../context';


class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            go:false
        }
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    logIn = async () => {

        const response = await axios.get(`http://localhost:3002/users`);

        const {id} = this.props;
        response.data.find(user => user.username === this.state.username ? this.setState({go: true}): null)
        
        if(this.state.go){
            this.props.history.push(`user/${id}`);
            
        }
       
    }
    render() {
        const {username, password} = this.state;
        return <UserConsumer>{
            value => {
                
                return(
                    <div>
                <form onSubmit={this.logIn} className="center">
                    <h3>
                        Username
                    </h3>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.changeInput}
                        ></input>
                    <h3 >
                        Password
                    </h3>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.changeInput}
                        ></input>
                    <hr style={{width: "20%"}}></hr>
                    <button>Log in</button>    
                </form>
                        <Link to={`/signup`}>Sign Up</Link>
            </div>
                )
            }}
        </UserConsumer>
    }
}
export default LoginPage;
