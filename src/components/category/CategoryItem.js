import './category.css'

const CategoryItem = ({item}) => {
    return (
        <div className="cl-container">
            <img src={item.img} className="cl-img" />
            <div className="cl-info">
                <h1 className="cl-title">{item.title}</h1>
                <button className="cl-button">SHOP NOW</button>
            </div>
        </div>   
    )
}

export default CategoryItem;
