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

<img src="/churn.png" alt="Customer churn prediction visualization" />

<p>Customer Churn Analysis</p>

</div>

<div>

<img src="/sentiment.png" alt="Sentiment analysis visualization" />

<p>Sentiment Analysis</p>

</div>

<div>

<img src="/forecast.png" alt="Sales forecasting visualization" />

<p>Sales Forecast</p>

</div>

</div>

</div>

)

}

export default ProjectGallery