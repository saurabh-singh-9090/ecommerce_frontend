import React,{useEffect,useState} from 'react';
import "../styles.css";
import {API} from "../backend";
import Base from './Base';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';
import {loadCart} from "./helper/cartHelper";

const Cart = () => {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
       setProducts(loadCart());
    }, [reload]); //to forcefully update,we use "reload" here[whenever reload changes,component gets rendered again]

    const loadAllProducts=(products)=>{
        return(
            <div>
                <h2>My Cart</h2>
                 {products.map((product,index)=>{
                   return(
                   <Card 
                   key={index}
                   product={product}
                   removeFromCart={true}
                   addtoCart={false}
                   setReload={setReload}
                   reload={reload}
                   />
                   )
                 })}
            </div>
        );
    };

    const loadCheckout=()=>{
        return(
            <div>
                <h2>Checkout</h2>
            </div>
        );
    };

    return (
        <Base title="Cart Page" description="Ready To Checkout! ">  
            <div className="row text-white text-center">
                <div className="col-6">{loadAllProducts(products)}</div>
                <div className="col-6">
                    <div>
                        {loadCheckout()}
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </Base>
    );
}
export default Cart;
