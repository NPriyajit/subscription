import { useState } from "react";
import "../App.css";
import Nav from "./Nav";
import {userApi} from '../App';




function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  function changeStateValue(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function showValue() {
    userApi
      .post("/login", user)
      .then((res) => addToSession(res.data._id))
      .catch((err) => alert(err));
  }


  const addToSession=(id)=>{
   sessionStorage.setItem('id',id)
   window.location.href="/myaccount"
  }

  function reset(){
    setUser({ email: "", password: "" })
  }



  return (
    <section id='login'>
      <Nav />
      <div className='login-container'>
        <h2>Login</h2>
        <div className='inputfields'>
          <div className='inputfield'>
            <label>User Name:</label>
            <input
              type='text'
              placeholder='Enter the User name...'
              name='email'
              value={user.email}
              onChange={changeStateValue}
              required={true}
            />
          </div>
          <div className='inputfield'>
            <label>Password:</label>
            <input
              type='password'
              placeholder='Enter the password...'
              name='password'
              value={user.password}
              onChange={changeStateValue}
              required={true}
            />
          </div>
        </div>
        <div className='buttons'>
          <button type='button' onClick={reset} className='btn reset'>
            Reset
          </button>
          <button onClick={showValue} type='button' className='btn subscribe'>
            Submit
          </button>
        </div>
        <a className='register' href='/register'>
          Register?
        </a>
      </div>
    </section>
  );
}

export default Login;
