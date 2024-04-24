import { API } from "../../backend";

//function to get all products from backend [ Database ]

export const getProducts = () => {

    return fetch(`${API}/products`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
    
};