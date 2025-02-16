import { useState, useEffect, useMemo } from "react"
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import { sliders } from '../utils/constants'
import { useSelector } from "react-redux";
function Hero() {
  const {language}  = useSelector(state => state.general)
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliders.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);


  const classifications = [
    { 'en': 'women', 'ar': 'نساء', 'tr': 'turkish' },
    { 'en': 'men', 'ar': 'نساء', 'tr': 'turkish' },
    { 'en': 'boys', 'ar': 'نساء', 'tr': 'turkish' },
    { 'en': 'girls', 'ar': 'نساء', 'tr': 'turkish' },
    { 'en': 'baby', 'ar': 'نساء', 'tr': 'turkish' },
    { 'en': 'beauty', 'ar': 'نساء', 'tr': 'turkish' },
    { 'en': 'gifts', 'ar': 'نساء', 'tr': 'turkish' },
  ]

  return (
    <div>
      <div className="fixed top-0 inset-x-0 z-50">
        <div className="w-full py-[1px] flex justify-center items-center bg-color">
          <div
            key={currentIndex}
            className="text-white  py-1  text-sm   transform transition-all  animate-slide-in"
          >
            {sliders[currentIndex]}
          </div>
        </div>
        <Navbar />
        <div className=" bg-color">
          <div className="flex justify-center flex-wrap gap-x-1 sm:gap-x-5 ">

            {classifications.map((classification, index) => (
              <div
                key={index}
                className="text-white p-3 capitalize  hover:bg-white   hover:text-inherit cursor-pointer transition-all duration-200"
                onClick={() => navigate(`/${classification[language]}`)}
              >
                {classification[language]}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero

