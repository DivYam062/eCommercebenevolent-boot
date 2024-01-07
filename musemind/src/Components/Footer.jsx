import "./Footer.css";

export const Footer = () => {

    return (
        <div className="footer">
            <hr style={{height:"1px", marginTop:"100px"}}/>
                <div style={{marginTop:"50px"}}>
                    <div className="flexBox">
                        <div>
                            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="" />
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <div>
                                <h2>Accepted Payments</h2>
                                <div id="paymentgrid">
                                    <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png" alt="" /></div>
                                    <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png" alt="" /></div>
                                    <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png" alt="" /></div>
                                    <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png" alt="" /></div>
                                    <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png" alt="" /></div>
                                    <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png" alt="" /></div>
                                    <div><img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png" alt="" /></div>
                                    <div> <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="listbox">
                            <div>
                                <h2>Department</h2>
                                <p className="listitem">Fashion</p>
                                <p className="listitem">Education Product</p>
                                <p className="listitem">Frozen Food</p>
                                <p className="listitem">Beverages</p>
                                <p className="listitem">Organic Grocery</p>
                                <p className="listitem">Office Supplies</p>
                                <p className="listitem">Beauty Products</p>
                                <p className="listitem">Books</p>
                                <p className="listitem">Electronics &amp;Gadget</p>
                                <p className="listitem">Travel Accessories</p>
                                <p className="listitem">Fitness</p>
                                <p className="listitem">Sneakers</p>
                                <p className="listitem">Toys</p>
                                <p className="listitem">Furniture</p>
                            </div>
                        </div>
                        <div className="listbox">
                            <div>
                                <h2>About us</h2>
                                <p className="listitem">About shopcart</p>
                                <p className="listitem">Careers</p>
                                <p className="listitem">News &amp;Blog</p>
                                <p className="listitem">Help</p>
                                <p className="listitem">Press Center</p>
                                <p className="listitem">Shop by location</p>
                                <p className="listitem">Shopcart brands</p>
                                <p className="listitem">Affiliate &amp;Partners</p>
                                <p className="listitem">Ideas &amp;Guides</p>
                            </div>
                        </div>
                        <div className="listbox">
                            <div>
                                <h2>Services</h2>
                                <p className="listitem">Gift Card</p>
                                <p className="listitem">Mobile App</p>
                                <p className="listitem">Shipping &amp;Delivery</p>
                                <p className="listitem">Order Pickup</p>
                                <p className="listitem">Account Signup</p>
                            </div>
                        </div>
                        <div className="listbox">
                            <div>
                                <h2>Help</h2>
                                <p className="listitem">Shopcart Help</p>
                                <p className="listitem">Returns</p>
                                <p className="listitem">track orders</p>
                                <p className="listitem">contact us</p>
                                <p className="listitem">feedback</p>
                                <p className="listitem">Security &amp;Fraud</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            <hr style={{height:"1px", marginTop:"100px"}}/>
        </div>
    )
}