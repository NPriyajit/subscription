import "../App.css";
import Nav from "./Nav";
import User from '../models/User'
import { useState } from "react";
import {userApi} from '../App';

function Register() {

  const [user,setUser]=useState(User);
  function changeUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function register() {
    userApi
      .post("/register", user)
      .then((res) => window.location.href="/login")
      .catch((err) => alert(err));
  }

  


  function reset(){
    setUser(User
    )
  }


  return (
    <section id='register'>
      <Nav />
      <div className='login-container'>
        <h2>Register</h2>
        <div className='inputfields'>
          <div className='inputfield'>
            <label>Full Name:</label>
            <input type='text' placeholder='Enter the Full name...' name="name" value={user.name} onChange={changeUser} />
          </div>
          <div className='inputfield'>
            <label>Email Id:</label>
            <input type='text' placeholder='Enter the Email id...'  name="email" value={user.email} onChange={changeUser} />
          </div>
          <div className='inputfield'>
            <label>Date Of Birth:</label>
            <input type='date' placeholder='Enter the Dob...'  name="dob" value={user.dob} onChange={changeUser}  />
          </div>
          <div className='inputfield'>
            <label>Password:</label>
            <input type='password' placeholder='Enter the password...'  name="password" value={user.password} onChange={changeUser}  />
          </div>
        </div>
        <div className='buttons'>
          <button type='button' onClick={reset} className='btn reset'>
            Reset
          </button>
          <button type='button' onClick={register}className='btn subscribe'>
            Submit
          </button>
        </div>
        <a className='login' href='/login'>
          Already an User? - Login
        </a>
      </div>
    </section>
  );
}

export default Register;
