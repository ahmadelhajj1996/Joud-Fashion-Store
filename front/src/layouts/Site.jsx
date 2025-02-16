// import { useState, useEffect } from 'react';
import Backtop from '../components/Backtop'
import Hero from '../components/Hero'
import AppRoutes from "../utils/Route"
import { useSelector } from 'react-redux';
// import Footer from '../components/Footer';
function Site() {
  const { direction } = useSelector((state) => state.general);
  // const [isPageLoaded, setIsPageLoaded] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsPageLoaded(true);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div dir={direction}>
      <Hero />
      <div className="pt-36 ">
        <AppRoutes />
      </div>
      <Backtop />
      {/* {isPageLoaded && <Footer />} */}
    </div>
  )
}

export default Site