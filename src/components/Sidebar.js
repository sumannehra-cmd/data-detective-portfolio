import { NavLink } from "react-router-dom";

function Sidebar(){

const linkStyle = ({isActive}) => ({
display:"block",
padding:"12px 20px",
color: isActive ? "#1DB954" : "#b3b3b3",
textDecoration:"none",
fontSize:"15px",
fontWeight:"500"
});

return(

<div style={{
position:"fixed",
left:0,
top:0,
width:"240px",
height:"100vh",
background:"#000",
paddingTop:"20px",
borderRight:"1px solid #222"
}}>

<h2 style={{
color:"white",
padding:"0 20px",
marginBottom:"30px"
}}>
🎧 Suman
</h2>

<NavLink to="/" style={linkStyle}>
Home
</NavLink>

<NavLink to="/projects" style={linkStyle}>
Experiments
</NavLink>

<NavLink to="/dashboard" style={linkStyle}>
Models
</NavLink>

<NavLink to="/contact" style={linkStyle}>
Contact
</NavLink>

</div>

)

}

export default Sidebar;