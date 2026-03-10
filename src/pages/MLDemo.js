import { useState } from "react";

function MLDemo(){

const [tenure,setTenure] = useState("");
const [charges,setCharges] = useState("");
const [result,setResult] = useState("");

const predict = () => {

if(tenure === "" || charges === ""){
setResult("Please fill all fields");
return;
}

if(charges > 70 && tenure < 12){
setResult("High chance customer will churn");
}else{
setResult("Customer likely to stay");
}

};

return(

<div style={{padding:"80px",textAlign:"center"}}>

<h2>Try My ML Model</h2>

<p style={{color:"#94a3b8"}}>
Simple churn prediction demo
</p>

<div style={{marginTop:"40px"}}>

<input
type="number"
placeholder="Customer Tenure (months)"
value={tenure}
onChange={(e)=>setTenure(e.target.value)}
style={{padding:"10px",margin:"10px"}}
/>

<input
type="number"
placeholder="Monthly Charges"
value={charges}
onChange={(e)=>setCharges(e.target.value)}
style={{padding:"10px",margin:"10px"}}
/>

</div>

<button
onClick={predict}
style={{
marginTop:"20px",
padding:"10px 20px",
background:"#22c55e",
border:"none",
borderRadius:"6px"
}}
>
Predict
</button>

<h3 style={{marginTop:"30px",color:"#22c55e"}}>
{result}
</h3>

</div>

)

}

export default MLDemo;