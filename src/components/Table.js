import React, { useState } from 'react';
import { state ,dataLink } from './utils/common';
import { useLocation } from 'react-router-dom';

const Table = () => {
  const location = useLocation();
  const data= location.state.data;
  const keysWithArrays = Object.keys(data).filter(key => Array.isArray(data[key]));
 const [currValue,setValue]=useState('generalInfo');
 const changeValue=(item)=>{
 setValue(item)
 }
console.log(data, "Sumt")
console.log(keysWithArrays, "Sumt22222222")

  return <>
   <div className="App " style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1200px" }} className="border-2 border-black ">
        <div className="flex justify-around my-5 ">
          { keysWithArrays.map((item,index)=>(
          <p className={`font-medium text-lg   py-2 px-5 cursor-pointer ${currValue === item ? "bg-black text-white" : "bg-white text-black"}`} onClick={()=>changeValue(item)}>
            {item}
          </p>))
        }
        </div>
        <table class="table table-striped mb-5">
          <thead>
            <tr className="bg-black">
              <th
                scope="col"
                className="font-medium text-lg uppercase text-white text-left bg-black"
              >
                First
              </th>
              <th
                scope="col"
                className="font-medium text-lg uppercase text-white text-left bg-black "
              >
                Last
              </th>
            </tr>
          </thead>
          <tbody>{
            dataLink[currValue].map((item,index)=>(
            <tr>
              <td className="text-left font-medium">{item.keyName}</td>
              <td className="text-left">{item.value}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  </>
}

export default Table
