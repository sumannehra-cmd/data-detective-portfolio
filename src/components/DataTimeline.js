function DataTimeline(){

const steps = [
{
title:"Dataset Received",
desc:"A real-world dataset arrives for investigation. Understanding the structure and variables is the first step.",
tools:"Python, Pandas"
},
{
title:"Data Cleaning",
desc:"Handling missing values, fixing inconsistencies and preparing the dataset for analysis.",
tools:"Pandas, NumPy"
},
{
title:"Exploratory Data Analysis",
desc:"Visualizing patterns, distributions and correlations to understand what the data is telling.",
tools:"Matplotlib, Seaborn"
},
{
title:"Model Training",
desc:"Training machine learning models to learn patterns and make predictions.",
tools:"Scikit-learn"
},
{
title:"Insights & Prediction",
desc:"The trained model generates predictions and meaningful insights.",
tools:"Machine Learning"
}
];

return(

<div className="timelineSection">

<h2>📊 Data Investigation Timeline</h2>

<div className="timeline">

{steps.map((step,index)=>(
<div key={index} className="timelineItem">

<div className="timelineDot"></div>

<div className="timelineContent">
<h3>{step.title}</h3>

<p>{step.desc}</p>

<span className="timelineTools">
🛠 {step.tools}
</span>

</div>

</div>
))}

</div>

</div>

)

}

export default DataTimeline