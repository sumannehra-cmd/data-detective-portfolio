import { useEffect, useState } from "react";

function Contact(){

const [text,setText] = useState("");
const message = "Establishing secure communication channels...";

useEffect(()=>{

let i = 0;

const interval = setInterval(()=>{

setText(message.substring(0,i));
i++;

if(i > message.length){
clearInterval(interval);
}

},40);

return () => clearInterval(interval);

},[]);


return(

<div
style={{
padding:"120px 20px",
textAlign:"center"
}}
>

<h2 style={{
fontSize:"36px",
marginBottom:"10px"
}}>
🕵️ Communication Terminal
</h2>

<p style={{
color:"#22c55e",
fontFamily:"monospace",
marginBottom:"40px"
}}>
{text}
</p>


<div style={{
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap"
}}>

{/* EMAIL */}

<div className="detectiveCard">

<h3>📧 Secure Channel</h3>

<p>Direct encrypted communication.</p>

<a
href="mailto:suman.23@st.niituniversity.in"
className="detectiveLink"
>
Send Message
</a>

</div>


{/* LINKEDIN */}

<div className="detectiveCard">

<h3>🔗 LinkedIn Network</h3>

<p>Professional investigation network.</p>

<a
href="https://www.linkedin.com/in/suman-nehra-0124a9298/"
target="_blank"
rel="noreferrer"
className="detectiveLink"
>
Open Profile
</a>

</div>


{/* GITHUB */}

<div className="detectiveCard">

<h3>💻 Evidence Repository</h3>

<p>All case files and ML experiments.</p>

<a
href="https://github.com/sumannehra-cmd"
target="_blank"
rel="noreferrer"
className="detectiveLink"
>
View Evidence
</a>

</div>

</div>


<p style={{
marginTop:"70px",
color:"#64748b"
}}>
🕵️ Every dataset hides a story. Let’s uncover it.
</p>

</div>

)

}

export default Contact;