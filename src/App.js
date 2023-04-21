import React from "react";
import {useState} from 'react'
const data=[
  {name:'India',cities:['Deoghar','Bhagalpur','Ranchi']},
  { name: 'indonesia', cities: ['bali', 'jakarta'] },
  { name: 'usa', cities: ['newwork', 'washington'] },
]
export default function App() {
  
  const[updatedata,setUpdateData]=useState(data)
  function handleSelect(e){
    setUpdateData(e.target.value)
  }
  return (
    <div>
      <select onChange={handleSelect}>
        {data.map((ele,i)=>(
         <option value={i}>{ele.name}</option> 
        ))}
      </select>
      <select>
      {data[updatedata]?.cities.map((item, i) => (
          <option value={i}> {item}</option>
        ))}
      
      </select>
    </div>
  );
}
