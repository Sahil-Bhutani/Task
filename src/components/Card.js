import React from 'react';
import { state ,dataLink } from './utils/common';
import { useNavigate } from "react-router-dom";

const Card = () => {

    const navigate=useNavigate();
    const navigatePage=(data)=>{
        navigate('/expandedCard', { state: { data: data } });
    }
  return <>
  <section className="flex justify-center items-center flex-wrap">
        {state.map((item,index)=>(
        <div className="p-4 w-[46%] border-black border-2 m-4 cursor-pointer" key={index} onClick={()=>navigatePage(item.machines)}>
          <div className="flex justify-center items-center flex-wrap w-full">
            {item.machines.map((item,index)=>(
            <div className={`p-4 w-1/2  bg-[${item.color}] `} key={index}>
                <h1 className="text-white font-medium uppercase text-center ">Machine</h1>
            </div>))}
          </div>
        </div>))}
      </section>
  </>
}

export default Card