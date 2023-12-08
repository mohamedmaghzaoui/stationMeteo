import { Link } from "react-router-dom"

export const Login=()=>{
    return (   

        <div>
            <form className="my-5">

  <div class="form-outline offset-4 mb-4 w-25">
  <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" />
   
  </div>

  <div class="form-outline mb-4 offset-4 w-25">
  <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" />
   
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