import logo from "../img/yoga.svg";
import Nav from "./Nav";
import Plan from "./Plan";
import "../App.css";
import Subscriptions from "../models/Subscriptions";
import { adminApi } from "../App";
import { useEffect, useState } from "react";
import AllUserDetails from "./AllUserDetails";

function AdminHome() {
  const [sub, setSub] = useState({name:"",dateOfEnd:""});
  const [subscriptions,setSubs]=useState([]);

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
    let req=await adminApi.get("/getAllSubscriptions");
      setSubs(req.data)
  }
  showAllData();
},[]);



async function deletePlan(id){
    let item=await adminApi.delete('/deleteSubscription/'+id);
    console.log(item)
    alert("deleted succsessfully")
    window.location.href="/adminhome"
}

const cards = subscriptions.map((item, index) => {
    return (
       <div className="card" id={index}>
       <h1>{item.name}</h1>
       <p>Date of End: {item.dateOfEnd}</p>
       <button class="deleteplan" onClick={() =>  deletePlan(item._id)}>Delete</button>
   </div>
    );
  });

  function logout(){
    sessionStorage.removeItem('admin-id')
    window.location.href="/adminlogin"
  }

  return (
      <div>
    <section id='login' className='adminhome'>
      <Nav />
      <h1 className="title">Admin Pannel</h1>
      <button type="button" className="deleteplan logout" onClick={logout}>Logout Admin</button>
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
           {cards} 
        
        </div>
      </div>
    </section>
    <AllUserDetails/>
    </div>
  );
}

export default AdminHome;
