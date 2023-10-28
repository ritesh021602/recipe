// Navbar.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file
import { Search } from '../api/Helper';
import { AccountContext } from '../context/UseContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    const {setData}=useContext(AccountContext)
    const [query,setQuery]=useState("");
    let handle=async()=>{
      let response= await Search(query);
      setData(response);
      navigate('/');
    }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-link">
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search for recipes..." onChange={(e)=>{
            setQuery(e.target.value);
          }} />
          <button onClick={handle}>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
