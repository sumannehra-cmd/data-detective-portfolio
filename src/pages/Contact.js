function Contact(){

return(

<div
style={{
padding:"120px 20px",
textAlign:"center"
}}
>

<h2 style={{
fontSize:"36px",
color:"#22c55e",
letterSpacing:"1px"
}}>
📂 Open Case
</h2>

<p style={{
color:"#94a3b8",
maxWidth:"620px",
margin:"20px auto",
lineHeight:"1.6"
}}>
Have a dataset that needs investigation?
Open a case file and the Data Detective will begin the analysis.
Every dataset hides a story — let's uncover it.
</p>

<div style={{
marginTop:"50px",
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap"
}}>

{/* Email */}

<div
style={{
background:"rgba(255,255,255,0.05)",
padding:"30px",
borderRadius:"14px",
width:"260px",
backdropFilter:"blur(10px)",
border:"1px solid rgba(255,255,255,0.1)",
transition:"0.3s",
boxShadow:"0 0 10px rgba(0,0,0,0.2)"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-6px)";
e.currentTarget.style.boxShadow="0 0 20px rgba(34,197,94,0.4)";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)";
e.currentTarget.style.boxShadow="0 0 10px rgba(0,0,0,0.2)";
}}
>

<h3>📧 Secure Channel</h3>

<p style={{marginTop:"10px",color:"#cbd5f5"}}>
Direct encrypted communication with the detective.
</p>

<a
href="mailto:suman.23@st.niituniversity.in"
style={{
color:"#22c55e",
textDecoration:"none",
display:"inline-block",
marginTop:"10px",
fontWeight:"600"
}}
>
Send Email
</a>

</div>


{/* LinkedIn */}

<div
style={{
background:"rgba(255,255,255,0.05)",
padding:"30px",
borderRadius:"14px",
width:"260px",
backdropFilter:"blur(10px)",
border:"1px solid rgba(255,255,255,0.1)",
transition:"0.3s",
boxShadow:"0 0 10px rgba(0,0,0,0.2)"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-6px)";
e.currentTarget.style.boxShadow="0 0 20px rgba(34,197,94,0.4)";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)";
e.currentTarget.style.boxShadow="0 0 10px rgba(0,0,0,0.2)";
}}
>

<h3>🔗 Intelligence Network</h3>

<p style={{marginTop:"10px",color:"#cbd5f5"}}>
Connect professionally and follow the investigations.
</p>

<a
href="https://www.linkedin.com/in/suman-nehra-0124a9298/"
target="_blank"
rel="noreferrer"
style={{
color:"#22c55e",
textDecoration:"none",
display:"inline-block",
marginTop:"10px",
fontWeight:"600"
}}
>
Open LinkedIn
</a>

</div>


{/* Github */}

<div
style={{
background:"rgba(255,255,255,0.05)",
padding:"30px",
borderRadius:"14px",
width:"260px",
backdropFilter:"blur(10px)",
border:"1px solid rgba(255,255,255,0.1)",
transition:"0.3s",
boxShadow:"0 0 10px rgba(0,0,0,0.2)"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-6px)";
e.currentTarget.style.boxShadow="0 0 20px rgba(34,197,94,0.4)";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)";
e.currentTarget.style.boxShadow="0 0 10px rgba(0,0,0,0.2)";
}}
>

<h3>💻 Evidence Repository</h3>

<p style={{marginTop:"10px",color:"#cbd5f5"}}>
Explore case files, investigation tools and project evidence.
</p>

<a
href="https://github.com/sumannehra-cmd"
target="_blank"
rel="noreferrer"
style={{
color:"#22c55e",
textDecoration:"none",
display:"inline-block",
marginTop:"10px",
fontWeight:"600"
}}
>
View GitHub
</a>

</div>

</div>

<p style={{
marginTop:"70px",
color:"#64748b",
fontSize:"14px",
fontStyle:"italic"
}}>
🕵️ Investigation tip: Behind every dataset lies a hidden pattern waiting to be discovered.
</p>

</div>

)

}

export default Contact;