import { NavLink } from "react-router-dom";

function Navbar(){

const linkBase = {
  margin: "15px",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.25s",
  padding: "6px 10px",
  borderRadius: "6px"
};

return(

<div style={{
position:"sticky",
top:0,
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"18px 30px",
background:"rgba(15,23,42,0.95)",
backdropFilter:"blur(8px)",
borderBottom:"1px solid rgba(255,255,255,0.05)",
color:"white",
zIndex:1000
}}>

<h2 style={{
margin:0,
color:"#22c55e",
letterSpacing:"1px"
}}>
🕵️ Data Detective HQ
</h2>

<div>

<NavLink
to="/"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#cbd5f5",
boxShadow: isActive ? "0 0 10px rgba(34,197,94,0.4)" : "none"
})}
>
HQ
</NavLink>

<NavLink
to="/about"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#cbd5f5",
boxShadow: isActive ? "0 0 10px rgba(34,197,94,0.4)" : "none"
})}
>
Detective Profile
</NavLink>

<NavLink
to="/projects"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#cbd5f5",
boxShadow: isActive ? "0 0 10px rgba(34,197,94,0.4)" : "none"
})}
>
Case Files
</NavLink>

<NavLink
to="/dashboard"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#cbd5f5",
boxShadow: isActive ? "0 0 10px rgba(34,197,94,0.4)" : "none"
})}
>
Evidence Lab
</NavLink>

<NavLink
to="/ml-demo"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#cbd5f5",
boxShadow: isActive ? "0 0 10px rgba(34,197,94,0.4)" : "none"
})}
>
Prediction Engine
</NavLink>

<NavLink
to="/contact"
style={({isActive}) => ({
...linkBase,
color: isActive ? "#22c55e" : "#cbd5f5",
boxShadow: isActive ? "0 0 10px rgba(34,197,94,0.4)" : "none"
})}
>
Open Case
</NavLink>

<NavLink to="/terminal" style={{margin:"15px",color:"#e2e8f0"}}>
Terminal
</NavLink>

</div>

</div>

)

}

export default Navbar;