function Contact(){

return(

<div
style={{
padding:"120px 20px",
textAlign:"center"
}}
>

<h2 style={{fontSize:"36px"}}>
📂 Open Case File
</h2>

<p style={{
color:"#94a3b8",
maxWidth:"600px",
margin:"20px auto"
}}>
Need help uncovering insights from your data?
The Data Detective is always ready for a new investigation.
</p>

<div style={{
marginTop:"40px",
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap"
}}>

<div style={{
background:"rgba(255,255,255,0.05)",
padding:"30px",
borderRadius:"12px",
width:"260px",
backdropFilter:"blur(10px)",
border:"1px solid rgba(255,255,255,0.1)",
transition:"0.3s"
}}

onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
>

<h3>📧 Secure Channel</h3>

<p style={{marginTop:"10px"}}>
<a
href="mailto:suman.23@st.niituniversity.in"
style={{color:"#22c55e",textDecoration:"none"}}
>
Send Email
</a>
</p>

</div>


<div style={{
background:"rgba(255,255,255,0.05)",
padding:"30px",
borderRadius:"12px",
width:"260px",
backdropFilter:"blur(10px)",
border:"1px solid rgba(255,255,255,0.1)",
transition:"0.3s"
}}

onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
>

<h3>🔗 LinkedIn Network</h3>

<p style={{marginTop:"10px"}}>
<a
href="https://www.linkedin.com/in/suman-nehra-0124a9298/"
target="_blank"
rel="noreferrer"
style={{color:"#22c55e",textDecoration:"none"}}
>
View Profile
</a>
</p>

</div>


<div style={{
background:"rgba(255,255,255,0.05)",
padding:"30px",
borderRadius:"12px",
width:"260px",
backdropFilter:"blur(10px)",
border:"1px solid rgba(255,255,255,0.1)",
transition:"0.3s"
}}

onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
>

<h3>💻 Evidence Repository</h3>

<p style={{marginTop:"10px"}}>
<a
href="https://github.com/sumannehra-cmd"
target="_blank"
rel="noreferrer"
style={{color:"#22c55e",textDecoration:"none"}}
>
View GitHub
</a>
</p>

</div>

</div>

<p style={{
marginTop:"60px",
color:"#64748b",
fontSize:"14px"
}}>
🕵️ Every dataset hides a story. Let’s uncover it.
</p>

</div>

)

}

export default Contact;