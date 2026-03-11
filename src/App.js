import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import CaseFiles from "./pages/CaseFiles";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MLDemo from "./pages/MLDemo";
import Terminal from "./pages/Terminal";
import MLPlayground from "./pages/MLPlayground";

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

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/projects" element={<CaseFiles />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/contact" element={<Contact />} />

<Route path="/ml-demo" element={<MLDemo />} />

<Route path="/terminal" element={<Terminal />} />

<Route path="/playground" element={<MLPlayground />} />

</Routes>

</BrowserRouter>

</div>

);

}

export default App;