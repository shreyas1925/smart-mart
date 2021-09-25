import { Container } from "@material-ui/core";
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./index.css";
import Home from "./screens/Home";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
// import ImagesSlider from "./Components/ImagesSlider";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <main className="home_div">
        <Container>
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
        </Container>
        <Route exact path="/" component={Home} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
