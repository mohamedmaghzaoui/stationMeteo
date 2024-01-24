import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import * as yup from "yup"


export const SignUp=()=>{
  const {register,handleSubmit}=useForm({})

  const userSchema=yup.object().shape({
    username:yup.string().required("username is required"),
    email:yup.string().required("email is required"),
    password:yup.string().required().min(6)

  })

  const submitData=(data)=>{
    console.log(data)
  }
    return (   

        <div>
            <form onSubmit={handleSubmit(submitData)} className="my-5">

  <div class="form-outline offset-4 mb-4 w-25">
  <label class="form-label" for="form2Example1">Username</label>
    <input {...register("username")} type="email"  class="form-control" />
    <br/>

  <label class="form-label" for="form2Example1">Email address</label>
    <input {...register("email")} type="email"  class="form-control" />
   
  </div>

  <div class="form-outline mb-4 offset-4 w-25">
  <label class="form-label" for="form2Example2">Password</label>
    <input {...register("password")} type="password"  class="form-control" />
    <br/>
  <label class="form-label" for="form2Example2">Reapeat Password</label>
    <input    type="password"  class="form-control" />
   
  </div>


  <div class="row mb-4">
    <div class="col row d-flex justify-content-center">
  
   
    </div>

   
  </div>


  <button type="submit" class="btn btn-primary btn-block mb-4 offset-4 w-25">Sign up</button>

 
  <div className="offset-4  ">
    <p>Already have an account? <Link to={"/login"} >Login</Link></p>
  
  

  </div>
</form>
        </div>
     )


}