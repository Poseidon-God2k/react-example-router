import React,{useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Axios from "axios";




function Login() {
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
    Axios.defaults.withCredentials = true;
    Axios.post("http://localhost:8888/api/login",{
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

export default Login;