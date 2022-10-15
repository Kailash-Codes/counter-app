import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Header>
        <h1 className="text-white" style={{ fontFamily: "cursive" }}>
          Counter
        </h1>
      </Header>
      <Main />
    </>
  );
}
export default App;
