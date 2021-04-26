import "../App.css";
import Nav from "./Nav";
import { userApi } from "../App";
import User from "../models/User";



import { globalContext, GlobalProvider } from "../services/store";
import { useContext, useEffect, useState } from "react";
import Subscriptions from "../models/Subscriptions";

const accountDetails = {
  userName: "N Priyajit",
  dob: "13/05/1999",
  doj: "12/11/2010",
  subscribed: [
    {
      name: "something",
      daysLeft: "5days",
      status: "subscribed",
    },

    {
      name: "what",
      daysLeft: "9days",
      status: "subscribed",
    },
    {
      name: "anything",
      daysLeft: "10days",
      status: "unsubscribed",
    },
  ],
};

function MyAccount() {
  const id = sessionStorage.getItem("id");
  
  let [user, setUser] = useState(User);
 

  useEffect(() => {
    
    async function getData(){
      let req = await userApi.get("/getById/" + id);
      setUser(req.data);
    }
    getData();
  },[])
  
  

  const {name,email,dob,subscriptions}=user;



  const cards = subscriptions.map((item, index) => {
    return (
      <div
        className={
          "card " +
          (item.status.includes("unsubscribed") ? "unsubscribed" : "subscribed")
        }
        id={index}>
        <h4>{item.name}</h4>
        <h5>Days Left: {item.daysLeft}</h5>
        <h6
          style={{
            color: item.status.includes("unsubscribed") ? "#ccc" : "red",
          }}>
          {item.status}
        </h6>
      </div>
    );
  });

 

  return (
    <section id='myaccount'>
      <Nav />
      <h2>My Account</h2>
      <div className='myaccountdetails'>
        <div className='subscriptions'>{cards}</div>
        <div className='account-details'>
          <div className='name-icon'>N</div>
          <div className='details'>
          <li>Name: {name}</li>
            <li>Date Of Birth: {dob}</li>
            <li>Email Id: {email}</li>
            <li>Date of Join: {accountDetails.doj}</li>
            <li>Total subscriptions: {accountDetails.subscribed.length}</li>
          </div>
        </div>
      </div>
    </section>
  );
  
}
export default MyAccount;
