import { NavLink } from "react-router-dom";

function Navbar(){

const linkBase={
margin:"15px",
textDecoration:"none",
fontWeight:"500",
transition:"0.2s"
};

return(

<div style={{
position:"sticky",
top:0,
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px",
background:"#020617",
color:"white",
zIndex:1000
}}>

<h2 style={{margin:0,color:"#38bdf8"}}>
🧠 Data Detective Lab
</h2>

<div>

<NavLink to="/" style={({isActive})=>({...linkBase,color:isActive?"#38bdf8":"#cbd5f5"})}>
Home
</NavLink>

<NavLink to="/about" style={({isActive})=>({...linkBase,color:isActive?"#38bdf8":"#cbd5f5"})}>
Profile
</NavLink>

<NavLink to="/projects" style={({isActive})=>({...linkBase,color:isActive?"#38bdf8":"#cbd5f5"})}>
Projects
</NavLink>

<NavLink to="/dashboard" style={({isActive})=>({...linkBase,color:isActive?"#38bdf8":"#cbd5f5"})}>
Data Lab
</NavLink>

<NavLink to="/contact" style={({isActive})=>({...linkBase,color:isActive?"#38bdf8":"#cbd5f5"})}>
Open Case
</NavLink>

<NavLink to="/terminal" style={({isActive})=>({...linkBase,color:isActive?"#38bdf8":"#cbd5f5"})}>
Console
</NavLink>

<NavLink
to="/playground"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#38bdf8" : "#e2e8f0"
})}
>
Playground
</NavLink>

</div>

</div>

)
}

export default Navbar