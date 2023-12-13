import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

  const [classes, setClasses] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch("http://localhost:5000/api/classes");
        if(!response.ok) {
          throw new Error("error al obtener datos")
        };
        const data = await response.json()
        setClasses(data);
      } catch (error) {
        console.error("Hubo problemas al obtener los datos", error)
      };
    };
    fetchData()
  }, []);

  

  return (
    <div className='drop-down-menu'>
      <div className='drop-buttons'>
        <button onClick={() => toggleSection(1)}>Classes</button>
        <button onClick={() => toggleSection(2)}>Rotation</button>
        <button onClick={() => toggleSection(3)}>Addons</button>
      </div>
      <div className={`section ${section1Visible ? 'open' : ''}`}>
        <h3>Choose Your Class:</h3>
        <select name="" id="">
        <option value="" placeholder='Choose your class!'>Choose</option>
          {
            classes.map((c) => {
              return (
                <option key={c.id} className="fluid-container class-card">{c.name}</option>
              )
            })
          }
        </select>
      </div>
      <div className={`section ${section2Visible ? 'open' : ''}`}>
        <h3>Choose the Spot to grind:</h3>
        <select name="Spot" id="">SPOT</select>
      </div>
      <div className={`section ${section3Visible ? 'open' : ''}`}>
        <h3>Choose your Artifacts build:</h3>
        <select name="Artifacts" id=""></select>
      </div>
    </div>
  );
};

export default ThreeSections;
