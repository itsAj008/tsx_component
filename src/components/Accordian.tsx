import { FAQitems } from "./types.js"
import { useState } from "react"

type props = {
    data : FAQitems,

}

function Accordian({data}:props) {
    
  const [showAns, setShowAns] = useState(false)

  return (
    <>
       <div className=" py-1 font-semibold text-sm">
            <button className=" w-full  flex justify-between "  
                onClick={() => setShowAns(prev => !prev)}>
                <span>{data.question}</span>
                {showAns ? <span >-</span>:<span >+</span>}
                
            </button>

            <div className= {`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-500 text-xs  px-2
                ${showAns ? 'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`} >
                <div className=" overflow-hidden">{data.answer}</div>
            </div>
       </ div>
    </>
  
  )
}

export default Accordian
