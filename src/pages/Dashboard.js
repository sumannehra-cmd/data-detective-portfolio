import ChurnChart from "../components/ChurnChart";
import SentimentChart from "../components/SentimentChart";
import SalesChart from "../components/SalesChart";

function Dashboard(){

return(

<div className="section">

<h2>Machine Learning Insights</h2>

<p>Insights from machine learning models</p>

<ChurnChart/>

<SentimentChart/>

<SalesChart/>

</div>

)

}

export default Dashboard