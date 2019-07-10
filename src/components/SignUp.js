import React, { Component } from 'react'
import UserConsumer from '../context';
import './LoginPage.css'
import axios from 'axios';


class SignUp extends Component {
    constructor(){
        super()
        this.state={
            id:"",
            name:"",
            surname:"",
            username:"",
            password:"",
        }
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    signUp = async (dispatch, e) => {
        e.preventDefault();
        const {name, surname, username, password, id} = this.state;

        const newUser = {
            id,
            name,
            surname,
            username,
            password
        }

        const response = await axios.post(`http://localhost:3002/users`, newUser);

        dispatch({type:"SIGN_UP",payload:response.data});

        this.props.history.push(`/`);
    }

    render() {
        const {username, password, name, surname} = this.state;

        return<UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return(
                        <div>
                <form onSubmit={this.signUp.bind(this,dispatch)} className="center">
                    <h3 >
                        Name
                    </h3>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.changeInput}
                        ></input>
                     <h3 >
                        Surname
                    </h3>
                    <input 
                        type="text"
                        name="surname"
                        value={surname}
                        onChange={this.changeInput}
                        ></input>
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
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.changeInput}
                        ></input>
                    <hr style={{width: "20%"}}></hr>
                    <button type="submit">Sign Up</button>    
                </form>
            </div>
                    )
                }
            }
        </UserConsumer>

    }
}
export default SignUp;
