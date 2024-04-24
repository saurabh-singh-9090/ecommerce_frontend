import React,{Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth/helper';

//logic for highlighting the visited link
const currentTab = (history, path) => {  //'history' & 'path' is provided by Link
    console.log(history);
    console.log(path);
    if(history.location.pathname === path){
        return {color:"#2874f0"}
    }else{
        return {color:"black"}
    }
}


// 'Link' keyword prevents page reload and hence it is used for making single page applications
const Menu = ({history}) => {
  return (
    <div>
        <ul className="nav nav-tabs" >
        
            <li className="nav-item">
                <Link style={currentTab(history,"/")} className="nav-link" to="/"><i class="bi bi-house-door-fill"></i><b>Home</b></Link>
            </li>

            <li className="nav-item">
                <Link style={currentTab(history,"/cart")} className="nav-link" to="/cart">Cart</Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role===0 && (
            <li className="nav-item">
                <Link style={currentTab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">My Dashboard</Link>
            </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role===1 && (
            <li className="nav-item">
                <Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
            </li>
            )}
            
            {/*If user is not authenticated, show him signup and signin route */}
            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link style={currentTab(history,"/signup")} className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history,"/signin")} className="nav-link" to="/signin">Sign In</Link>
                    </li>
                </Fragment>
            )}
                    
                
            {/*  if user is authenticated,show him 'signout' route else not.
            [Here isAuthenticated() may return true/false but the 2nd part(i.e JSX) 
            always returns true.This logic is similar to if-else statement ]  */}
                
            {isAuthenticated() && (  
                <li className="nav-item">
                    <Link className="nav-link text-danger"
                    onClick={()=>{
                        signout(()=>{
                            history.push("/");
                        });
                    }}
                    >
                    Signout
                    </Link>
                </li>
                )}
                
                <li className="nav-item">
                   <Link style={currentTab(history,"/contact")} className="nav-link" to="/contact">Contact Us</Link>
                </li>
            
         </ul>
    </div>
  )
}

export default withRouter(Menu);
