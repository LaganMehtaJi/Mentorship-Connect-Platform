import React from "react";
import NavBar from './Components/NavBar';
import MentorDiv from './Components/MentorDiv';
function Hero(){
    return(
        <>
      <NavBar/><center>
      <div style={{display:"flex",gap:"2rem" ,width:"auto",height:"30px",margin:"0px 0px 0px 0px",boxShadow:"1px 1px 1px blue"}}>
      <button style={{ border:"none",width:"200px",fontSize:"22px",backgroundColor:"white"}}>Startup Mentors</button>
      <button style={{ border:"none",width:"200px",fontSize:"22px",backgroundColor:"white"}}>Design Mentors</button>
      <button style={{ border:"none",width:"200px",fontSize:"22px",backgroundColor:"white"}}>Product Mentors</button>
      <button style={{ border:"none",width:"200px",fontSize:"22px",backgroundColor:"white"}}>Career Mentors</button>
      <button style={{ border:"none",width:"200px",fontSize:"22px",backgroundColor:"white"}}>Top Mentors</button>
      <button style={{ border:"none",width:"200px",fontSize:"22px",backgroundColor:"white"}}>IT Mentors</button>
     
      </div></center>
      <div style={{display:"flex",gap:"20px",margin:"5px"}}>
          <div style={{width:"900px"}}> 
           <center>
           <h1 style={{fontSize:"25px",fontFamily:"initial",margin:"100px 0px 0px 0px",fontWeight:"lighter"}}>Learn a new skill, launch a project, land your dream career.</h1>
            <div style={{display:"flex", margin:"0px 10px 0px 150px", height:"140px"}}>
            <h1 style={{fontSize:"70px"}}>1-on-1 </h1> <h1 style={{fontSize:"70px",color:"skyblue",marginLeft:"10px"}}>AL & ML</h1>
            </div>
             <h1 style={{fontSize:"70px", margin:"0px 220px 10px 10px"}} >Mentorship</h1>
            </center>   
            <input type="text" placeholder=" Search by Company or Skill"  style={{height:"55px",width:"400px",textAlign:"left",fontSize:"22px",border:"0.5px solid skyblue",margin:"10px 0px 0px 150px",borderRadius:"22px"}}/>
             <button style={{height:"55px",width:"140px",backgroundColor:"skyblue",border:"none",borderRadius:"20px",color:"white",fontSize:"19px",marginLeft:"10px"}}> Search Mentor
             </button>
          </div>
          <div style={{ justifyItems:"center", width:"390px",height:"500px"}}>
          <MentorDiv/>
          <MentorDiv/>
          <MentorDiv/>
          <MentorDiv/>
          </div>
      </div>
     
        </>
    );
}
export default Hero;