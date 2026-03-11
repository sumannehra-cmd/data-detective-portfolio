import { motion } from "framer-motion";
import { useState } from "react";

function AnimatedPipeline(){

const [active,setActive] = useState(null);

const steps = [
{
icon:"📂",
title:"Dataset",
desc:"Understanding raw data structure.",
detail:"I start by inspecting datasets, checking columns, data types and distributions.",
tools:"Python, Pandas"
},
{
icon:"🧹",
title:"Cleaning",
desc:"Handling missing values & preprocessing.",
detail:"Handling missing values, duplicates and feature engineering.",
tools:"Pandas, NumPy"
},
{
icon:"📊",
title:"Exploration",
desc:"Finding patterns with EDA.",
detail:"Using charts to understand relationships and patterns in the data.",
tools:"Matplotlib, Seaborn"
},
{
icon:"🧠",
title:"Model",
desc:"Training ML algorithms.",
detail:"Building predictive models like Random Forest and Logistic Regression.",
tools:"Scikit-learn"
},
{
icon:"🔮",
title:"Prediction",
desc:"Generating insights.",
detail:"Using trained models to make predictions and extract insights.",
tools:"Machine Learning"
}
];

return(

<div style={{padding:"120px 20px",textAlign:"center"}}>

<h2>📊 Data Investigation Pipeline</h2>

<p style={{color:"#94a3b8",marginBottom:"50px"}}>
How I transform raw data into insights.
</p>

<div style={{
display:"flex",
justifyContent:"center",
flexWrap:"wrap",
gap:"25px"
}}>

{steps.map((step,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:index*0.2}}
viewport={{once:true}}
onClick={()=>setActive(step)}
style={{
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.1)",
borderRadius:"12px",
padding:"25px",
width:"200px",
cursor:"pointer"
}}
>

<div style={{fontSize:"32px"}}>
{step.icon}
</div>

<h3>{step.title}</h3>

<p style={{color:"#94a3b8"}}>
{step.desc}
</p>

</motion.div>

))}

</div>

{active && (

<div style={{
marginTop:"50px",
maxWidth:"600px",
marginInline:"auto",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.1)",
borderRadius:"12px",
padding:"30px"
}}>

<h3>{active.icon} {active.title}</h3>

<p style={{color:"#94a3b8"}}>
{active.detail}
</p>

<p style={{marginTop:"10px"}}>
🛠 Tools: {active.tools}
</p>

<button
onClick={()=>setActive(null)}
style={{
marginTop:"20px",
padding:"8px 15px",
background:"#38bdf8",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}
>
Close
</button>

</div>

)}

</div>

)

}

export default AnimatedPipeline;