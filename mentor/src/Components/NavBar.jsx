import React from "react";
function NavBar(){
    return(
        <>
        <div style={{"display":"flex",gap:"170px"}}> 
            <div style={{margin:"10px 0px 0px 10px", display:"flex"}}>
                <img src="https://th.bing.com/th/id/OIP.2_hfK_WA6-IqHnW3PWnvvAHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7" alt="notfound"  width={"70px"} height={"70px"} style={{"borderRadius":"30px"}}/>
             <div> 
              <h1 style={{"margin":"15px 0px 10px 10px" ,fontFamily:"sans-serif",fontWeight:"lighter"}}>Mentor World</h1>
            </div>    
           </div>
           <div>
            <input type="text" placeholder="Search" style={{width:"400px",height:"50px", border:"1px solid skyblue",borderRadius:"15px",textAlign:"center" ,margin:"17px 0px 0px 0px",fontSize:"20px"}}/>
            <button style={{width:"40px",height:"50px",margin:"8px",fontSize:"30px",border:"none",backgroundColor:"white"}}>🔍</button>
           </div>
           
           <div>
            <button style={{backgroundColor:"Blue",color:"white",borderRadius:"22px", width:"200px",height:"50px",border:"none",fontSize:"22px",margin:"18px"}}>Login</button>
           </div>
        </div>
        
      
      
        </>

    );
}
export default NavBar;