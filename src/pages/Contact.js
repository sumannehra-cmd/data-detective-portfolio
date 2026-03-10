import { useState } from "react";

function Contact(){

const [submitted,setSubmitted] = useState(false);

const handleSubmit = (e)=>{
e.preventDefault();
setSubmitted(true);
};

return(

<div style={{
padding:"120px 20px",
textAlign:"center"
}}>

<h2 style={{fontSize:"36px"}}>
🕵️ Open Investigation
</h2>

<p style={{
color:"#94a3b8",
maxWidth:"600px",
margin:"20px auto"
}}>
Need help uncovering insights from your data?
Submit a case request and the Data Detective will begin the investigation.
</p>


{submitted ? (

<div style={{
marginTop:"40px",
color:"#22c55e",
fontSize:"20px"
}}>
✔ Investigation request received  
<br/>
The Data Detective will analyze the case shortly.
</div>

) : (

<form
onSubmit={handleSubmit}
style={{
maxWidth:"500px",
margin:"40px auto",
display:"flex",
flexDirection:"column",
gap:"15px"
}}
>

<input
placeholder="Agent Name"
required
style={inputStyle}
/>

<input
type="email"
placeholder="Secure Email"
required
style={inputStyle}
/>

<textarea
placeholder="Describe the Case..."
rows="4"
required
style={inputStyle}
/>

<button
type="submit"
style={{
padding:"12px",
background:"#22c55e",
border:"none",
borderRadius:"8px",
cursor:"pointer",
fontWeight:"bold"
}}
>
Submit Investigation
</button>

</form>

)}


<div style={{
marginTop:"70px",
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap"
}}>

<a
href="mailto:suman.23@st.niituniversity.in"
className="detectiveCard"
>
📧 Secure Email
</a>

<a
href="https://www.linkedin.com/in/suman-nehra-0124a9298/"
target="_blank"
rel="noreferrer"
className="detectiveCard"
>
🔗 LinkedIn Network
</a>

<a
href="https://github.com/sumannehra-cmd"
target="_blank"
rel="noreferrer"
className="detectiveCard"
>
💻 Evidence Repository
</a>

</div>

</div>

)

}

const inputStyle = {
padding:"10px",
borderRadius:"6px",
border:"1px solid #334155",
background:"#0f172a",
color:"white"
};

export default Contact;