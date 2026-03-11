import { useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

function MLPlayground(){

const [tenure,setTenure] = useState("");
const [monthly,setMonthly] = useState("");
const [prediction,setPrediction] = useState(null);

function runModel(e){
e.preventDefault();

/* Simple demo logic (mock model) */
let score = 0;

if(Number(tenure) < 12) score += 1;
if(Number(monthly) > 70) score += 1;

if(score >= 1){
setPrediction("⚠ High Churn Risk");
}else{
setPrediction("✅ Customer Likely to Stay");
}
}

return(

<AnimatedPage>

<div style={{
padding:"120px 20px",
textAlign:"center"
}}>

<h1>🧠 ML Model Playground</h1>

<p style={{
color:"#94a3b8",
marginBottom:"40px"
}}>
Experiment with a simple churn prediction model.
Enter customer features to simulate prediction.
</p>

<form
onSubmit={runModel}
style={{
maxWidth:"400px",
margin:"auto",
display:"flex",
flexDirection:"column",
gap:"15px"
}}
>

<input
type="number"
placeholder="Customer Tenure (months)"
value={tenure}
onChange={(e)=>setTenure(e.target.value)}
style={{
padding:"10px",
borderRadius:"6px",
border:"none"
}}
/>

<input
type="number"
placeholder="Monthly Charges ($)"
value={monthly}
onChange={(e)=>setMonthly(e.target.value)}
style={{
padding:"10px",
borderRadius:"6px",
border:"none"
}}
/>

<button
type="submit"
style={{
padding:"10px",
background:"#38bdf8",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}
>
Run Prediction
</button>

</form>

{prediction && (

<div style={{
marginTop:"30px",
fontSize:"20px",
fontWeight:"bold",
color:"#22c55e"
}}>
{prediction}
</div>

)}

</div>

</AnimatedPage>

)
}

export default MLPlayground;