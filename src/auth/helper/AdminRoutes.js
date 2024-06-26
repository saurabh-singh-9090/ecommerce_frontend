import React from "react";
import {Route,Redirect} from "react-router-dom";
import {isAuthenticated} from "./index";

{/* 'AdminRoute' structure is copied from react-router Docs under "Redirect<Auth>" */}
const AdminRoute = ({ component:Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() && isAuthenticated().user.role === 1 ? (
            <Component {...props}/> //Here "Component" refers to AdminDashboard
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  

  export default AdminRoute;