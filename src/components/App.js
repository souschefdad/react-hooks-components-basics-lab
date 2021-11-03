import React from "react";
import Home from "./Home"
import NavBar from "./NavBar"



function About() {
  return (
    <>
      <span id="about">About</span>
    </>
  )
}


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
    </>
  );
}

export default App;
