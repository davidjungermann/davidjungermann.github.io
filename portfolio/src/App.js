import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Information from "./components/Information";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Information></Information>
    </div>
  );
}

export default App;
