import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';

const Products = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        const fetchproducts = async () => {
            let res = await fetch("http://localhost:8080/products");
            let data = await res.json();
           setproducts(data);
        };
        fetchproducts();
    }, [])
  return (
    <div>Products

        {products.map((product) => (
            <div key={product.id}>
               <div> Product Name : {product.name}</div>
                <div> Product Price : {product.price}</div>
                <Link to={`/products/${product.id}`}>More Details</Link>
                </div>
        ))}
    </div>
  )
}

export default Products;