import { ToastContainer , Flip } from 'react-toastify';
import Backtop from '../components/Backtop'
import Hero from '../components/Hero'
import AppRoutes from '../router/index'
import { useSelector } from 'react-redux';

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
      <ToastContainer stacked     transition={Flip}  />

    </div>
  )
}

export default Site