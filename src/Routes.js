import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import Home from "./core/Home";
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from './admin/ManageCategories';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import Cart from './core/Cart';
import ContactPage from './core/ContactPage';

const Routes = () => {
    return (
        <BrowserRouter> 
           <Switch>  
           {/* "Switch" acts like if-else statement ie. if path is "/d", render this {Component} */}
           
              <Route path='/' exact component={Home}/>
              
              <Route path='/signup' exact component={Signup}/>
              
              <Route path='/signin' exact component={Signin}/>
              
              <Route path='/cart' exact component={Cart}/>
              
              <Route path='/contact' exact component={ContactPage}/>
              
              {/* Only a signedIn non-admin user has access to UserDashboard */}
              <PrivateRoute path="/user/dashboard" exact component={UserDashBoard}/>
              
              {/* If signedIn user is an admin , he has access to AdminDashboard */}
              <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard}/>
              
              <AdminRoute path="/admin/create/category" exact component={AddCategory}/>

              <AdminRoute path="/admin/categories" exact component={ManageCategories}/>

              <AdminRoute path="/admin/create/product" exact component={AddProduct}/>

              <AdminRoute path="/admin/products" exact component={ManageProducts}/>

              <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>
              
           </Switch>
        </BrowserRouter>
    );
}

export default Routes;
