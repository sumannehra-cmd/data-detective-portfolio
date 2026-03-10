import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Terminal(){

const navigate = useNavigate();

const [command,setCommand] = useState("");

const [logs,setLogs] = useState([
"> Data Detective Terminal v1.0",
"> Type 'help' to view commands"
]);

const runCommand = (cmd) => {

let newLogs = [...logs, "> " + cmd];

const c = cmd.toLowerCase();

if(c === "help"){
newLogs.push("scan dataset");
newLogs.push("Available Commands:");
newLogs.push("help");
newLogs.push("load cases");
newLogs.push("open case 1");
newLogs.push("open case 2");
newLogs.push("open dashboard");
newLogs.push("open ml");
newLogs.push("open contact");
}

else if(c === "load cases"){
newLogs.push("Case DS-001 : Customer Churn Investigation");
newLogs.push("Case DS-002 : Sentiment Analysis");
newLogs.push("Case DS-003 : Sales Forecast");
}

else if(c === "open case 1"){
newLogs.push("Opening Case File DS-001...");
setTimeout(()=>navigate("/projects"),700);
}

else if(c === "open case 2"){
newLogs.push("Opening Case File DS-002...");
setTimeout(()=>navigate("/projects"),700);
}

else if(c === "open dashboard"){
newLogs.push("Accessing Evidence Lab...");
setTimeout(()=>navigate("/dashboard"),700);
}

else if(c === "scan dataset"){

newLogs.push("Scanning dataset...");
newLogs.push("Detecting anomalies...");
newLogs.push("Pattern detected.");
newLogs.push("Launching Evidence Lab...");

setTimeout(()=>navigate("/dashboard"),1500);

}

else if(c === "open ml"){
newLogs.push("Launching Prediction Engine...");
setTimeout(()=>navigate("/ml-demo"),700);
}

else if(c === "open contact"){
newLogs.push("Opening Secure Channel...");
setTimeout(()=>navigate("/contact"),700);
}


else{
newLogs.push("Unknown command. Type 'help'.");
}

setLogs(newLogs);
};

const handleKey = (e) => {

if(e.key === "Enter"){
runCommand(command);
setCommand("");
}

};

return(

<div style={{
background:"#020617",
color:"#22c55e",
padding:"40px",
height:"100vh",
fontFamily:"monospace"
}}>

<h2>🕵️ Data Detective Terminal</h2>

<div style={{
marginTop:"20px",
background:"#000",
padding:"20px",
borderRadius:"8px",
height:"400px",
overflowY:"auto"
}}>

{logs.map((log,i)=>(
<p key={i}>{log}</p>
))}

</div>

<input
value={command}
onChange={(e)=>setCommand(e.target.value)}
onKeyDown={handleKey}
placeholder="Type command..."
style={{
marginTop:"20px",
width:"100%",
padding:"10px",
background:"#020617",
border:"1px solid #22c55e",
color:"#22c55e"
}}
/>

</div>

);

}

export default Terminal;