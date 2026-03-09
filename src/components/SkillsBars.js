import { motion } from "framer-motion";

const skills = [
{ name:"Python", level:85 },
{ name:"Machine Learning", level:80 },
{ name:"Data Analysis", level:75 },
{ name:"SQL", level:70 },
{ name:"NLP", level:65 }
];

function SkillsBars(){

return(

<div style={{
maxWidth:"700px",
margin:"80px auto",
padding:"20px"
}}>

<h2 style={{textAlign:"center"}}>Skills Overview</h2>

{skills.map((skill,index)=>(

<div key={index} style={{margin:"20px 0"}}>

<p>{skill.name}</p>

<div style={{
background:"#1e293b",
borderRadius:"6px",
overflow:"hidden"
}}>

<motion.div
initial={{width:0}}
animate={{width:`${skill.level}%`}}
transition={{duration:1}}
style={{
height:"10px",
background:"#22c55e"
}}
/>

</div>

</div>

))}

</div>

)

}

export default SkillsBars;