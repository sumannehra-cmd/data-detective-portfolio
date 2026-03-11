import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ExperimentCard from "../components/ExperimentCard";

function Home(){

const navigate = useNavigate();
const [search,setSearch] = useState("");

const experiments = [
{
title:"Customer Churn Prediction",
category:"Machine Learning",
link:"/projects",
image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71"
},
{
title:"Sentiment Analysis",
category:"NLP",
link:"/projects",
image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c"
},
{
title:"Sales Forecasting",
category:"Time Series",
link:"/projects",
image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
}
];

return(

<div style={{
padding:"30px",
color:"white"
}}>

<div style={{
background:"linear-gradient(180deg,#1DB954 0%, #121212 60%)",
padding:"40px 30px",
borderRadius:"10px",
marginBottom:"30px"
}}>

<h1 style={{fontSize:"32px"}}>
Good Evening
</h1>
<input
type="text"
placeholder="Search experiments..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
width:"100%",
maxWidth:"400px",
padding:"10px 15px",
borderRadius:"20px",
border:"none",
background:"#242424",
color:"white",
marginBottom:"30px"
}}
/>

<p style={{color:"#b3b3b3"}}>
Welcome to Suman's Data Experiments
</p>

</div>

{/* Featured Model */}

<div style={{
background:"#181818",
padding:"25px",
borderRadius:"10px",
marginBottom:"40px"
}}>

<h2>Featured Model</h2>

<h3 style={{marginTop:"10px"}}>
Customer Churn Prediction
</h3>

<p style={{color:"#b3b3b3"}}>
Random Forest Model • Accuracy 87%
</p>

<button
onClick={()=>navigate("/projects")}
style={{
marginTop:"15px",
background:"#1DB954",
border:"none",
padding:"10px 18px",
borderRadius:"20px",
cursor:"pointer"
}}
>
View Experiment
</button>

</div>

{/* Top Experiments */}

<h2 style={{marginBottom:"20px"}}>
Top Experiments
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
gap:"20px"
}}
>

{experiments
.filter(exp =>
exp.title.toLowerCase().includes(search.toLowerCase())
)
.map((exp,index)=>(

<ExperimentCard
key={index}
title={exp.title}
category={exp.category}
image={exp.image}
/>
))}

</div>

{/* Data Library */}

<h2 style={{
marginTop:"50px",
marginBottom:"20px"
}}>
Your Data Library
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
gap:"20px"
}}>

<ExperimentCard
title="Machine Learning Models"
category="Collection"
/>

<ExperimentCard
title="Data Analysis Projects"
category="Collection"
/>

<ExperimentCard
title="Data Visualizations"
category="Collection"
/>

</div>

</div>

)

}

export default Home;