import Navbar from "./components/Navbar";
import About from "./pages/About";
import CaseFiles from "./pages/CaseFiles";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>

      <Navbar />

      <div className="section">

        <h1 style={{fontSize:"48px"}}>Hi, I'm Suman</h1>

        <h2 style={{color:"#22c55e",marginTop:"10px"}}>
          Data Detective
        </h2>

        <p style={{maxWidth:"600px",margin:"20px auto"}}>
        I analyze datasets, uncover hidden patterns,
        and build machine learning models to solve
        real-world problems.
        </p>

        <a href="/resume.pdf" target="_blank" rel="noreferrer">
        <button style={{
          padding:"10px 20px",
          background:"#22c55e",
          border:"none",
          borderRadius:"6px",
          marginTop:"20px",
          cursor:"pointer"
          }}>
            Download Resume
            </button>

</a>

      </div>

      <About />

      <CaseFiles />
      <Dashboard/>
      <Contact/>

    </div>
  );
}

export default App;