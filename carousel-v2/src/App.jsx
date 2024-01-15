import { longList } from './data'
import { useEffect, useState } from 'react'
import Slides from './Slides'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

const App = () => {
  const [slideList, setSlideList] = useState(longList)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slideList.length
    setCurrentIndex(newIndex)
  }
  const previousSlide = () => {
    const newIndex = (currentIndex - 1 + slideList.length) % slideList.length
    setCurrentIndex(newIndex)
  }
  useEffect(() => {
    let sliderAutoChange = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => {
      clearInterval(sliderAutoChange)
    }
  }, [currentIndex])

  return (
    <main>
      <div className="slider-section">
        <>
          {slideList.map((slides, index) => {
            return (
              <Slides
                key={slides.id}
                {...slides}
                index={index}
                currentIndex={currentIndex}
              />
            )
          })}
        </>
        <button className="slider-btn previous-btn" onClick={previousSlide}>
          <IoIosArrowBack />
        </button>
        <button className="slider-btn next-btn" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </main>
  )
}
export default App
