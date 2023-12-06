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


  // const classes = [
  //   id = 0,
  //   name = 0,
  // ]


  

  return (
    <div className='drop-down-menu'>
      <div className='drop-buttons'>
        <button onClick={() => toggleSection(1)}>Classes</button>
        <button onClick={() => toggleSection(2)}>Rotation</button>
        <button onClick={() => toggleSection(3)}>Addons</button>
      </div>
      <div className={`section ${section1Visible ? 'open' : ''}`}>
        <h3>Choose Your Class:</h3>
        <select name="Class" id="">ASD</select>
      </div>
      <div className={`section ${section2Visible ? 'open' : ''}`}>
        <h3>Choose the Spot to grind:</h3>
        <select name="Spot" id="">SPOT</select>
      </div>
      <div className={`section ${section3Visible ? 'open' : ''}`}>
        <h3>Choose your Artifacts build:</h3>
        <select name="Artiacts" id=""></select>
      </div>
    </div>
  );
};

export default ThreeSections;
