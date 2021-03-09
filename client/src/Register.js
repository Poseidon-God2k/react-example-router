import React,{useState, useEffect} from 'react';
import './App.css';
import {Link, Route,Switch} from 'react-router-dom';
import Axios from "axios";

function Register(){
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
      Axios.post("http://localhost:8888/api/register", {
        uname:username, 
        pwd:password
        }).then(()=>{
          alert("Successful register");
        })
    }
      return (
        <div className="content">
        <div className="register">
          <div className="form">
            <h1>Register page</h1>
            
            <label htmlFor="uname">User name:</label>
            <input type="text"  name="uname" onChange={(e)=>{
              setUserName(e.target.value);
            }}/>
            <label htmlFor="pwd">Password :</label>
            <input type="password" name="pwd" onChange={(e)=>{
              setPassWord(e.target.value);
            }}/>
            
            <button type="button" id="button" onClick={submitRequest}>Register</button>
            <Link to='/account/login' style={registerStyle}>Login</Link>
          </div>
        </div>
        </div>
      )
  }
  export default Register;