import {API} from "../../backend";
// API=== "http://localhost:8000/api/"

//fetch(API,options).then(//success message).catch(//err message)
export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user) //data entered in form is referred as 'user'
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//logic for signing a user
export const signin = user => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


export const authenticate = (data, next) => {
  //if window object is accessible,put the token in localStorage of the browser    
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

/*
'signout' is made middleware here because after clearing token from browser
  we need to make a callback to redirect user to some other routes
  [middleware allows us to make callbacks]
*/
export const signout = next => {
  //if window object is accessible,remove the token from localStorage of the browser  
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next(); //middleware

    return fetch(`${API}/signout`, {
      method: "GET"
    })
      .then(response => console.log("signout success"))
      .catch(err => console.log(err));
  }
};

export const isAuthenticated = () => {
  
  //if window object is not accessible,then we return: user is not authenticated
  if (typeof window == "undefined") {
    return false;
  }
  
  //if "jwt" is found,then we don't return 'true' as token must be matched with the stored token of that user previously
  if (localStorage.getItem("jwt")) {
    //returns an "user" object with _id, name, email and role
    return JSON.parse(localStorage.getItem("jwt")); 
  } else {
    return false;
  }
};
