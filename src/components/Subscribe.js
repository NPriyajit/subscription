import "../App.css";
import Nav from "./Nav";
import { adminApi, userApi } from "../App";
import User from "../models/User";
import { useEffect, useState } from "react";
import Home from "./Home";
import Subscriptions from "../models/Subscriptions";
import userEvent from "@testing-library/user-event";

function Subscribe(){
    const [user,setUser]=useState(User);
    const [sub,setSub]=useState();
    let id=sessionStorage.getItem("id");
    let learnid=sessionStorage.getItem("learn-id");

    if(learnid==null || id==null){
        window.location.href="/login";
    }
    useEffect(()=>{
        async function getSubscription(){
         let req= await adminApi.get("/getSubscriptionById/"+learnid);
         setSub(req.data)
    }

     getSubscription();
   },[]);

   const [check,setCheck]=useState(false);

 useEffect(()=>{
     if(check){
        async function subscribe(){
            let req= await userApi.put("/subscribe/"+sessionStorage.getItem("id"),
            {
                name:sub.name,
                dateOfEnd:sub.dateOfEnd,
                status:'subscribed',
                desc:sub.desc,
                dateOfSubscription:new Date().toLocaleDateString('en-GB')
            }
            );
            setUser(req.data)
            alert("Succssfully Subscribed to plan")
            window.location.href="/myaccount"
    }
    subscribe();
    }
 },[check])
    

                
  

    if(sub!=null)
    return(

        <section id="home" class="subscribers">
          
            <Nav/>
            <h1>Plan Detail</h1>
            <div class="centered">
            
            <h3>{sub.name}</h3>
            <p>{sub.desc}</p>
            <p>Date of End: {sub.dateOfEnd}</p>
            <button class="btn subscribe" onClick={()=>setCheck(true)}>Subscribe</button>
            </div>
        </section>
    );
    return <Home/>
}   


export default Subscribe;