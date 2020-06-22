import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Products extends Component {
    state = { 
        products:[
            {id:1,name:'Product1'},
            {id:2,name:'Product2'},
            {id:3,name:'Product3'}
        ]
     };
    render() { 
        return ( 
            <div>
                <h1>Products</h1>
                <ul>
                    {this.state.products.map(product=>(
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default Products;