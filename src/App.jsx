import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AboutUs from "./components/AboutUs/AboutUs";
import ThreeSections from "./components/Sections/Sections";
import HowToUse from "./components/HowToUse/HowToUse";
import { addUser } from "./Redux/userSlice";
import ThreeSectionsTest from "./components/Sections/sectionsTEST";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTop";
function App() {

  return (
    <>
      <main id="home">
      <AboutUs id="aboutUs" />
      <HowToUse id="HTU" />
      {/* <ThreeSections id="Calculator" /> */}
      <ThreeSectionsTest />
      <ScrollToTopButton /> 
      </main>
      <footer>
        IM NOT A FOOTER
      </footer>
    </>
  )
}

export default App
