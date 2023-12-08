import { useState } from "react"
import "../../Css/sensorForm.css"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SensorForm=(props)=>{
    const exitForm=()=>{
        setFormClass("hidden")
        setTimeout(()=>props.setForm("hidden"),1000)

    }
    const[formClass,setFormClass]=useState("shown")
     	return (
            <div className={`overlay ${formClass}`}>
            <form className="input-form ">
                <div className="row">
                
                <h4 className="col">Add a new module</h4>
                <FontAwesomeIcon
                      onClick={()=>exitForm()}
                      id="exit_icon"
                      icon={faTimes}
                      className="fs-3  col-1 "
                    ></FontAwesomeIcon>
                </div>
          
               
                <br/>
                <input  placeholder="Module Id" className="form-control" type="text" />
                <br/>
                <input placeholder="Module name" className="form-control" type="text" />
                <br/>
                <input placeholder="Module Mac address" className="form-control" type="text" />
              
                <br/>
                <button className="btn btn-primary col-2 mx-1">Add</button>
                <button  onClick={()=>exitForm()
                    } className="btn btn-danger">Exit</button>
                
                
               

            </form>
        </div>
        )
    
}