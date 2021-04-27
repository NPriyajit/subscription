import "../App.css";
import Subscriptions from "../models/Subscriptions";
import { adminApi, userApi } from "../App";
import { useEffect, useState } from "react";

function AllUserDetails() {


    const [users,setUsers]=useState([]);

    useEffect(()=>{
        async function showAllData() {
          let req=await userApi.get("/getAll");
          setUsers(req.data)
        }
        showAllData();
      },[]);
      

 const tds=[{name:'',dob:'',email:'',subs:''}];
 const subc=[];
 users.forEach((item, index) => {
     subc.length=0;
    item.subscriptions.forEach((subs, index) => {
        subc.push(subs.name)
    });
    tds.push({name:item.name,dob:item.dob,email:item.email,subs:subc.toString()});
});


const trs = tds.map((item, index) => {
    return (
      <tr>
            <td>{item.name}</td>
            <td>{item.dob} </td>
            <td>{item.email}</td>

            <td>
             {item.subs}
           </td>
     </tr>
    );
  });

  return (
    <section id='alluserdetails'>
      <table>
        <caption>Users Details</caption>
        <thead>
          <tr>
            <th scope='col'>User Name</th>
            <th scope='col'>Date of Birth</th>
            <th scope='col'>Contact</th>
            <th scope='col'>Subscribed To</th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </section>
  );
}

export default AllUserDetails;
