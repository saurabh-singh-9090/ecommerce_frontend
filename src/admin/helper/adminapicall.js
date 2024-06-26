import {API} from "../../backend";

//[Refer route files for product and category in "projbackend"]
//CATEGORY CALLS----------------------------------------------------------------

export const createCategory=(userId, token, category)=>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
           "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
         },
       body:JSON.stringify(category)
        })
        .then(response=> {
            return response.json();
        })
        .catch(err=>console.log(err));
};

// get all categories
export const getCategories=()=>{
    return fetch(`${API}/categories`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

//Delete a category
export const removeCategory=(categoryId,userId,token)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        }
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

//PRODUCT CALLS-----------------------------------------------------------------

//CREATE:create a product

export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:product
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

//get all products

export const getProducts=()=>{
    return fetch(`${API}/products`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

//DELETE:delete a product

export const deleteProduct=(productId,userId,token)=>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        }
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}


//READ:get a product

export const getProduct=productId=>{
    return fetch(`${API}/product/${productId}`,{
        method:"GET"
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

//UPDATE:update a product

export const updateProduct=(productId,userId,token,product)=>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:product
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}
