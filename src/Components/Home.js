import React from "react";
import './Home.css';


const Home = (props) => {
    // console.warn("props",props);      
  return (
    <div>
      <h1> Home Component</h1>
      <div className="cart-wrapper">

        <div className="img-wrapper item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTUZ4xr-3c0PCL6zDYb2PDNUoDZju1WV8sQ&usqp=CAU" />
        </div>

        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>

        <div className="btn-wrapper item">
          <button className="addCart" onClick={() => props.addToCartHandler({price:1000,name:'i phone-14'})}> Add To Cart</button>
          <button className="removeCart" onClick={() => props.removeToCartHandler()}> Remove To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;



