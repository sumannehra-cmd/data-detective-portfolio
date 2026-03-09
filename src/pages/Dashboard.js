import ChurnChart from "../components/ChurnChart";
import SentimentChart from "../components/SentimentChart";
import SalesChart from "../components/SalesChart";
import AnimatedPage from "../components/AnimatedPage";

function Dashboard(){

return(

<AnimatedPage>

<div className="section">

<h2>Machine Learning Insights</h2>

<p>Insights from machine learning models</p>

<ChurnChart/>

<SentimentChart/>

<SalesChart/>

</div>
</AnimatedPage>

)

}

export default Dashboard