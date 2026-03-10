import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { FaPython } from "react-icons/fa";
import { SiPandas, SiScikitlearn } from "react-icons/si";
import AnimatedPage from "../components/AnimatedPage";

function CaseFiles(){

const [selectedProject,setSelectedProject] = useState(null);
const [filter,setFilter] = useState("all");
const [search,setSearch] = useState("");

const projects = [

{
title:"Customer Churn Investigation",
category:"ml",
tools:"Python | Pandas | ML",
model:"Random Forest",
dataset:"Telecom Dataset (7000 records)",
accuracy:"87%",
status:"Closed Case",
github:"https://github.com/sumannehra-cmd/Customer-Churn-Prediction-Project.git"
},

{
title:"Customer Sentiment Intelligence",
category:"nlp",
tools:"Python | NLP | Machine Learning",
model:"Logistic Regression",
dataset:"Product Reviews Dataset",
accuracy:"82%",
status:"Investigation Ongoing",
github:"#"
},

{
title:"Sales Forecast Investigation",
category:"ml",
tools:"Python | Time Series | ML",
model:"ARIMA",
dataset:"Retail Sales Dataset",
accuracy:"TBD",
status:"Upcoming Case",
github:"#"
}

];

return(

<AnimatedPage>

<div className="section">

<h2>📊 Investigation Projects</h2>

<div style={{margin:"20px"}}>

<button onClick={()=>setFilter("all")}>
All
</button>

<button
onClick={()=>setFilter("ml")}
style={{marginLeft:"10px"}}
>
Machine Learning
</button>

<button
onClick={()=>setFilter("nlp")}
style={{marginLeft:"10px"}}
>
NLP
</button>

<input
type="text"
placeholder="Search projects..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
marginLeft:"20px",
padding:"8px 12px",
borderRadius:"6px",
border:"none"
}}
/>

</div>

<div className="grid">

{projects
.filter(project => filter === "all" || project.category === filter)
.filter(project =>
project.title.toLowerCase().includes(search.toLowerCase()) ||
project.tools.toLowerCase().includes(search.toLowerCase())
)
.map((project,index)=>(

<div
key={index}
className="card"
onClick={()=>setSelectedProject(project)}
style={{
backdropFilter:"blur(10px)",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.1)",
padding:"25px",
borderRadius:"12px",
width:"260px",
transition:"0.3s",
boxShadow:"0px 0px 20px rgba(34,197,94,0.2)",
cursor:"pointer"
}}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="scale(1.05)";
e.currentTarget.style.boxShadow="0px 0px 30px rgba(34,197,94,0.6)";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="scale(1)";
e.currentTarget.style.boxShadow="0px 5px 20px rgba(0,0,0,0.4)";
}}
>

<img
src={project.image}
alt={project.title}
style={{
width:"100%",
borderRadius:"8px",
marginBottom:"10px"
}}
/>

<h3>{project.title}</h3>

<p style={{color:"#94a3b8"}}>{project.tools}</p>

<p>
🧠 Model: {project.model}
</p>

<p>
📊 Dataset: {project.dataset}
</p>

<p>
⚡ Accuracy: {project.accuracy}
</p>

<p style={{color:"#22c55e"}}>
{project.status}
</p>

<a
href={project.github}
target="_blank"
rel="noreferrer"
>
<button style={{
marginTop:"10px",
padding:"8px 15px",
background:"#38bdf8",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}>
View Evidence
</button>
</a>

<div style={{marginTop:"10px"}}>

<FaPython size={20} style={{margin:"5px"}}/>

<SiPandas size={20} style={{margin:"5px"}}/>

<SiScikitlearn size={20} style={{margin:"5px"}}/>

</div>

<p style={{color:project.color}}>
{project.status}
</p>

</div>

))}

</div>

<ProjectModal
project={selectedProject}
closeModal={()=>setSelectedProject(null)}
/>

</div>

</AnimatedPage> 

)

}

export default CaseFiles;