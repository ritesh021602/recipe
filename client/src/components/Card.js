// Card.js
import React, { useContext } from 'react';
import './Card.css'; // Import your CSS for styling (create a Card.css file)
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../context/UseContext';
function Card({ item }) {
const navigate=useNavigate();
const {setSingle}=useContext(AccountContext)
    let handle=()=>{
      setSingle(item);
      navigate('/description')
    }
    function limitStringLength(inputString, maxLength) {
        if (inputString.length <= maxLength) {
          return inputString; // Return the input string as is if it's within the limit
        } else {
          return inputString.slice(0, maxLength); // Truncate the string to the specified length
        }
      }
  return (
    <div className="card" onClick={handle}>
      <img src={item.image} alt="Card" className="card-image" />
      <div className="card-text">
      <div className="row">
          <span className="text-item" id='name'>{limitStringLength(item.label, 29)}</span>
        </div>
        <div className="row">
          <span className="text-item" >{item.ingredients.length} INGREDIENTS</span>
          <span className="text-item">{parseInt(item.calories,10)} CAlORIES</span>
        </div>
        <div className="row">
          <span className="text-item" id='source'>{item.source}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
