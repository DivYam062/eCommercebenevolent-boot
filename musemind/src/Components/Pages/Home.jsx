import { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = ()=>{

    const fetchData = async () => {
        try{
            const res = await fetch("https://products-3jez.onrender.com");
            const data = await res.json();
            console.log(data);
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
            <div className="banner">
                <div className="banner-content">
                    <h1>Shopping And <br/> Department Store.</h1>
                    <p>Shoping is a bit of relexing hobby for me, which <br/> is something troubleing for the bank balance.</p>
                    <button>Learn More</button>
                </div>
            </div>
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

        </div>
    )
}

export default Home;