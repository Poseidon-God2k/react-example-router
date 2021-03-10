import React,{useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Axios from "axios";
import Register from './Register';
import Nav from './Nav';


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
const Login = () =>{
  const [username , setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const registerStyle ={
    color:'blue',
    textDecoration: 'none',
    display:'block',
    listStyleType: 'none'
  }
  const submitRequest =()=>{
    console.log(username)
    console.log(password)
    Axios.post("http://localhost:8888/api/login", {
      uname:username, 
      pwd:password
      }).then(res =>{
        alert(res.data.message);
      })
  }
  return (
    <div className="content">
      <div className="login">
          <div className="form">
            <h1>Login page</h1>
            <div className="row">
              <a className="btn btn-facebook btn-block" role="button">Continue with facebook</a>
            </div>
            <div className="row">
              <a className="btn btn-google btn-block btn-default" role="button">Continue with google</a>
            </div>
            <label htmlFor="uname">User name:</label>
            <input type="text"  name="uname" onChange={(e)=>{
              setUserName(e.target.value);
            }}/>
            <label htmlFor="pwd">Password :</label>
            <input type="password" name="pwd" onChange={(e)=>{
              setPassWord(e.target.value);
            }}/>
            <div className="row">
              <div className="checkRemember">
                <input type="checkbox" id="rememberMe"/>
                <label htmlFor="rememberMe">Remember me</label>
              </div>
                <button type="button" id="button" onClick={submitRequest}>Login</button>
            </div>
            
            <div className="row">
              <Link to='/account/register' style={registerStyle}>Register</Link>    
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default Account;