import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import ThreeSections from "./components/Sections/Sections";
import HowToUse from "./components/HowToUse/HowToUse";
import ThreeSectionsTest from "./components/Sections/sectionsTEST";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <>
      <main id="home">
        <ScrollToTopButton /> 
      {/* <AboutUs id="aboutUs" />
      <HowToUse id="HTU" /> */}
      {/* <ThreeSections id="Calculator" /> */}
      <ThreeSectionsTest />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
