function DataJourney(){

const chapters = [

{
title:"Chapter 1 — The Dataset Arrives",
desc:"Every investigation begins with understanding the dataset and its structure.",
tools:"Python, Pandas"
},

{
title:"Chapter 2 — Cleaning the Evidence",
desc:"Handling missing values, duplicates and preparing clean data.",
tools:"Pandas, NumPy"
},

{
title:"Chapter 3 — Exploring the Patterns",
desc:"Using visualization to discover hidden patterns inside the data.",
tools:"Matplotlib, Seaborn"
},

{
title:"Chapter 4 — Training the Model",
desc:"Machine learning models learn patterns and help make predictions.",
tools:"Scikit-learn"
},

{
title:"Chapter 5 — Insights & Predictions",
desc:"The model generates predictions and valuable insights.",
tools:"Machine Learning"
}

];

return(

<div style={{padding:"120px 20px",textAlign:"center"}}>

<h2>🧠 A Data Science Investigation</h2>

<div style={{
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
gap:"25px",
marginTop:"40px"
}}>

{chapters.map((step,index)=>(
<div key={index} className="caseFile">

<h3>{step.title}</h3>

<p style={{color:"#94a3b8"}}>
{step.desc}
</p>

<p style={{marginTop:"10px"}}>
🛠 {step.tools}
</p>

</div>
))}

</div>

</div>

)

}

export default DataJourney