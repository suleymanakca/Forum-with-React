import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage';

class App extends React.Component {
  render()
  {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/user/:id' component={UserPage}/>
          </Switch>       
        </div>
      </Router>
    );
  }
 
}

export default App;
