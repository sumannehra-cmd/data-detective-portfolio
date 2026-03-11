function DataPipeline(){

const steps = [
"Dataset",
"Cleaning",
"Exploration",
"Model",
"Prediction"
];

return(

<div style={{padding:"120px 20px",textAlign:"center"}}>

<h2>📊 Data Science Pipeline</h2>

<p style={{color:"#94a3b8",marginBottom:"40px"}}>
How I turn raw data into predictions.
</p>

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
flexWrap:"wrap",
gap:"20px"
}}>

{steps.map((step,index)=>(
<div key={index} style={{display:"flex",alignItems:"center"}}>

<div style={{
padding:"20px 25px",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.1)",
borderRadius:"10px",
minWidth:"120px"
}}>
{step}
</div>

{index !== steps.length-1 && (
<div style={{
margin:"0 10px",
fontSize:"24px"
}}>
➡
</div>
)}

</div>
))}

</div>

</div>

)

}

export default DataPipeline