import React from "react";
function MentorDiv(){
    return(
        <>
        <div style={{width:"370px",height:"110px",border:"1px solid blue",boxShadow:"0px 0px 10px skyblue",borderRadius:"20px",margin:"10px",display:"flex",gap:"10px"}}>
          <div>
            <img src="https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/068f8fd0286c67f977dfc0cf012af38b/b636b0111052f0ad/455a6c50c90a450fbc82caf8b6272c9e.jpg" alt="notfound" style={{height:"70px",width:"70px", borderRadius:"15px", margin:"9px 9px 9px 9px"}}/>
          </div>
          <div style={{margin:"10px"}}> 
            <label style={{ fontFamily:"initial",fontSize:"24px"}}>@LaganMehta.in</label><br/>
            <label style={{ fontFamily:"initial",fontSize:"18px",fontWeight:"lighter",color:"skyblue"}}>Software Developer</label>
            <br/><div style={{display:"flex", gap:"10px"}}>
                  <div style={{width:"80px",height:"22px",backgroundColor:"skyblue",border:"none",borderRadius:"10px",textAlign:"center"}}>
                     <label style={{color:"white" ,fontSize:"16px",fontWeight:"bold"}} >C++</label>
                  </div>
                  <div style={{width:"80px",height:"22px",backgroundColor:"skyblue",border:"none",borderRadius:"10px",textAlign:"center"}}>
                     <label style={{color:"white" ,fontSize:"16px",fontWeight:"bold"}} >Java</label>
                  </div>
             </div>
          </div>
        </div>
        </>
    );
}
export default MentorDiv;