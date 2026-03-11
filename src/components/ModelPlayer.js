import { useState } from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

function ModelPlayer(){

const [playing,setPlaying] = useState(false);
const { currentModel } = useContext(PlayerContext);

return(

<div style={{
position:"fixed",
bottom:0,
left:240,
right:0,
height:"80px",
background:"#181818",
borderTop:"1px solid #282828",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"0 30px",
zIndex:100
}}>

{/* Model Info */}

<div>

<h4>
{currentModel ? currentModel.title : "No Model Selected"}
</h4>

<p>
{currentModel ? currentModel.category : "Click an experiment"}
</p>

</div>

{/* Play Button */}

<div>

<button
onClick={()=>setPlaying(!playing)}
style={{
background:"#1DB954",
border:"none",
width:"45px",
height:"45px",
borderRadius:"50%",
fontSize:"18px",
cursor:"pointer"
}}
>

{playing ? "❚❚" : "▶"}

</button>

</div>

</div>

)

}

export default ModelPlayer;