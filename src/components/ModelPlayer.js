import { usePlayer } from "../context/PlayerContext";

function ModelPlayer(){

const {currentModel} = usePlayer();

if(!currentModel) return null;

return(

<div
style={{
position:"fixed",
bottom:0,
left:0,
right:0,
height:"90px",
background:"#181818",
borderTop:"1px solid #282828",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"0 30px",
color:"white",
zIndex:999
}}
>

<div>

<h4 style={{margin:0}}>
{currentModel.title}
</h4>

<p style={{
margin:0,
color:"#b3b3b3",
fontSize:"14px"
}}>
{currentModel.category}
</p>

</div>

<div style={{fontSize:"22px"}}>

⏮ ▶ ⏭

</div>

<div style={{
fontSize:"14px",
color:"#b3b3b3"
}}>
Model Running
</div>

</div>

)

}

export default ModelPlayer;