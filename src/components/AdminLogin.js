import "../App.css";
import Nav from "./Nav";
import { adminApi } from "../App";
import { useState } from "react";

function AdminLogin() {
  let adminId = sessionStorage.getItem("admin-id");
  if (adminId) {
    window.location.href = "/adminhome";
  }

  const [admin, setAdmin] = useState({ email: "", password: "" });

  function changeStateValue(e) {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  }
  function getLoggin() {
    adminApi
      .post("/adminlogin", admin)
      .then((res) => addToSession(res.data._id))
      .catch((err) => alert(err));
  }

  const addToSession = (id) => {
    sessionStorage.setItem("admin-id", id);
    window.location.href = "/adminhome";
  };

  function reset() {
    setAdmin({ email: "", password: "" });
  }

  return (
    <section id='login'>
      <Nav />
      <div className='login-container adminlogin'>
        <h2>Admin Login</h2>
        <div className='inputfields'>
          <div className='inputfield'>
            <label>Admin Name:</label>
            <input
              type='text'
              placeholder='Enter the Email...'
              name='email'
              value={admin.email}
              onChange={changeStateValue}
            />
          </div>
          <div className='inputfield'>
            <label>Password:</label>
            <input
              type='password'
              placeholder='Enter the password...'
              name='password'
              value={admin.password}
              onChange={changeStateValue}
            />
          </div>
        </div>
        <div className='buttons'>
          <button type='button' onClick={reset} className='btn reset'>
            Reset
          </button>
          <button type='button' onClick={getLoggin} className='btn subscribe'>
            Submit
          </button>
        </div>
        <a className='register' href='/adminregister'>
          New Admin?
        </a>
      </div>
    </section>
  );
}

export default AdminLogin;
