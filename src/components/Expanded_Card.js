import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Expanded_Card = () => {
    const location = useLocation();
    const navigate=useNavigate();
  const receivedData = location.state.data;
  const navigatePage=(data)=>{
    navigate('/table', { state: { data: data } });
}
  console.log("Recived",receivedData)
  return <>
   <section className="flex justify-center items-center flex-wrap max-w-7xl mx-auto">
        {receivedData?.map((item,index)=>(
        <div className={`p-4 w-[46%] border-black border-2 m-4 h-[300px] bg-[${item.color}] cursor-pointer` }key={index} onClick={()=>navigatePage(item)}>
          <div className="flex justify-center items-center flex-wrap w-full">
          </div>
        </div>))}
      </section>
  </>
}

export default Expanded_Card