import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from '../redux/Auth'
import { CircleUser, ShoppingCart, CircleDollarSign, Globe, Heart } from "lucide-react";
import { toggle, change } from "../utils/helpers";
import { languages, currencies } from '../utils/constants'
import Search from './Search';
import { usePost } from '../hooks/useData';
import { setCurrency, setLanguage } from '../redux/General';
import { removeFromCart, removeFromFavorites } from '../redux/computed';
const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {language , currency} = useSelector(state => state.general)
    const auth = useSelector(state => state.auth)
    const bag = useSelector(state => state.bag)

    const { t, i18n } = useTranslation()

    const [langOpen, setLangOpen] = useState(false);
    const [bagOpen, setBagOpen] = useState(false);
    const [favoriteOpen, setFavoriteOpen] = useState(false);
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false)

    const toggleLanguage = () => toggle(langOpen, setLangOpen)
    const toggleCurrency = () => toggle(currencyOpen, setCurrencyOpen)
    const changeCurrency = (c) => change(console.log(c), setCurrencyOpen(false))
    const changeLang = (lang) => change(i18n.changeLanguage(lang), lang == 'ar' ? document.dir = 'rtl' : document.dir = 'ltr',
        localStorage.setItem('lang', lang), setLangOpen(false))


    const handleUserClicked = () => {
        if (auth.token) {
            setUserOpen(!userOpen);
            setBagOpen(false);
            setFavoriteOpen(false);
            setLangOpen(false);
            setCurrencyOpen(false);
        } else {
            navigate('/account/login');
        }
    };

    const handleBagClicked = () => {
        setUserOpen(false)
        setFavoriteOpen(false)
        setBagOpen(!bagOpen)
    }

    const handleFAvoriteClicked = () => {
        setUserOpen(false)
        setBagOpen(false)
        setFavoriteOpen(!favoriteOpen)
    }

    const categories = ['Women', 'Men', 'Boys', 'Girls', 'Baby', 'Beauty', 'Gifts']    
  
    const onSuccess = () => {
        dispatch(logoutSuccess());
        setUserOpen(false);
    };
    
    const onError = (error) => {
        console.error("Logout failed:", error.response?.data || error.message);
        // if (error.response?.status === 401) {
        //     dispatch(logoutSuccess()); // Force logout on unauthorized error
        // }
    };
    
    const { mutate: logout, isLoading, error } = usePost('logout', { onSuccess, onError });


    // console.log(bag.favorites[0].variation)

    return (
        <>
            <div className="bg-white px-4  flex  items-center ">

                <h1 className="text-4xl font-extrabold bg-color text-transparent bg-clip-text drop-shadow-lg">
                    Joud
                </h1>

                <Search items={categories} />

                <div className="flex items-center gap-x-4">
                    <div className=" relative"
                        onMouseLeave={() => setLangOpen(false)}
                    >
                        <button className="bg-white hover:bg-white"
                            onClick={toggleLanguage}
                            onMouseEnter={() => { setUserOpen(false); setCurrencyOpen(false); setLangOpen(true) }
                            }
                        >
                            <Globe />
                        </button>
                        {langOpen && (
                            <div
                                className="absolute bg-white -start-[40%] shadow-lg z-50"
                                onMouseEnter={() => setLangOpen(true)}
                                onMouseLeave={() => setLangOpen(false)}
                            >
                                <ul className="flex flex-col divide-y divide-gray-500">
                                    {
                                        languages.map((item) =>
                                            <li key={item.code}>
                                                <button
                                                    className={`bg-white hover:bg-color hover:text-white text-black my-0 rounded-none ${item.code === language ? 'bg-color text-white' : ''} `}
                                                    onClick={() => {dispatch(setLanguage(item.code));setLangOpen(false)} }
                                                >
                                                    {item.name}
                                                </button>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative "
                        onMouseEnter={() => { setCurrencyOpen(true); setBagOpen(false); setLangOpen(false); setUserOpen(false) }}
                    >
                        <button className="bg-white hover:bg-white"
                            onClick={toggleCurrency}
                            onMouseEnter={() => { setUserOpen(false); setLangOpen(false); setCurrencyOpen(true) }
                            }
                        >
                            <CircleDollarSign />
                        </button>
                        {currencyOpen && (
                            <div
                                className="absolute bg-white -start-[50%] shadow-lg z-50"
                                onMouseEnter={() => setCurrencyOpen(true)}
                                onMouseLeave={() => setCurrencyOpen(false)}
                            >
                                <ul className="flex flex-col divide-y divide-gray-500">
                                    {
                                        currencies.map((item) =>
                                            <li key={item.code}>
                                                <button
                                                    className={`bg-white hover:bg-color hover:text-white text-black my-0 rounded-none ${item.code === currency ? 'bg-color text-white' : ''} `}
                                                    onClick={() => {dispatch(setCurrency(item.code));setCurrencyOpen(false)} }

                                                >
                                                    {item.name}
                                                </button>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative"
                        onMouseEnter={() => { setLangOpen(false); setCurrencyOpen(false) }}
                    >
                        <button className="bg-white hover:bg-white relative "
                            onClick={handleBagClicked}
                        >
                            <ShoppingCart />
                            <div className="absolute -top-1  start-1/2 text-xs  ">{bag.cart.length}</div>

                        </button>
                        {bagOpen && (
                            <div
                                className="absolute  end-0  bg-white z-50 w-[400px]   "
                                onMouseEnter={() => { setBagOpen(true); setFavoriteOpen(false); setUserOpen(false); setLangOpen(false); setCurrencyOpen(false) }}
                                onMouseLeave={() => { setBagOpen(false) }}
                            >
                                <div className=" flex flex-col gap-y-1 text-sm">
                                    <div className="border-b-[1px] border-gray-500 w-full p-4 bg-gray-100">{bag.cart.length} item in the bag</div>
                                    {
                                        bag.cart.length > 0 ? (
                                            <div className="">
                                                <div className="flex flex-col gap-y-3 space-y-[1px] p-4 ">
                                                    {

                                                        bag.cart.slice(0,3).map((item, index) =>
                                                            <div key={index} className="grid grid-cols-5  items-start ">

                                                                <img className="w-[57px]" src={item?.variation?.images[0]} alt="" />

                                                                <div className="col-span-3 flex flex-col gap-y-1 text-xs  -mt-0">
                                                                    <div className="line-clamp-0 flex justify-between">
                                                                        {item.product.title[language]}
                                                                    </div>
                                                                    <div className="flex justify-start gap-x-4 mt-3">
                                                                        size: {item.variation.attributes.size}
                                                                        <span>color: {item.variation.attributes.color} </span>
                                                                        <span>quantity : {item.quantity}</span>

                                                                    </div>
                                                                    {/* <span className="mt-1 ">in stock</span> */}
                                                                </div>
                                                                <span onClick={()=>dispatch(removeFromCart(item.id ,  item.variation.id)) } className=" note text-end cursor-pointer"> ❌ </span>
                                                            </div>
                                                        )
                                                    }

                                                </div>
                                                <div className="flex flex-col gap-y-2  p-4  bg-gray-100 ">
                                                    <div className="flex justify-between">
                                                        <span>total: </span>
                                                        <span>${bag.totalAmount}</span>
                                                    </div>
                                                    <div className="flex gap-x-4">
                                                        <button onClick={() => { navigate('/shopping_cart'); setBagOpen(false) }} className="bg-color hover:bg-color-hovered ">view all bag items </button>
                                                        <button onClick={() => { navigate('/order/checkout'); setBagOpen(false) }} className="bg-color hover:bg-color-hovered ">checkout </button>
                                                    </div>

                                                </div>

                                            </div>
                                        ) :

                                            (
                                                <div className={`bg-gray-50 flex flex-col  py-2 gap-y-2 text-sm text-center `}   >
                                                    <div className="  ">your shopping cart is Empty</div>
                                                    <div className="flex justify-center">
                                                        <button onClick={() => { navigate('/'); setBagOpen(false) }} className="w-[30%] bg-color ">Start shopping</button>
                                                    </div>
                                                </div>)
                                    }

                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative"
                        onMouseEnter={() => { setBagOpen(false); setLangOpen(false); setCurrencyOpen(false); setBagOpen(false) }}
                    >
                        <button className="bg-white hover:bg-white relative "
                            onClick={handleFAvoriteClicked}
                        >
                            <Heart />

                            <div className="absolute -top-1  start-[40%] text-xs  ">{bag.favorites.length}</div>

                        </button>
                        {favoriteOpen && (
                            <div
                                className="absolute  end-0  bg-white z-50 w-[400px]   "
                                onMouseEnter={() => { setFavoriteOpen(true); setBagOpen(false); setUserOpen(false); setLangOpen(false); setCurrencyOpen(false) }}
                                onMouseLeave={() => { setFavoriteOpen(false) }}
                            >
                                <div className=" flex flex-col gap-y-1 text-sm">
                                    <div className="border-b-[1px] border-gray-500 w-full p-4 bg-gray-100">{bag.favorites.length} favorite items </div>
                                    {
                                        bag.favorites.slice(0,3).length > 0 ? (
                                            <div className="">
                                                <div className="flex flex-col gap-y-3 space-y-[1px] p-4 ">
                                                    {
                                                        bag.favorites.slice(0 , 4).map((item, index) =>
                                                            <div key={index} className="grid grid-cols-5  items-start ">
                                                                <img className="w-[57px]" src={item?.variation?.images[0]} alt="" />
                                                                <div className="col-span-4 flex flex-col gap-y-1 text-xs  -mt-0">
                                                                    <div className="line-clamp-0 flex justify-between">
                                                                        {item.product.title['en']}
                                                                        <span onClick={()=>dispatch(removeFromFavorites(item.id ,  item.variation.id)) } className=" note text-end cursor-pointer"> ❌ </span>
                                           
                                                                    </div>
                                                                    <div className="grid grid-cols-3 text-center mt-3">
                                                                        size: {item.variation.attributes.size}  ,
                                                                        <span>color: {item.variation.attributes.color}  , </span>
                                                                        <span>price: {item.variation.price['$']} </span>
                                                                    </div>
                                                                    <span className="mt-1 ">in stock</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="flex flex-col gap-y-2  p-4  bg-gray-100 ">
                                                    <div className="flex gap-x-4">
                                                        <button onClick={() => { navigate('/favorites'); setFavoriteOpen(false) }} className="bg-color hover:bg-color-hovered  ">view all Favorite items </button>
                                                    </div>

                                                </div>

                                            </div>
                                        ) :

                                            (
                                                <div className={`bg-gray-50 flex flex-col  py-2 gap-y-2 text-sm text-center `}   >
                                                    <div className="  ">you havent have favorite items yet!</div>
                                                    <div className="flex justify-center">
                                                        <button onClick={() => { navigate('/'); setFavoriteOpen(false) }} className="w-[30%] bg-color ">Start shopping</button>
                                                    </div>
                                                </div>)
                                    }

                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative"
                        onMouseEnter={() => { setLangOpen(false); setCurrencyOpen(false) }}
                    >
                        <button className="bg-white hover:bg-white"
                            onClick={handleUserClicked}
                        >
                            <CircleUser />
                        </button>
                        {userOpen && (
                            <div
                                className="absolute  end-2 bg-white z-50 p-4 w-[400px]  "
                                onMouseEnter={() => setUserOpen(true)}
                                onMouseLeave={() => setUserOpen(false)}
                            >
                                {auth.token &&
                                    <div className=" flex flex-col gap-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <div className="flex gap-x-1">welcome: <span className="underline underline-offset-2 ">{auth?.user?.name} </span></div>
                                            {/* <div  className="cursor-pointer py-0 my-0 underline underline-offset-2  capitalize justify-center bg-inherit hover:bg-inherit">not you?</div> */}
                                        </div>
                                        <div className="flex gap-x-4 mt-4">
                                            <button className="my-1 py-1  bg-white text-gray-900 rounded-full border-[1px] border-gray-500 hover:bg-white hover:text-gray-900     ">your Profile </button>
                                            
                                            <button 
                                                onClick={() => {
                                                    if (auth?.token) {
                                                         logout({ token: auth.token })
                                                    } else {
                                                        console.error("No auth token found");
                                                    }
                                                }} 
                                                className="my-1 py-1 bg-color hover:bg-color-hovered"
                                            >
                                                Logout
                                            </button>                                 
                                 
                                            </div>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

