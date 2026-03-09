function ProjectGallery(){

return(

<div className="section">

<h2>Project Visualizations</h2>

<div style={{
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap",
marginTop:"30px"
}}>

<div>

<img
src="/churn-dashboard.png"
style={{width:"300px",borderRadius:"10px"}}
/>

<p>Customer Churn Analysis</p>

</div>

<div>

<img
src="/sentiment-chart.png"
style={{width:"300px",borderRadius:"10px"}}
/>

<p>Sentiment Analysis</p>

</div>

<div>

<img
src="/sales-forecast.png"
style={{width:"300px",borderRadius:"10px"}}
/>

<p>Sales Forecast</p>

</div>

</div>

</div>

)

}

export default ProjectGallery