import "./App.css";
import Header from "./component/layout/Header/Header"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import WebFont from "webfontloader"
import React, { useEffect } from 'react';
import Footer from "./component/layout/Footer/Footer.js"
import Home from  "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route extract path="/" element={<Home />} />
        {/* <Route extract path="/sad" element={<Loader />} /> */}
        <Route extract path="/product/:id" component={<ProductDetails />} />
        {/* Add more routes as needed */}

      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;