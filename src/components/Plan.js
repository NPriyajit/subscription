import '../App.css';


const plans=[
    {
        id:12,
        name:"Silver",
        period:"20",
        desc:"Lorem ipsumm has been the industry's standard dummy text ever since the 1500sas been the industry's standard",
        price:"300"
    },
    {
        id:13,
        name:"Gold",
        period:"30",
        desc:"Lorem ipsumm has been the industry's standard dummy text ever since the 1500sas been the industry's standard",
        price:"350"
    },
    {
        id:14,
        name:"Platinum",
        period:"40",
        desc:"Lorem ipsumm has been the industry's standard dummy text ever since the 1500sas been the industry's standard",
        price:"400"
    },
];

function Plan(){


    
 const cards=plans.map((item,index)=>{
    return (
        <div id={index} className="plancard">
        <h3>{item.name}</h3>
        <h5>Time period: {item.period}hrs</h5>
        <p>{item.desc}</p>
        <div class='buttons'>
           <button type="button" className="btn subscribe">Buy-{item.price}/-</button>
           <button type="button" className="btn learn">Learn More</button>
        </div>
     </div> 
    );
});

return (
    <section id="plans">
        <h2>Plans</h2>
        <div className="plancards">
          {cards}
        </div>
        </section>   
);
}

export default Plan;