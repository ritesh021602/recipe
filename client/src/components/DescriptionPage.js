// DescriptionPage.js
import React, { useContext, useState,useRef, useEffect } from 'react';
import './DescriptionPage.css'; // Import your CSS file for styling
import { AccountContext } from '../context/UseContext';

function DescriptionPage() {
    let {single}=useContext(AccountContext);
    const [status,setStatus]=useState("Save");
    const [disable,setDisable]=useState(true);
    const [flag,setFlag]=useState(true);
    const anchorRef = useRef(null);
    console.log(single)
    let handle=()=>{
        let stored=localStorage.getItem('user');
        stored=JSON.parse(stored);
        stored.push(single);
        localStorage.setItem('user',JSON.stringify(stored))
        setStatus("Saved");
        setDisable(false);
    }
    const handleRemove=()=>{
        let stored=localStorage.getItem('user');
        stored=JSON.parse(stored);
        let temp=stored.filter((item)=>{
            if(item.image!==single.image)return true;
        })
        localStorage.setItem('user',JSON.stringify(temp))
        setFlag(false);
        setDisable(true);
    }
    if(flag){ localStorage.setItem('single',JSON.stringify(single));}
   single=JSON.parse(localStorage.getItem('single'))
    const handleButtonClick = () => {
        // Trigger a click on the anchor tag
        if (anchorRef.current) {
          anchorRef.current.click();
        }
      };
      useEffect(()=>{
        let stored=localStorage.getItem('user');
        stored=JSON.parse(stored);
       stored.map((item)=>{
            if(item.image===single.image){setDisable(false)}
        })
        localStorage.setItem('single',JSON.stringify(single));
       
      },[])
      
    
  return (
    <div className="description-page">
      <div className="image-section">
        <img src={single.image} alt={"loading"} />
        <h2 id='disname'>{single.label}</h2>
        {disable?<button className='button' onClick={handle} >Save</button>
        :<button className='button2' onClick={handleRemove} >Remove</button>}
      </div>
      <div className="list-section">
        <h4 id='source'>INGREDIENTS</h4>
      {
        <ul>
        {single.ingredientLines.map((item, index) => (
          <li >{item}</li>
        ))}
      </ul>
      }
      </div>
      <div className="list-section">
      
      </div>
      <div className="button-section">
        <button className='button' onClick={handleButtonClick}>INSTRUCTIONS</button>
        <a href={single.url} ref={anchorRef} target='_blank'></a>
      </div>
    </div>
  );
}

export default DescriptionPage;
