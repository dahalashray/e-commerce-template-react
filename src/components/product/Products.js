import './product.css'
import { popularProducts } from '../../data';
import Product from './Product';

const Products = () => {
    return (
        <div className="pl-container">
            {popularProducts.map((item)=> (
                <Product key={item.id} item={item} />
            )
            )}
        </div>
    )
}

export default Products;
