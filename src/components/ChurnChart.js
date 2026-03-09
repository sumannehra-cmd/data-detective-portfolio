import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChurnChart(){

const data = {
labels:["Active Customers","Churned Customers"],
datasets:[
{
label:"Customer Distribution",
data:[800,200],
backgroundColor:["#22c55e","#ef4444"]
}
]
};

return(

<div style={{width:"600px",margin:"40px auto"}}>

<Bar data={data}/>

</div>

)

}

export default ChurnChart