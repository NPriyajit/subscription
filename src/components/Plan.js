import { useEffect, useState } from "react";
import "../App.css";
import {dateDiff} from '../services/utils';
import {adminApi, userApi} from '../App'
import User from "../models/User";
import Subscribe from "./Subscribe";

const plans =
  {
    id: 14,
    name: "Platinum",
    period: "40",
    desc:
      "Lorem ipsumm has been the industry's standard dummy text ever since the 1500sas been the industry's standard",
    price: "400",
  };

function Plan() {
  const [subscriptions,setSubs]=useState([]);

  useEffect(()=>{
    async function showAllData() {
      let req=await adminApi.get("/getAllSubscriptions");
        setSubs(req.data)
    }
    showAllData();

  },[]);
  
  function learnMore(id){
    if(id==null) window.location.href="/";
    else{
     
      window.sessionStorage.setItem("learn-id",id);
      window.location.href="/learnmore"
    }
  }

  const cards = subscriptions.map((item, index) => {
    return (
      <div id={index} className='plancard'>
        <h3>{item.name}</h3>
        <h5>Time period: {dateDiff(new Date().toLocaleDateString('en-GB'), item.dateOfEnd)}days</h5>
        <p>{plans.desc}</p>
        <div class='buttons'>
        
          <button type='button' onClick={()=>learnMore(item._id)} className='btn learn'>
            Learn More
          </button>
        </div>
      </div>
    );
  });
  
  return (
    <section id='plans'>
      <h2>Plans</h2>
      <div className='plancards'>{cards}</div>
    </section>
  );
  return <Subscribe/>
}

export default Plan;
