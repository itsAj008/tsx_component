import Accordian from "./Accordian"
import {data} from './data.js'
import { FAQitems } from "./types.js"



function FAQ() {

  return (
    <div className=" p-3 bg-gray-200 rounded-md">
        {data.length > 0 && data.map((d:FAQitems ,idx:number) => (
            <div key={idx}>
                <Accordian  data={d}  />
            </div>
        ))}
    </div>
  )
}


export default FAQ
