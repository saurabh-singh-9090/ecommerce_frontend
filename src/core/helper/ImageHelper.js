import React from 'react';
import { API } from '../../backend';

//Refer '//read routes' in "product.js" file under "routes" folder in 'projbackend' to get the photo
//"API/product/photo/:productId" url to get photo
const ImageHelper = ({product}) => {

    const imageurl = product?`${API}/product/photo/${product._id}`:`https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

    return (
        <div className="rounded border border-success p-2">
                <img
                  src = {imageurl}
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
        </div>
    );
}

export default ImageHelper;
