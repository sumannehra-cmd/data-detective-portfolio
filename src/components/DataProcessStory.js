function DataProcessStory(){

const steps = [

{
title:"Dataset Received",
desc:"Every investigation starts with raw data. Understanding the structure of the dataset is the first step.",
tools:"Python, Pandas"
},

{
title:"Data Cleaning",
desc:"Handling missing values, removing duplicates and preparing clean data for analysis.",
tools:"Pandas, NumPy"
},

{
title:"Exploratory Data Analysis",
desc:"Visualizing patterns, correlations and anomalies inside the dataset.",
tools:"Matplotlib, Seaborn"
},

{
title:"Model Training",
desc:"Training machine learning models to learn patterns and make predictions.",
tools:"Scikit-learn"
},

{
title:"Insights & Prediction",
desc:"Using the trained model to generate predictions and business insights.",
tools:"Machine Learning"
}

];

return(

<div style={{
padding:"100px 20px",
textAlign:"center"
}}>

<h2 style={{fontSize:"34px"}}>
🧠 How I Solve Data Problems
</h2>

<p style={{
color:"#94a3b8",
marginBottom:"50px"
}}>
A step-by-step process of turning raw data into insights.
</p>

<div style={{
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
gap:"25px"
}}>

{steps.map((step,index)=>(

<div
key={index}
style={{
width:"250px",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.1)",
borderRadius:"12px",
padding:"25px",
transition:"0.3s"
}}
>

<h3 style={{color:"#38bdf8"}}>
Step {index+1}
</h3>

<h4>{step.title}</h4>

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

export default DataProcessStory