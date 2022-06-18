import React, {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Product = () => {

    const {id} = useParams();
    
    const [products, setproducts] = useState({});

    useEffect(() => {
        if(id<4) 
        {
            fetch( `http://localhost:8080/products/${id}`)
            .then((res) => res.json())
            .then((data) => setproducts(data));
        }
        else{
            alert("404 ERROR  Page does not exist");
        }
    }, [id]);
  return (
    <div>
        <div> Product : {id}</div>
        <div>Product name : {products.name}</div>
        <div>Product name : {products.price}</div>
    </div>
  )
}

export default Product;