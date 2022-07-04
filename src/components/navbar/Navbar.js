import './navbar.css';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="left-nav">
                    <span className="langauge">EN</span>
                    <div className="search-container">
                        <input className="nav-input" />
                        <Search className="nav-search" />
                    </div>
                </div>
                <div className="center-nav"><h1 className="logo">ShopIt</h1></div>
                <div className="right-nav">
                    <div className="menu-item">REGISTER</div>
                    <div className="menu-item">SIGN IN</div>    
                    <div className="menu-item">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
