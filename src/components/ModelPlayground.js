import { useState } from "react";

function ModelPlayground(){

const [usage,setUsage] = useState(50);

function predictChurn(){

if(usage < 40){
return "High Churn Risk";
}

else{
return "Low Churn Risk";
}

}

return(

<div className="section">

<h2>ML Model Playground</h2>

<p>Adjust customer usage to see churn prediction</p>

<input
type="range"
min="0"
max="100"
value={usage}
onChange={(e)=>setUsage(e.target.value)}
style={{width:"300px"}}
/>

<p>Customer Usage Score: {usage}</p>

<h3 style={{color:"#22c55e"}}>

Prediction: {predictChurn()}

</h3>

</div>

)

}

export default ModelPlayground