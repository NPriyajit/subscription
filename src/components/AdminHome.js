import logo from "../img/yoga.svg";
import Nav from "./Nav";
import Plan from "./Plan";
import "../App.css";
import Subscriptions from "../models/Subscriptions";
import { adminApi } from "../App";
import { useEffect, useState } from "react";

function AdminHome() {
  const [sub, setSub] = useState({name:"",dateOfEnd:""});

  function changeSubscriptions(e) {
    setSub({ ...sub, [e.target.name]: e.target.value });
  }
  function saveSub() {
    adminApi
      .post("/addSubscription", sub)
      .then((res) => window.location.href="/adminhome")
      .catch((err) => alert(err));
  }

  useEffect(()=>{
  async function showAllData() {
    adminApi
      .get("/getAllSubscriptions")
      .then((res) => window.location.href="/adminhome")
      .catch((err) => alert(err));
  }
  showAllData();
});


  return (
    <section id='login' className='adminhome'>
      <Nav />
      <h1 className="title">Admin Pannel</h1>
      <div className='adminhomepage'>
        <div className='login-container'>
          <h2>Add Plans</h2>
          <div className='inputfields'>
            <div className='inputfield'>
              <label>Plan Name:</label>
              <input
                type='text'
                placeholder='Enter the Name of Plan...'
                name='name'
                value={sub.name}
                onChange={changeSubscriptions}
              />
            </div>
            <div className='inputfield'>
              <label>Date of End:</label>
              <input
                type='date'
                name='dateOfEnd'
                value={sub.dateOfEnd}
                onChange={changeSubscriptions}
              />
            </div>
          </div>
          <div className='buttons'>
            <button type='button' className='btn reset'>
              Reset
            </button>
            <button onClick={saveSub} type='button' className='btn subscribe'>
              Submit
            </button>
          </div>
        </div>
        <div className='subscriptions'>
            <div className="card">
                <h1>Name</h1>
                <p>Date of End: 12/34/34</p>
            </div>
            
        
        </div>
      </div>
    </section>
  );
}

export default AdminHome;
