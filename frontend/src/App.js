import { Container } from "@material-ui/core";
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./index.css";
import Home from "./screens/Home";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <main className=" py-3">
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
