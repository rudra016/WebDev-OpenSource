import "./App.css";
import React from "react";
import Header from "./layouts/components/header";
import Footer from "./layouts/components/footer";
import Main from "./layouts/components/main";

function App() {
  
  return (
    <React.Fragment>
      <Header />
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
