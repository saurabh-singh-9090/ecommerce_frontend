import React, {useEffect, useState} from 'react';
import "../styles.css";
import {API} from "../backend";//"{}" is used here as API was not default exported
import Base from './Base'; //"{}" is not used here as "Base" was default exported
import Card from './Card';
import { getProducts } from './helper/coreapicalls';

//NOTE: we need to write "return" inside '{}' but for '()', "return" is not compulsory
const Home = () => {
    // console.log("API IS", API);
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProduct = () => {
        getProducts().then(data => {
            if(data.error){
                setError(data.error);
            }else{
                setProducts(data);
            }
        });
    }

    useEffect(() => {
       loadAllProduct(); //This is executed before 'Home' component is rendered
    }, []);

    return (
        <Base title="Home Page" description="Welcome to our Online Store !!">
            <div className="row text-center">
             
            {/* products returned by "loadAllProduct" is mapped and displayed one by
                one on the Home page in form of Card Component */}
                  {products.map((product, index) => {
                     return(
                         <div key={index} className = "productCard col-xl-3 col-lg-4 col-md-6 ">
                             <Card product = {product}/>
                         </div>
                     )
                  })}
              
            </div>
        </Base>
    );
}

export default Home;