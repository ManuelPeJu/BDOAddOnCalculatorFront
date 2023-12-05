import React, { useState } from "react";
// import Theme from "./components/Theme/Theme"
import AboutUs from "./components/AboutUs/AboutUs";
import ThreeSections from "./components/Sections/Sections";
import HowToUse from "./components/HowToUse/HowToUse";

function App() {

  return (
    <>
      <main id="home">
      <AboutUs id="aboutUs" />
      <HowToUse id="HTU" />
      <ThreeSections id="Calculator" />
      </main>
      <footer>
        IM NOT A FOOTER
      </footer>
    </>
  )
}

export default App
