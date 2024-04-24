import React,{useState} from 'react'
import Base from '../core/Base';
import {signup} from "../auth/helper/index";
import { Link } from 'react-router-dom';

const Signup = () => {
    
    const [values, setValues] = useState({
        //...values
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });
    const {name, email, password, error, success} = values;
    
    //refer higher Order Functions
    //Here,'name' implies either name/email/password
    const handleChange = name => event => {
        setValues({...values, error:false, [name]:event.target.value}); //"...values" implies loading all the previous values
    };

    const onSubmit = event=>{
        event.preventDefault()
        setValues({...values, error:false})
        signup({name, email, password}) //{name,email,password} is received as 'user' in "signup" function in 'index.js' file
        .then(data=>{
            if(data.error){
                setValues({...values, error: data.error, success: false})
            }else{
                setValues({
                ...values,
                name:"",
                email:"",
                password:"",
                error:"",
                success:true
              });
            }
        })
        .catch(console.log("Error in signup!!"))
        
    };
    
    const signUpForm=()=>{
        return(<div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                        <label className="text-light">
                            Name
                        </label>
                        <input onChange={handleChange("name")} className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="text-light">
                            Email
                        </label>
                        <input onChange={handleChange("email")} value={email} className="form-control" type="email" />
                    </div>
                    <div className="form-group">
                        <label className="text-light">
                            Password
                        </label>
                        <input onChange={handleChange("password")} value={password} className="form-control" type="password"/>
                    </div>
                    <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                </form>
            </div>
        </div>
         ) }
         
         const successMessage=()=>{
            return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                       <div className="alert alert-success" style={{display:success?"":"none"}}>
                            New account was created successfully!!  Please <Link to="/signin">Login here</Link>
                       </div>
                </div>
            </div>
            )
        };
    
        const errorMessage=()=>{
            return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                     <div className="alert alert-danger" style={{display:error?"":"none"}}>
                       {error}  
                     </div>
                </div>
            </div>)
        };
    
  return (
    <Base title='Signup Page'  description='A page for user to Signup !!'>
       {/* <p className='col-md-6 offset-sm-3'>{JSON.stringify(values)}</p> */}
       {successMessage()}
       {errorMessage()}
       {signUpForm()}
    </Base>
  )
}

export default Signup;