import React, { useEffect, useState } from 'react'

const Card = ({id, imageUrl, name}) => {

  const [isInputOpen, setIsInputOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleCardClick = () => {
    setIsInputOpen(true)
  }

  const handleInputChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const handleConfirmClick = () => {
    // Realiza la llamada a la API según la opción seleccionada
    if (selectedOption === 'AWA') {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/classes/${id}?state=${selectedOption}`);
          if(!response.ok) {
            throw new Error("error al obtener datos")
          };
          const data = await response.json()
          setClasses(data);
        } catch (error) {
          console.error("Hubo problemas al obtener los datos", error)
        };
        fetchData();
        console.log(fetchData());

      };
    } else if (selectedOption === 'SUC') {
      // Llamada a la API para opción 2const fetchData = async () => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5000/api/classes/${id}?state=${selectedOption}`);
            if(!response.ok) {
              throw new Error("error al obtener datos")
            };
            const data = await response.json()
            setClasses(data);
          } catch (error) {
            console.error("Hubo problemas al obtener los datos", error)
          };
          fetchData();
          console.log(fetchData());
        };
    }

    // Cierra el input y realiza cualquier otra acción necesaria
    setIsInputOpen(false)
    console.log("hola, funciono");
  }
  return (
    <div className='card card-style' id={id} onClick={handleCardClick}>
      <img src={imageUrl} alt="image not found" width="40px" height="40px" />
      <h4>{name}</h4>
      {isInputOpen && (
        <div className='input_options'>
          <select value={selectedOption} onChange={handleInputChange}>
            <option value="AWA">AWAKENING</option>
            <option value="SUCC">SUCCESION</option>
          </select>
          <button onClick={handleConfirmClick}>CONFIRM!</button>
        </div>
      )}
    </div>
  )
}

export default Card