import React from "react";
import "./App.css";
import Header from "./components/Header";
import Links from "./components/Links"
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: #557A95; }"}</style>
      </Helmet>
      <Links></Links>
      <Header></Header>
    </div>
  );
}

export default App;
