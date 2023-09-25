import React from "react";
import  {ReactNavbar}  from "overlay-navbar";
import logo from "../../../images/logo2.jpg";
// import { startCase } from "lodash";

const options = {
  burgerColor: "#FFFFFF",
  burgerColorHover: "#dc143c",
  logo,
  logoWidth: "20vmax",
  // navColor1: "#FFFDD0",
  navColor1: "#14a0dc",
  logoHoverSize: "10px",
  logoHoverColor: "#dc143c",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#145ddc",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#dc143c",
  searchIconColorHover: "#dc143c",
  cartIconColorHover: "#dc143c",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;

