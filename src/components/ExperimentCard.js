import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

function ExperimentCard({title,category}){

const navigate = useNavigate();
const [hover,setHover] = useState(false);
const { setCurrentModel } = useContext(PlayerContext);

return(

<div
onMouseEnter={()=>setHover(true)}
onMouseLeave={()=>setHover(false)}
onClick={()=>{
setCurrentModel({
title:title,
category:category
});
navigate("/projects");
}}
style={{
background:"#181818",
padding:"15px",
borderRadius:"8px",
cursor:"pointer",
transition:"all 0.25s ease",
transform: hover ? "translateY(-6px)" : "translateY(0)",
boxShadow: hover
? "0 10px 30px rgba(0,0,0,0.6)"
: "0 4px 12px rgba(0,0,0,0.3)"
}}
>

<div style={{
height:"150px",
background:"#282828",
borderRadius:"6px",
position:"relative",
marginBottom:"15px"
}}>

{hover && (

<div style={{
position:"absolute",
right:"10px",
bottom:"10px",
background:"#1DB954",
width:"45px",
height:"45px",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"18px"
}}>
▶
</div>

)}

</div>

<h3 style={{fontSize:"16px"}}>
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