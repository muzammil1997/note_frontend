import React,{ Component } from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import history from './history';
import Login from './pages/LoginRegister/Login';
import Register from './pages/LoginRegister/Register';
import HomePage from './pages/HomePage/HomePage';
import requireAuth from './utils/requireAuth';

class App extends Component{
render(){
return(
  <Router history={history}>
  
    <Switch>
    <Route path="/login" exact component={Login}/> 
    <Route path="/register" exact component={Register}/> 
    <Route path="/" exact component={requireAuth(HomePage)}/> 
    </Switch>

  </Router>
);
}
}  
export default App;