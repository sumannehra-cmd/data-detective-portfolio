import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ExperimentCard({title,category,image}){

const navigate = useNavigate();
const [hover,setHover] = useState(false);

return(

<div
onMouseEnter={()=>setHover(true)}
onMouseLeave={()=>setHover(false)}
onClick={()=>navigate("/projects")}
style={{
background:"#181818",
padding:"15px",
borderRadius:"8px",
cursor:"pointer",
transition:"0.3s",
position:"relative"
}}
>

<div
style={{
height:"160px",
borderRadius:"6px",
marginBottom:"15px",
backgroundImage:`url(${image})`,
backgroundSize:"cover",
backgroundPosition:"center",
boxShadow:"0px 8px 20px rgba(0,0,0,0.5)"
}}
>

{hover && (

<div
style={{
position:"absolute",
right:"25px",
bottom:"75px",
background:"#1DB954",
width:"50px",
height:"50px",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"20px",
boxShadow:"0px 8px 20px rgba(0,0,0,0.6)",
transition:"0.2s"
}}
>
▶
</div>

)}

</div>

<h3 style={{
fontSize:"16px",
marginBottom:"5px"
}}>
{title}
</h3>

<p style={{
color:"#b3b3b3",
fontSize:"14px"
}}>
{category}
</p>

</div>

)

}

export default ExperimentCard;