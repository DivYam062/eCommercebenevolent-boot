import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = ()=>{

    const [products,setProduct] = useState([]);

    const fetchData = async () => {
        try{
            const res = await fetch("https://products-3jez.onrender.com/product?_page=1&_limit=8");
            const data = await res.json();
            console.log(data);
            setProduct(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="homePage">
            {/* Main banner */}
            <div className="banner">
                <div className="banner-content">
                    <h1>Shopping And <br/> Department Store.</h1>
                    <p>Shoping is a bit of relexing hobby for me, which <br/> is something troubleing for the bank balance.</p>
                    <button>Learn More</button>
                </div>
            </div>
            {/* Top Categories */}
            <div className="top-category">
                <h1>Shop Our Top Categories</h1>
                <div className="category">
                    <Link to={"/products/furniture"} style={{textDecoration:"none"}}><div className="img-cat" style={{background:"url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png')"}}><h3>Furniture</h3></div></Link>
                    <div className="img-cat" style={{background:"url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png')"}}><h3>Hand Bag</h3></div>
                    <div className="img-cat" style={{background:"url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png')"}}><h3>Books</h3></div>
                    <div className="img-cat" style={{background:"url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png')"}}><h3>Tech</h3></div>
                    <div className="img-cat" style={{background:"url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png')"}}><h3>Sneekers</h3></div>
                    <div className="img-cat" style={{background:"url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png')"}}><h3>Travel</h3></div>
                </div>
            </div>
            {/* Top Deals */}
            <div className="topdeal">
                <h1>Todays Best Deals for you!</h1>
                <div className="itemgrid">
                        {products?.map((product)=>(
                        <div key={product.id} className="itembox">
                            <img src={product.image} alt={product.title} />
                            <div>
                                <h2>{product.title}</h2>
                                <h2>{product.price}</h2>
                            </div>
                            <p className="description">{product.description}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Choose your brand */}
            <div className="brand">
                <h1>Choose By Brand</h1>
                <div id="brand-grid">
                    <div className="brand-item">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png" alt="" />
                        <div>
                            <h4>Staples</h4>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
                    <div className="brand-item">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png" alt="" />
                        <div>
                            <h4>Sprouts</h4>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
                    <div className="brand-item">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png" alt="" />
                        <div>
                            <h4>Grocery outlet</h4>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
                    <div className="brand-item">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png" alt="" />
                        <div>
                            <h4>Mollie stones</h4>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
                    <div className="brand-item">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png" alt="" />
                        <div>
                            <h4>Sports Basement</h4>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
                    <div className="brand-item">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png" alt="" />
                        <div>
                            <h4>Container Store</h4>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
                    <div className="brand-item">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png" alt="" />
                        <div>
                            <h4>Target</h4>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
                    <div className="brand-item">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png" alt="" />
                        <div>
                            <h4>Bevmo</h4>
                            <p>Delivery with in 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discount */}
            <div className="discount">
                <h1>Get Up To 70% Off</h1>
                <div className="discountgrid">
                    <div className="discountbox">
                        <div style={{backgroundColor:"rgb(242,228,217)", padding:"30px"}}>
                            <h3>Save</h3>
                            <h2 style={{color:"rgb(203,153,23)", fontWeight:"bold"}}>$100</h2>
                            <p>Explore Our Furniture & Home Furnishing Range</p>
                        </div>
                        <div >
                            <img className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="" />
                        </div>
                    </div>
                    <div className="discountbox">
                        <div style={{backgroundColor:"rgb(249,220,220)", padding:"30px"}}>
                            <h3>Save</h3>
                            <h2 style={{color:"rgb(150,31,31)",fontWeight:"bold"}}>$29</h2>
                            <p>Explore Our Furniture & Home Furnishing Range</p>
                        </div>
                        <div >
                            <img className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png" alt="" />
                        </div>
                    </div>
                    <div className="discountbox">
                        <div style={{backgroundColor:"rgb(242,228,217)", padding:"30px"}}>
                            <h3>Save</h3>
                            <h2 style={{color:"rgb(148,98,60)",fontWeight:"bold"}}>$67</h2>
                            <p>Explore Our Furniture & Home Furnishing Range</p>
                        </div>
                        <div >
                            <img className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png" alt="" />
                        </div>
                    </div>
                    <div className="discountbox">
                        <div style={{backgroundColor:"rgb(210,247,236)", padding:"30px"}}>
                            <h3>Save</h3>
                            <h2 style={{color:"rgb(0,61,41)",fontWeight:"bold"}}>$59</h2>
                            <p>Explore Our Furniture & Home Furnishing Range</p>
                        </div>
                        <div >
                            <img className="discountimg" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="midBanner">
                <div id="middlebox">
                    <h1>Get 5% Cash Back On $200</h1>
                    <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Home;