function About(){

return(

<div className="aboutPage">

<h1>🕵️ Detective Profile</h1>

<p className="aboutSubtitle">
Background file of the Data Detective.
</p>

<div className="profileCard">

<img
src="/profile.jpg"
alt="Suman profile"
className="profileImage"
/>

<div className="profileInfo">

<h2>Agent Suman</h2>

<p className="agentRole">
Data Detective | Machine Learning Enthusiast
</p>

<p>
Computer Science student passionate about Data Science and Machine Learning.
I enjoy investigating datasets, building predictive models, and uncovering
hidden patterns inside data.
</p>

</div>

</div>

<div className="aboutGrid">

<div className="aboutBox">

<h3>🎓 Education</h3>

<p>
B.Tech Computer Science  
NIIT University  
Batch: 2023
</p>

</div>

<div className="aboutBox">

<h3>🧠 Skills</h3>

<p>
Python  
Machine Learning  
Data Analysis  
SQL  
NLP
</p>

</div>

<div className="aboutBox">

<h3>🎯 Mission</h3>

<p>
Use data science and machine learning to solve real-world problems
and uncover insights hidden inside complex datasets.
</p>

</div>

</div>

</div>

)

}

export default About