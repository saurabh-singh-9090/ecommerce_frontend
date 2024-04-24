import { API } from "../../backend";

// [Refer the "createOrder" route in projbackend] "API/order/create/:userId"
export const createOrder=(userId,token,orderData)=>{
    return fetch(`${API}/order/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        //order:orderData
        body:JSON.stringify(orderData)
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}