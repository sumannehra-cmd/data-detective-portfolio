import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
);

function SalesChart(){

const data = {
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[
{
label:"Sales Forecast",
data:[120,150,170,200,220,260],
borderColor:"#38bdf8",
backgroundColor:"#38bdf8"
}
]
};

return(

<div style={{width:"600px",margin:"40px auto"}}>
<Line data={data}/>
</div>

)

}

export default SalesChart