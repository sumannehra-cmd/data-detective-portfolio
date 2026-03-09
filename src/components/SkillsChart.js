import {
Chart as ChartJS,
RadialLinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
Legend
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
RadialLinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
Legend
);

function SkillsChart(){

const data = {
labels:[
"Python",
"Machine Learning",
"Data Analysis",
"SQL",
"Data Visualization"
],

datasets:[
{
label:"Skill Level",
data:[90,80,85,75,80],
backgroundColor:"rgba(34,197,94,0.2)",
borderColor:"#22c55e",
borderWidth:2
}
]
};

return(

<div className="section">

<h2>Skills Overview</h2>

<div style={{width:"400px",margin:"auto"}}>

<Radar data={data}/>

</div>

</div>

)

}

export default SkillsChart