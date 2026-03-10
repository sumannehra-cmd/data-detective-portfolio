import { Typewriter } from "react-simple-typewriter";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import AnimatedPage from "../components/AnimatedPage";
import ProjectGallery from "../components/ProjectGallery";
import SkillsBars from "../components/SkillsBars";
import ExperienceTimeline from "../components/ExperienceTimeline";
import GithubStats from "../components/GithubStats";

function Home(){

const particlesInit = async (main) => {
await loadFull(main);
};

return(

<AnimatedPage>

<div>

<Particles
id="tsparticles"
init={particlesInit}
options={{
background:{color:{value:"#0f172a"}},
fpsLimit:60,
particles:{
color:{value:"#22c55e"},
links:{
color:"#22c55e",
distance:150,
enable:true,
opacity:0.3,
width:1
},
move:{enable:true,speed:1},
number:{value:60},
opacity:{value:0.5},
shape:{type:"circle"},
size:{value:{min:1,max:3}}
}
}}
style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
zIndex:-1
}}
/>

<div style={{
textAlign:"center",
padding:"120px 20px"
}}>

<h1 style={{
fontSize:"48px",
animation:"fadeUp 1s ease"
}}>
Hi, I'm Suman
</h1>

<h2 style={{color:"#22c55e",marginTop:"20px"}}>

<Typewriter
words={[
"Data Scientist",
"Machine Learning Enthusiast",
"Data Analyst"
]}
loop={true}
cursor
cursorStyle="|"
typeSpeed={80}
deleteSpeed={50}
delaySpeed={1500}
/>

</h2>

<p style={{
maxWidth:"600px",
margin:"20px auto",
color:"#94a3b8"
}}>
I analyze datasets, uncover patterns, and build
machine learning models to solve real-world problems.
</p>

<a href="/resume.pdf" target="_blank" rel="noreferrer">

<button
style={{
padding:"12px 24px",
background:"#22c55e",
border:"none",
borderRadius:"8px",
cursor:"pointer",
transition:"0.3s",
boxShadow:"0 0 10px rgba(34,197,94,0.3)"
}}

onMouseEnter={(e)=>{
e.target.style.transform="translateY(-3px)";
e.target.style.boxShadow="0 0 20px rgba(34,197,94,0.7)";
}}

onMouseLeave={(e)=>{
e.target.style.transform="translateY(0)";
e.target.style.boxShadow="0 0 10px rgba(34,197,94,0.3)";
}}
>
Download Resume

</button>

</a>

</a>

</div>

<ProjectGallery />

<SkillsBars />

<ExperienceTimeline />

<GithubStats />

</div>

</AnimatedPage>

)

}

export default Home;