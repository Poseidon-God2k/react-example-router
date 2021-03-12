import React,{useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';


function Account() {
  
    return (
      // <Router>
        <div className="App">
        <Switch>
          <Route path="/account" exact component={AccountPage}/>
          <Route path="/account/login"  component={Login}/>
          <Route path="/account/register"  component={Register}/>
        </Switch>
      </div>
    // </Router> //nested router in the router app

  );
}
const AccountPage = () =>{
  return (
    <h1>Page Account</h1>
  );
}

export default Account;