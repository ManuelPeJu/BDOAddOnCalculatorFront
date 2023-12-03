import React, { useState } from 'react';

const ThreeSections = () => {
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);

  const toggleSection = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        setSection1Visible(!section1Visible);
        setSection2Visible(false);
        setSection3Visible(false);
        break;
      case 2:
        setSection1Visible(false);
        setSection2Visible(!section2Visible);
        setSection3Visible(false);
        break;
      case 3:
        setSection1Visible(false);
        setSection2Visible(false);
        setSection3Visible(!section3Visible);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button onClick={() => toggleSection(1)}>Sección 1</button>
      <button onClick={() => toggleSection(2)}>Sección 2</button>
      <button onClick={() => toggleSection(3)}>Sección 3</button>

      <div className={`section ${section1Visible ? 'open' : ''}`}>
        <h2>Contenido Sección 1</h2>
        <p>Texto de la sección 1...</p>
      </div>
      <div className={`section ${section2Visible ? 'open' : ''}`}>
        <h2>Contenido Sección 2</h2>
        <p>Texto de la sección 2...</p>
      </div>
      <div className={`section ${section3Visible ? 'open' : ''}`}>
        <h2>Contenido Sección 3</h2>
        <p>Texto de la sección 3...</p>
      </div>
    </div>
  );
};

export default ThreeSections;
