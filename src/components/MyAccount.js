import "../App.css";
import Nav from "./Nav";
import { userApi } from "../App";
import User from "../models/User";
import { useContext, useEffect, useState } from "react";
import { dateDiff } from "../services/utils";




function MyAccount() {
  const id = sessionStorage.getItem("id");

  if(id==null || id==""){
  
    window.location.href="/login"
  }
  
  let [user, setUser] = useState(User);
 

  useEffect(() => {
    
    async function getData(){
      let req = await userApi.get("/getById/" + id);
      setUser(req.data);
    }
    getData();
  },[])
  
  
const {name,email,dob,subscriptions}=user;

let cards =<h1>No Subscriptions found!</h1>

if(subscriptions.length!=0){
 cards = subscriptions.map((item, index) => {
    return (
      <div
        className={
          "card " +
          (item.status.includes("unsubscribed") ? "unsubscribed" : "subscribed")
        }
        id={index}>
        <h4>{item.name}</h4>
        <h5>Subscribe Date:  {item.dateOfSubscription}</h5>
        <h5>End of Subscription : {item.dateOfEnd}</h5>
        <h6
          style={{
            color: item.status.includes("unsubscribed") ? "#ccc" : "red",
          }}>
          {item.status}
        </h6>
      </div>
    );
  });
}
  function logout(){
    sessionStorage.removeItem('id')
    window.location.href="/login"
  }


  return (
    <section id='myaccount'>
      <Nav />
      <h2>My Account</h2>
      <button type="button" className="deleteplan logout" onClick={logout}>Logout User</button>
      <div className='myaccountdetails'>
        <div className='subscriptions'>{cards}</div>
        <div className='account-details'>
          <div className='name-icon'>{name.substr(0,1).toUpperCase()}</div>
          <div className='details'>
          <li>Name: {name.toUpperCase()}</li>
            <li>Date Of Birth: {dob}</li>
            <li>Email Id: {email}</li>
            <li>Total subscriptions: {subscriptions.length}</li>
          </div>
        </div>
      </div>
    </section>
  );
  
}
export default MyAccount;
