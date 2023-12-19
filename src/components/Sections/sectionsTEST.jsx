import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SubCard from '../Card/SubCard';
import Combo from '../Combo/Combo';
import Swal from "sweetalert2";


const ThreeSectionsTest = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [classes, setClasses] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/classes/`);
        if(!response.ok) {
          throw new Error("error al obtener datos")
        };
        const data = await response.json()
        // setClasses(data.map(classID => ({...classID, id: classID._id}))); // Save the ID of each object in the state
        setClasses(data);
        // console.log(data)
      } catch (error) {
        console.error("Hubo problemas al obtener los datos", error)
      };
    };
    fetchData()
  }, []);

  const handleClick = (e) => {

    e.preventDefault
    
  }

  const toggleSection = (sectionNumber) => {
    setActiveSection(activeSection === sectionNumber ? null : sectionNumber);
  };



  return (
    <div>

      {/* ACCORDION 1 */}
      <div className={`section ${activeSection !== 1 ? 'closed' : ''} accordion`}>
        <h2 onClick={() => toggleSection(1)}><b>CLASSES <i className="bi bi-plus-circle"></i></b></h2>
        {activeSection === 1 && (
          <section className='fluid-container card-grid' name="classes" >
            {
              classes.map((c) => {
                // console.log(c.id)
                return (
                  <Card
                    key={c.id} 
                    id={c.id}
                    name={c.name}
                    imageUrl={c.imageUrl} 
                    onClick={(e) => handleClick(e)}
                  />
                )
              })
            }
          </section>
        )}
      </div>

        {/* ACCORDION 2 */}
      <div className={`section ${activeSection !== 2 ? 'closed' : ''} accordion`}>
        <h2 onClick={() => toggleSection(2)}><b>Choose SPOT</b></h2>
        {activeSection === 2 && (
          <div className="content">
            <p>Texto de la sección 2...</p>
          </div>
        )}
      </div>

      {/* ACCORDION 3 */}
      <div className={`section ${activeSection !== 3 ? 'closed' : ''} accordion`}>
        <h2 onClick={() => toggleSection(3)}>Sección 3</h2>
        {activeSection === 3 && (
          <div className="content">
            <Combo />
          </div>
        )}
      </div>

    </div>
  );
};

export default ThreeSectionsTest;
