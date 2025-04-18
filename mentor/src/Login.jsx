import React from "react";
function Login(){
    return(
        <>
        <div  style={{display:"flex",gap:"5px"}}>
            <div style={{width:"400px",backgroundColor:"blue",height:"700px"}}>
             
                <img src="https://th.bing.com/th/id/OIP.2_hfK_WA6-IqHnW3PWnvvAHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7" alt="not found" style={{borderRadius:"25px", margin:"230px 0px 0px 120px"}} />
        
            </div>
            <div style={{margin:"50px 0px 0px 100px"}}>
             <h1 style={{margin:"0px 0px 20px 120px"}}>Login</h1>
             
                <div style={{display:"flex",gap:"50px",margin:"0px 0px 0px 180px"}}>
                    <div >
                        <label>I'm a mentee</label>
                        < hr />
                    </div>
                     <div>
                    <label>I'm a mentor</label>
                      < hr />
                    </div>
                </div>
                <div style={{margin:"20px 0px 0px 120px"}}>
                    <label style={{fontSize:"18px"}}> Email or Username</label><br/>
                    <input type="text" name="email" id="email" style={{width:"350px",height:"30px",border:"0.5px solid gray",borderRadius:"12px"}} /><br/><br/>
                    <label style={{fontSize:"18px"}} >Password</label><br/>
                    <input type="text" name="password" id="password" style={{width:"350px",height:"30px",border:"0.5px solid gray",borderRadius:"12px"}} /><br/><br/>
                    <button style={{backgroundColor:"blue",width:"380px",height:"40px",fontFamily:"initial",color:"white",fontSize:"20px",border:"none",borderRadius:"22px"}}>Log in</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Login;