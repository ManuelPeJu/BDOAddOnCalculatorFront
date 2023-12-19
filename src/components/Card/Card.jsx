import React, { useEffect, useState } from 'react'

const Card = ({id, imageUrl, name}) => {

  const [isInputOpen, setIsInputOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [classes, setClasses] = useState([])

  const handleCardClick = () => {
    setIsInputOpen(true)

  }
  const handleInputChange = (e) => {
    setSelectedOption(e.target.value)
  }
  
  const handleConfirmClick = () => {
    // Make the API call according to the selected option
    const fetchData = async (id, selectedOption) => {
      try {
        const response = await fetch(`http://localhost:5000/api/classes/${id}?state=${selectedOption}`);
        if(!response.ok) {
          throw new Error("error al obtener datos")
        };
        const data = await response.json()
        setClasses(data);
        console.log(data)
      } catch (error) {
        console.error("Hubo problemas al obtener los datos", error)
      };
    };

    if (selectedOption === 'AWA') {
      //API call for option 1
      fetchData(id, "AWA");
    } else if (selectedOption === 'SUC') {
      //API call for option 2
      fetchData(id, "SUC");
    } else {
      fetchData(id, "");
    };
    //Close the input and perform any other necessary actions
    setIsInputOpen(false)
    console.log(selectedOption);
  }

  
  
  return (
    <div className='card card-style' id={id} onClick={handleCardClick}>
      <img src={imageUrl} alt="image not found" width="40px" height="40px" />
      <h4>{name}</h4>
      {isInputOpen && (
        <div className='input_options'>
          <select value={selectedOption} onChange={handleInputChange}>
            <option value="">Default!</option>
            <option value="AWA">AWAKENING</option>
            <option value="SUC">SUCCESION</option>
          </select>
          <button onClick={handleConfirmClick}>CONFIRM!</button>
        </div>
      )}
    </div>
  )
}

export default Card