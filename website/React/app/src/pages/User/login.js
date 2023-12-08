import { Link } from "react-router-dom"
import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Css/Login.css"
import { useState } from "react";

export const Login=()=>{
    const [showPassword,setShowPassword]=useState(false)
    return (   

        <div >
            <form className="my-5">

  <div class="form-outline offset-4 mb-4 col-xl-3 col-5">
  <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" />
   
  </div>

  <div class="position-relative form-outline mb-4 offset-4 w-25 col-xl-3 col-5">
  <label class="form-label" for="form2Example2">Password</label>

  <input type="password" id class="form-control col-xl-3 col-5"  
   />
   {showPassword?
     <   FontAwesomeIcon onClick={()=>setShowPassword(false)} id="icon" className="offset-xl-11"   icon={faEyeSlash}/>
     :
     <  FontAwesomeIcon id="icon" onClick={()=>setShowPassword(true)}  className="offset-xl-11"  icon={faEye}/>
     
     
     }
 
   
   
  </div>


  <div class="row mb-4">
    <div class="col row d-flex justify-content-center">
  
      <div class="form-check offset-7 col-3">
        <input class="form-check-input" checked  value="" id="form2Example31" type="checkbox" />
        <label class="form-check-label  " for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button type="button" class="btn btn-primary btn-block mb-4 offset-4 w-25">Sign in</button>

 
  <div className="offset-5">
    <p>Not a member? <Link to={"/SignUp"}>Register</Link></p>
  
  

  </div>
</form>
        </div>
     )


}