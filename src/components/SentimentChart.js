import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function SentimentChart(){

const data = {
labels:["Positive","Neutral","Negative"],
datasets:[
{
label:"Sentiment Distribution",
data:[60,25,15],
backgroundColor:[
"#22c55e",
"#facc15",
"#ef4444"
]
}
]
};

return(

<div style={{width:"500px",margin:"40px auto"}}>
<Pie data={data}/>
</div>

)

}

export default SentimentChart