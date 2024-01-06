import LogoShopCart from "../Images/Logo_ShopCart.png";
import Contact_Icon from "../Images/Contact_Icon.png";
import Cart_Icon from "../Images/Cart_Icon.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleHover = (e) => {
        const dropdownContent = e.currentTarget.querySelector(".dropdown-content");
        if (dropdownContent) {
            dropdownContent.classList.add("show");
        }
    };

    const handleLeave = (e) => {
        const dropdownContent = e.currentTarget.querySelector(".dropdown-content");
        if (dropdownContent) {
            dropdownContent.classList.remove("show");
        }
    };

    return (
        <div id="parentNav">
            <div className="upperNav">
                <p>+001234567890</p>
                <p>Get 50% Off on Selected Items</p>
                <p>Shop Now | Get App | Store & Events | Help</p>
            </div>
            <div className="lowerNav">
                <div id="logo" onClick={() => navigate('/')}>
                    <img src={LogoShopCart} alt="shopCart" />
                </div>
                <div className="middle">
                    <div className="centerNav" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <h4 className="dropbtn">Category</h4>
                        <div className="dropdown-content">
                            <h3>Popular Categories</h3>
                            <div className="dropdownInner">
                            <Link to="/products/furniture" className="a">
                                <div className="dropdownDiv">
                                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png" alt="" /> Furniture
                                </div>
                            </Link>
                            <Link to="/products/handbag" className="a">
                                <div className="dropdownDiv">
                                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png" alt="" /> Hand Bag
                                </div>
                            </Link>
                            <Link to="/products/shoe" className="a">
                                <div className="dropdownDiv">
                                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png" alt="" /> Shoe
                                </div>
                            </Link>
                            <Link to="/products/headphones" className="a">
                                <div className="dropdownDiv">
                                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png" alt="" /> Head Phones
                                </div>
                            </Link>
                            <Link to="/products/laptop" className="a">
                                <div className="dropdownDiv">
                                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png" alt="" /> Laptop
                                </div>    
                            </Link>
                            <Link to="/products/books" className="a">
                                <div className="dropdownDiv">
                                    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png" alt="" /> Books
                                </div>
                            </Link>
                            </div>
                            
                        {/* Add more categories as needed */}
                        </div>
                    </div>
                    <h4 className="content">Deals</h4>
                    <h4 className="content">What's New</h4>
                    <h4 className="content">Delivery</h4>
                </div>
                <input className="searchBar" type="text" placeholder="Search..." />
                <div className="end">
                    <div className="inner" onClick={() => navigate('/login')}>
                        <img className="icon" src={Contact_Icon} alt="contact_icon" />
                        <h3>Account</h3>
                    </div>
                    <div className="inner">
                        <img className="icon" src={Cart_Icon} alt="cart_icon" />
                        <h3>Cart</h3>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Navbar;
