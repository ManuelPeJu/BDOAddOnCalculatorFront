import React, { useState } from 'react';
import "../../CSS/styles.css" // Asegúrate de importar tu archivo Sass

const TemaButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>Dark/Light</button>
      {/* Resto de tu contenido */}
    </div>
  );
};

export default TemaButton;
