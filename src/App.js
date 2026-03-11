import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import CaseFiles from "./pages/CaseFiles";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MLDemo from "./pages/MLDemo";
import Terminal from "./pages/Terminal";
import MLPlayground from "./pages/MLPlayground";
import ModelPlayer from "./components/ModelPlayer";

import { PlayerProvider } from "./context/PlayerContext";

function App() {

const [detectiveMode,setDetectiveMode] = useState(false);

useEffect(()=>{

const handleKey = (e) => {

if(e.key === "d" || e.key === "D"){
setDetectiveMode(true);

setTimeout(()=>{
setDetectiveMode(false);
},3000);

}

};

window.addEventListener("keydown",handleKey);

return () => {
window.removeEventListener("keydown",handleKey);
};

},[]);

return (

<PlayerProvider>

<div>

{detectiveMode && (

<div
style={{
position:"fixed",
top:"20px",
right:"20px",
background:"#0f172a",
color:"#22c55e",
padding:"15px 20px",
borderRadius:"8px",
boxShadow:"0 0 15px rgba(34,197,94,0.6)",
zIndex:9999
}}
>

🕵️ Detective Mode Activated
<br/>
Accessing Investigation Terminal...

</div>

)}

<BrowserRouter>

<Sidebar />

<div style={{marginLeft:"240px"}}>

<div style={{
position:"sticky",
top:0,
background:"#121212",
padding:"15px 30px",
borderBottom:"1px solid #222",
zIndex:10
}}>

<h3 style={{color:"#b3b3b3"}}>
Suman • Data Science Portfolio
</h3>

</div>

<Routes>

<Route path="/" element={<Home />} />
<Route path="/projects" element={<CaseFiles />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/contact" element={<Contact />} />

</Routes>

</div>

<ModelPlayer />

</BrowserRouter>

</div>

</PlayerProvider>

);

}

export default App;