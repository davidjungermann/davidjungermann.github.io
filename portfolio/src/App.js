import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: #7395AE; }"}</style>
      </Helmet>
      <Header></Header>
    </div>
  );
}

export default App;
