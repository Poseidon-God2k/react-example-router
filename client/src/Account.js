import React,{useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Axios from "axios";
import Register from './Register';


function Account() {
  
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route path="/account" exact component={Login}/>
        <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
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
      }).then(()=>{
        alert("Successful login");
      })
  }
  return (
    <div className="login">
        <div className="form">
          <h1>Login page</h1>
          
          <label htmlFor="uname">User name:</label>
          <input type="text"  name="uname" onChange={(e)=>{
            setUserName(e.target.value);
          }}/>
          <label htmlFor="pwd">Password :</label>
          <input type="password" name="pwd" onChange={(e)=>{
            setPassWord(e.target.value);
          }}/>
          
          <button type="button" id="button" onClick={submitRequest}>Login</button>
          <Link to='/register' style={registerStyle}>Register</Link>    
        </div>
      </div>
  );
}

export default Account;