import React from "react";
import "./App.css";
import Header from "./components/Header";
//import Links from "./components/Links";
import Content from "./components/Content";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: #D8DEE9; }"}</style>
      </Helmet>
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
