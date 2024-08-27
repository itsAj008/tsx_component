import naruto from '../Images/naruto.jpg'
import sasuke from '../Images/sasuke.jpg'
import kakashi from '../Images/kakashi.jpg'
import itachi from '../Images/itachi.jpg'
import solo from '../Images/solo.jpg'
import jin from '../Images/jin.jpg'
import ImageSlider from './ImageSlider'


const Urls:string[] = [naruto,sasuke,itachi,kakashi,solo,jin]

function Carousel() {

  return (
      <>
        <div className=' w-full h-full'>
          <ImageSlider data={Urls} />
        </div>
         
      </>
  )
}

export default Carousel
