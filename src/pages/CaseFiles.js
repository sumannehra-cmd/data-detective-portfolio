import { useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

function CaseFiles(){

const [selected,setSelected] = useState(null);

const cases = [

{
id:"DS-001",
title:"Customer Churn Investigation",
desc:"Predicting telecom customer churn using machine learning.",
tools:"Python • Pandas • Random Forest",
accuracy:"87%",
github:"https://github.com/sumannehra-cmd/Customer-Churn-Prediction-Project.git"
},

{
id:"DS-002",
title:"Sentiment Intelligence",
desc:"Analyzing customer sentiment from text reviews.",
tools:"Python • NLP • Logistic Regression",
accuracy:"82%",
github:"#"
},

{
id:"DS-003",
title:"Sales Forecast Analysis",
desc:"Predicting future sales trends using time series models.",
tools:"Python • ARIMA • Time Series",
accuracy:"TBD",
github:"#"
}

];

return(

<AnimatedPage>

<div style={{padding:"120px 20px",textAlign:"center"}}>

<h1>🗂 Investigation Board</h1>

<p style={{color:"#94a3b8"}}>
Every dataset becomes a case file.
</p>

<div style={{
display:"flex",
justifyContent:"center",
flexWrap:"wrap",
gap:"25px",
marginTop:"40px"
}}>

{cases.map((c)=>(
<div
key={c.id}
onClick={()=>setSelected(c)}
style={{
width:"260px",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.1)",
borderRadius:"12px",
padding:"25px",
cursor:"pointer",
transition:"0.3s"
}}
>

<h3>📂 Case {c.id}</h3>

<h4>{c.title}</h4>

<p style={{color:"#94a3b8"}}>
{c.desc}
</p>

<p style={{marginTop:"10px"}}>
🛠 {c.tools}
</p>

<p style={{color:"#22c55e"}}>
⚡ Accuracy: {c.accuracy}
</p>

</div>
))}

</div>

{/* Modal */}

{selected && (

<div style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.8)",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}>

<div style={{
background:"#020617",
padding:"40px",
borderRadius:"12px",
maxWidth:"500px",
textAlign:"center"
}}>

<h2>{selected.title}</h2>

<p style={{color:"#94a3b8"}}>
{selected.desc}
</p>

<p style={{marginTop:"15px"}}>
Tools: {selected.tools}
</p>

<p style={{color:"#22c55e"}}>
Accuracy: {selected.accuracy}
</p>

<a
href={selected.github}
target="_blank"
rel="noreferrer"
>

<button style={{
marginTop:"20px",
padding:"10px 20px",
background:"#38bdf8",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}>
View Code
</button>

</a>

<br/>

<button
onClick={()=>setSelected(null)}
style={{
marginTop:"20px",
padding:"8px 15px",
background:"#1e293b",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}
>
Close Case
</button>

</div>

</div>

)}

</div>

</AnimatedPage>

)

}

export default CaseFiles;   