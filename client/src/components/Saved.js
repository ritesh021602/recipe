import React, { useEffect, useState } from 'react'
import Card from './Card';
import "./saved.css"
export const Saved = () => {
    const [saved,setSaved]=useState([]);
    
    useEffect(()=>{
        let temp=localStorage.getItem('user');
        temp=JSON.parse(temp);
        console.log(temp);
        setSaved(temp);
    },[])
    if(saved.length===0)return <h1>DOSENT HAVE ANY FAVOURITE RECIPE</h1>
  return (
    <div className='content'>{
       saved.map((item)=>{
        return <Card item={item}/>
       })
    }</div>
  )
}
