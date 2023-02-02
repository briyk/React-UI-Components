import { useState } from 'react'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'

import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'

const sliders = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleRightArrow = () => {
    setCurrentIndex((currentIndex + 1) % sliders.length);
  }
  const handLeftArrow = () => {
    setCurrentIndex((currentIndex + sliders.length - 1) % sliders.length);  }

  return (
    <div className="max-w-[1400px] h-screen mx-auto relative w-full py-16 px-6 group">
      <div style={{ backgroundImage: `url(${sliders[currentIndex].url})` }} className="w-full h-full bg-center bg-cover duration-500 rounded-xl">
      </div>
      {/* left & right arrow */}
      <div className='hidden group-hover:block absolute top-[50%] left-[50px] text-white duration-300 cursor-pointer' onClick={handLeftArrow}>
        <BsChevronDoubleLeft size={25} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] right-[50px] text-white duration-300 cursor-pointer' onClick={handleRightArrow}>
        <BsChevronDoubleRight size={25} />
      </div>
    </div>
  )
}

export default App
