import { Categories } from '../../data';
import CategoryItem from './CategoryItem';
import './category.css'

const Category = () => {
    return (
        <div className="C-container">
            {Categories.map(item=>(
                <CategoryItem key={item.id} item={item} />
            ))}
        </div>
    )
}


export default Category;
