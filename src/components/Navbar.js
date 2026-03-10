import { NavLink } from "react-router-dom";

function Navbar(){

const linkBase = {
  margin: "15px",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.2s"
};

return(

<div style={{
position:"sticky",
top:0,
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px",
background:"#1e293b",
color:"white",
zIndex:1000
}}>

<h2 style={{margin:0}}>🕵️ Data Detective</h2>

<div>

<NavLink
to="/"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#e2e8f0"
})}
>
Home
</NavLink>

<NavLink
to="/about"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#e2e8f0"
})}
>
About
</NavLink>

<NavLink
to="/projects"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#e2e8f0"
})}
>
Case Files
</NavLink>

<NavLink
to="/dashboard"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#e2e8f0"
})}
>
Data Lab
</NavLink>

<NavLink
to="/contact"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#e2e8f0"
})}
>
Contact
</NavLink>

<NavLink
to="/ml-demo"
style={{margin:"15px",color:"#e2e8f0",textDecoration:"none"}}
>
ML Demo
</NavLink>

</div>

</div>

)

}

export default Navbar;