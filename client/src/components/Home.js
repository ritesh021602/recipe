import React, { useContext } from 'react'
import { AccountContext } from '../context/UseContext'
import "./home.css"
import Banner from './Banner';
import Card from './Card';
export const Home = () => {
const {data}=useContext(AccountContext);
if(data.length===0)return <Banner/>;
  return (
    <div className='home'>
        {
            data.map((item)=>{
             return <Card item={item.recipe}/>
            })
        }
    </div>
  )
}
