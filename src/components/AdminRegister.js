import "../App.css";
import Nav from "./Nav";
import Admin from '../models/Admin'
import { useState } from "react";
import {adminApi} from '../App';

function AdminRegister() {

  const [user,setUser]=useState(Admin);
  function changeUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function register() {
    adminApi
      .post("/adminregister", user)
      .then((res) => window.location.href="/adminlogin")
      .catch((err) => alert(err));
  }
  return (
    <section id='register'>
      <Nav />
      <div className='login-container'>
        <h2>Admin Register</h2>
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
            <label>Password:</label>
            <input type='password' placeholder='Enter the password...'  name="password" value={user.password} onChange={changeUser}  />
          </div>
        </div>
        <div className='buttons'>
          <button type='button'  className='btn reset'>
            Reset
          </button>
          <button type='button' onClick={register} className='btn subscribe'>
            Submit
          </button>
        </div>
        <a className='login' href='/adminlogin'>
          Already an User? - Login
        </a>
      </div>
    </section>
  );
}

export default AdminRegister;
