import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import Theme from "./components/Theme/Theme"
import AboutUs from "./components/AboutUs/AboutUs";
import ThreeSections from "./components/Sections/Sections";
import HowToUse from "./components/HowToUse/HowToUse";
import { addUser } from "./Redux/userSlice";
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error))
   }, [])

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
