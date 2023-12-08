import { Link } from "react-router-dom"

export const SignUp=()=>{
    return (   

        <div>
            <form className="my-5">

  <div class="form-outline offset-4 mb-4 w-25">
  <label class="form-label" for="form2Example1">Username</label>
    <input type="email"  class="form-control" />
    <br/>

  <label class="form-label" for="form2Example1">Email address</label>
    <input type="email"  class="form-control" />
   
  </div>

  <div class="form-outline mb-4 offset-4 w-25">
  <label class="form-label" for="form2Example2">Password</label>
    <input type="password"  class="form-control" />
    <br/>
  <label class="form-label" for="form2Example2">Reapeat Password</label>
    <input type="password"  class="form-control" />
   
  </div>


  <div class="row mb-4">
    <div class="col row d-flex justify-content-center">
  
   
    </div>

   
  </div>


  <button type="button" class="btn btn-primary btn-block mb-4 offset-4 w-25">Sign up</button>

 
  <div className="offset-4  ">
    <p>Already have an account? <Link to={"/login"} >Login</Link></p>
  
  

  </div>
</form>
        </div>
     )


}