import React from "react";
import {Route, Redirect} from "react-router-dom";
import {isAuthenticated} from "./index";

/* 'PrivateRoute' structure is copied from react-router Docs under "Redirect<Auth>" */
const PrivateRoute = ({ component:Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() ? (
            <Component {...props}/>    //Here "Component" refers to UserDashboard
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
  

  export default PrivateRoute;