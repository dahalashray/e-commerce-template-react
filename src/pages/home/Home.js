import Announcement from '../../components/announcement/Announcement'
import Category from '../../components/category/Category'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Products from '../../components/product/Products'
import Slider from '../../components/slider/Slider'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div className="home-page">
            <Announcement />
            <Navbar />
            <Slider />
            <Category />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
