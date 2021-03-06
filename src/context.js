import React, {Component} from "react";
import axios from "axios";

const UserContext = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "SIGN_UP":
            return{
                ...state,
                users: [...state.users, action.payload]
            }
            default:
                return state
    }
}

export class UserProvider extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            dispatch : action => {
                this.setState(state => reducer(state,action))
            }
        }
    }

componentDidMount = async () => {
    const response = await axios.get("http://localhost:3002/users")
    this.setState({
        users: response.data
       
    })
}
 render(){
     return(
         <UserContext.Provider value = {this.state}>
             {this.props.children}
         </UserContext.Provider>
     )
 }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;