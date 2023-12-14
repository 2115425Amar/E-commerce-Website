//import { Fragment } from 'react';
//import React, { useEffect } from 'react'
import React from 'react'
import { BsMouseFill } from "react-icons/bs";
import "./Home.css";
import Product from "./Product.js"
import MetaData from "../layout/MetaData.js"
import Shirt from "../../images/b.jpg";
//import {getProduct} from "../../actions/productAction";
//import {useSelector , useDispatch} from "react-redux";


const product = {
  name: "Blue Tshirt",
  // images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
  images: [Shirt],
  price: " ₹3000",
  _id: "amar",
}


const Home = () => {
  // const dispatch = useDispatch();
  // const {} =useSelector(state=>state.products)
  //  useEffect(()=>{
  //   dispatch(getProduct());
  //  },[dispatch]);

      return <>
      <MetaData title="ECOMMERCE"/>

        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container"><button>Scroll<BsMouseFill/></button></a>
        </div> 
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        </div>
      </>
};

export default Home;