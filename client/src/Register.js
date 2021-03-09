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
            <div className="groupInput">
              <div className="labelGroup inputRegister">
              <label htmlFor="uname">What's your email?</label>
              </div>
              <input type="email"  id="email" name="email" placeholder="Enter your email." required className="input-type" onChange={(e)=>{
                setUserName(e.target.value);
              }}/>
            </div>
            
            <div className="groupInput">
              <div className="labelGroup inputRegister">
              <label htmlFor="password">Create a password</label>
              </div>
              <input type="password"  id="password" name="password" placeholder="Create a password." required className="input-type" onChange={(e)=>{
                setUserName(e.target.value);
              }}/>
            </div>
            
            <div className="groupInput">
              <div className="labelGroup inputRegister">
              <label htmlFor="displayname">What should we call you?</label>
              </div>
              <input type="text"  id="displayname" name="displayname" placeholder="Enter a profile name." required className="input-type" onChange={(e)=>{
                setUserName(e.target.value);
              }}/>
            </div>
            
            <div className="groupInput">
              <div className="labelGroup inputRegister">
              <label htmlFor="birthday">What's your date of birth?</label>
              </div>
              <input type="date"  id="birthday" name="birthday" required className="input-type" onChange={(e)=>{
                setUserName(e.target.value);
              }}/>
            </div>
            
            <div className="groupInput">
              <div className="labelGroup inputRegister">
              <label htmlFor="gender">What's your gender?</label>
              </div>
              <input type="radio" name="gender" id="gender" required="" value="male" aria-invalid="false" />
              <span>Male</span>
              <input type="radio" name="gender" id="gender" required="" value="female" aria-invalid="false" />
              <span>Female</span>
              <input type="radio" name="gender" id="gender" required="" value="neutral" aria-invalid="false" />
              <span>Non-binary</span>
            </div>

            <button type="button" id="button" onClick={submitRequest}>Register</button>
            <Link to='/account/login' style={registerStyle}>Login</Link>
          </div>
        </div>
        </div>
      )
  }
  export default Register;