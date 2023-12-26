import React, { useState } from 'react'
import logo from "../../assets/logo_TEMP.png"


const Footer = () => {

  const [isVisible, setIsVisible] = useState(true);
  const handleToggle = () => {
    setIsVisible(!isVisible)
  }


  return (
<footer className='fluid-container footer'>
  {
    isVisible && 
    <>
    <div className="logo">
      <img src={logo} alt="Logo" height="50px" width="50px" />
    </div>
  {/* YISUS */}
  <div class="redes-sociales">
    <div className='list-item'>
        <span>Snowfall86</span>
        <p>thanks our programmer Snowfall for helping to create and develop the backend of this app</p>
    </div>
  </div>
  {/* GAMERURC */}
  <div class="redes-sociales">
      <div className='list-item'>
        <span>GameruRc</span>
      </div>
      <div className='list-item'>
        <a href="https://www.twitch.tv/gamerurc"><i class="bi bi-cast"></i></a>
      </div>
      <div className='list-item'>
        <a href="https://www.youtube.com/@GameruRc"><i class="bi bi-youtube"></i></a>
      </div>
  </div>
  {/* XDUIM */}
  <div class="redes-sociales">
      <div className='list-item'>
        <span>xDuim</span>
      </div>
      <div className='list-item'>
        <a href="https://github.com/ManuelPeJu"><i class="bi bi-github"></i></a>
      </div>
      <div className='list-item'>
        <a href="https://www.linkedin.com/in/manuel-pérez-jurado/"><i class="bi bi-linkedin"></i></a>
      </div>
  </div>
    </>
  }
  <button onClick={handleToggle}>Footer</button>
</footer>
  )
}

export default Footer