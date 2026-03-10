import { useState } from "react";

function Terminal(){

const [command,setCommand] = useState("");
const [logs,setLogs] = useState([
"> Data Detective Terminal Initialized",
"> Type 'help' to see commands"
]);

const handleCommand = (e) => {

if(e.key === "Enter"){

let newLogs = [...logs, "> " + command];

if(command === "help"){
newLogs.push("Commands:");
newLogs.push("load cases");
newLogs.push("open case 1");
}

else if(command === "load cases"){
newLogs.push("Case DS-001 : Customer Churn Investigation");
newLogs.push("Case DS-002 : Sentiment Analysis");
newLogs.push("Case DS-003 : Sales Forecast");
}

else if(command === "open case 1"){
newLogs.push("Opening Case File...");
newLogs.push("Evidence: Customer churn dataset analyzed");
}

else{
newLogs.push("Unknown command");
}

setLogs(newLogs);
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
onKeyDown={handleCommand}
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

)

}

export default Terminal;