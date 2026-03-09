import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import CaseFiles from "./pages/CaseFiles";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/projects" element={<CaseFiles />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/contact" element={<Contact />} />

</Routes>

</BrowserRouter>

  );
}

export default App;