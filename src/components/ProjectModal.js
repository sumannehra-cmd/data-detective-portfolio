function ProjectModal({project, closeModal}){

if(!project) return null;

return(

<div style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.8)",
display:"flex",
justifyContent:"center",
alignItems:"center",
zIndex:1000
}}>

<div style={{
background:"#1e293b",
padding:"30px",
borderRadius:"12px",
maxWidth:"500px",
color:"white",
textAlign:"center",
boxShadow:"0px 10px 40px rgba(0,0,0,0.6)"
}}>

<h2>📂 Opening Case File...</h2>
<p>Analyzing Evidence...</p>

<h2>{project.title}</h2>

<img
src="/project.png"
alt="project"
style={{
width:"100%",
borderRadius:"8px",
marginTop:"15px"
}}
/>

<p style={{marginTop:"15px"}}>
{project.description}
</p>

<div style={{marginTop:"10px"}}>

<span style={{
background:"#22c55e",
padding:"5px 10px",
borderRadius:"5px",
margin:"5px"
}}>
Python
</span>

<span style={{
background:"#38bdf8",
padding:"5px 10px",
borderRadius:"5px",
margin:"5px"
}}>
Pandas
</span>

<span style={{
background:"#facc15",
padding:"5px 10px",
borderRadius:"5px",
margin:"5px"
}}>
Machine Learning
</span>

</div>

<div style={{marginTop:"20px"}}>

<a
href={project.github}
target="_blank"
rel="noreferrer"
>

<button style={{
margin:"5px",
padding:"10px 20px",
background:"#22c55e",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}>
GitHub
</button>

</a>

<button
style={{
margin:"5px",
padding:"10px 20px",
background:"#3b82f6",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}
>
Live Demo
</button>

</div>

<button
onClick={closeModal}
style={{
marginTop:"20px",
padding:"8px 15px",
background:"#ef4444",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}
>
Close
</button>

</div>

</div>

)

}

export default ProjectModal