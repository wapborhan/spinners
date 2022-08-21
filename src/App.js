import React, { Fragment } from "react";
// Css Link
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "./assets/css/style.css";
// File Import
import Header from "./components/header/Header";
import Spinner from "./components/body/Spinner";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Spinner />
      <Footer />
    </Fragment>
  );
}

export default App;
