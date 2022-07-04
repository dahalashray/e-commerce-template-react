import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import './product.css'

const Product = ({item}) => {
    return (
        <div className="p-container">
            <img src={item.img} alt="" className="p-img" />
            <div className="p-info">
                <div className="p-icon">
                    <ShoppingCartOutlined />
                </div>
                <div className="p-icon">
                    <SearchOutlined />
                </div>
                <div className="p-icon">
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    )
}

export default Product;
