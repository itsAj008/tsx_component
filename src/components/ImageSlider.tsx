import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react'
type props = {
    data : string[],
}

function ImageSlider({data}:props) {
    const handleChage = (idx:number) => {
        setImageIndex(idx < 0 ? data.length -1 : idx > data.length - 1 ? 0 : idx )
    }

    const [imageIndex, setImageIndex] = useState(0)
  return (
    <>
        <div className=' w-[60%] max-w-96 min-w-80
         h-48  bg-slate-400 relative shadow-lg shadow-gray-700/80 '>
            <div className='w-full h-full flex overflow-hidden'>
                {data.map((url:string,idx:number) =>(
                    <img key={idx} src={url} className=' w-full h-full object-fill flex-shrink-0 flex-grow-0 transition-all duration-300 ease-in-out' style={{translate:`${-100 * imageIndex}%`}}/>
                ))}
            </div>
    
           

            <button className=' absolute top-0 bottom-0 left-0  cursor-pointer transition-all duration-200 ease-in-out hover:bg-slate-400 hover:bg-opacity-40 px-1 group'   onClick={() => handleChage(imageIndex - 1)}>
                 <FaArrowAltCircleLeft className=' text-xl fill-white group-hover:animate-squish animate-squish ' />
            </button>

            <button className=' absolute top-0 bottom-0 right-0 cursor-pointe transition-all duration-200 ease-in-out hover:bg-slate-400 hover:bg-opacity-40 px-1 group' onClick={() => handleChage(imageIndex + 1)}><FaArrowAltCircleRight  className='text-xl fill-white group-hover:animate-squish animate-squish ' /></button>
    
        
        </div>

    </>
  )
}

export default ImageSlider
