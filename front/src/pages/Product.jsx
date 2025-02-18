import { Expand, ArrowLeft, ArrowRight, X } from 'lucide-react'
import {   useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
import { useState, useEffect } from 'react';
import { useSelector ,  useDispatch } from "react-redux";
import { addToCart, addToFavorites } from "../redux/computed";
import Spinner from '../components/Spinner';
function Product() {
  const {language , currency} = useSelector((state) => state.general);
  const dispatch = useDispatch()
  const { sku_code } = useParams();
 
  const { data: product, isFetching, isFetched } = useData('products', {
  select: (data) => data?.data?.find(item => item.sku_code === sku_code),
  staleTime: 24 * 60 * 60 * 1000
  });

  const [variations, setVariations] = useState(null);
  const [current, setCurrent] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0); 
  const [iconVisible, setIconVisible] = useState(false)
  const [expand, setExpand] = useState(false)
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [sizeSelected, setSizeSelected] = useState(false)
  const [loading, setLoading] = useState(false); 


  useEffect(() => {
    if (isFetched && product?.variations?.length) {
      setVariations(product.variations);
      setCurrent(product.variations[0]);
      setColors([...new Set(product.variations.map(e => e.attributes.color))]);
      document.title =  product.title[language]  
      // navigate(`/style/${product.sku_code}?color=${product.variations[0].attributes.color}&size=${product?.variations[0].attributes.size}`)
    }
  }, [isFetched, product]);

  useEffect(() => {
    if (current) {
      setLoading(false); 
      setSizes([
        ...new Set(
          variations
            ?.filter(v => v.attributes.color === current.attributes.color)
            .map(v => v.attributes.size)
        ),

      ]);
      setColor(current.attributes.color)
      // setSize(current.attributes.size)
      // navigate(`/style/${product.sku_code}?color=${currency.attributes.color}&size=${size}`);
    }
  }, [current, variations]);


  const handleClick = (index) => {
    setActiveIndex(index + startIndex);
  };


  const handleColorClick = (c) => {
    if( color === c ) return;
    setLoading(true); 
    setColor(c)
    const selected = variations?.find(v => v.attributes.color === c)
    setCurrent(selected)
    setStartIndex(0)
    setActiveIndex(0); 
  }

  const handleSizeClick = (selectedColor, selectedSize) => { 
    setColor(selectedColor);
    setSize(selectedSize);
    setSizeSelected(true)
    
    const selected = variations?.find(
      v => v.attributes.color === selectedColor && v.attributes.size === selectedSize
    );
  
    if (selected) {
      setCurrent(selected);
    }
  };


  // const handleNext = () => {
  //   if (isFetched && startIndex + 4 < current.images.length) {
  //     setStartIndex((prev) => Math.min(prev + 1, current.images.length - 4));
  //   }
  // };

  // const handlePrev = () => {
  //   if (startIndex > 0) {
  //     setStartIndex((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  if(isFetching) return <Spinner />
  
  if(isFetched)
  {
    return (
      <>
      <div>


        {product?.variations?.map(item => {
          const selected= item === current;
          return (
            <div key={item.id}>
              {selected &&
  
  
                <div className="mx-[6%] py-6">
                  <div className="grid grid-cols-2 gap-10 px-4 py-8">
      
                    {
                          loading ? <Spinner />  :
                                        <div className="grid grid-cols-5 gap-4 ">  
                                          <div className="flex flex-col items-center gap-y-2">
                                           {/* {startIndex > 0 && (
                                              <div onClick={handlePrev} className={`-mt-3  `} >
                                                <ChevronUp
                                                  color={` ${ startIndex > 0 ? 'black' : 'gray'  } `} strokeWidth={1}
                                                /></div>
                                            )} */}
                                            <div className="flex flex-col gap-1">
                                              {JSON.parse(current.images).slice(0 , 4).map((e, index) => (
                                                <img
                                                  key={index + startIndex}
                                                   className={`h-[135px] w-[100px] cursor-pointer ${activeIndex === index +startIndex && !loading  ? "border-[2px] border-rose-500" : ""
                                                    }`}
                                                  src={e}
                                                  onClick={() => handleClick(index)}
                                                />
                                              ))}
                                            </div>
                                            {/* <div onClick={handleNext} className={`  `} >
                                              <ChevronDown
                                                color={` ${startIndex + 4 < current.images.length ? 'black' : 'gray'} `} strokeWidth={1}
                                              /></div> */}
                                          </div>
                                          <div className="relative  col-span-4" onMouseEnter={() => setIconVisible(true)} onMouseLeave={() => setIconVisible(false)}>
                                            <img className="h-[600px] w-full" src={JSON.parse(current.images)[activeIndex]} />
                                            {iconVisible &&
                                              <>
                                                <Expand onClick={() => setExpand(true)} className="svg  top-3 end-1    " color="black" size={32} strokeWidth={1} />
                                                <ArrowLeft onClick={prev} className="svg top-1/2 start-1  " color="black" size={24} strokeWidth={1} />
                                                <ArrowRight onClick={next} className="svg top-1/2 end-1  " color="black" size={24} strokeWidth={1} />
                                              </>
                                            }
                                          </div>
                                        </div>                  
                    }
                    <div className="px-[6%] flex flex-col gap-y-3 border-b-[1px]  border-rose-500 ">
                      <div className="flex flex-col gap-y-1 border-b-[1px]  border-rose-500">
                        <div className="flex justify-between items-center  ">
                          <span className=" tracking-wider capitalize ">{product.title[language]}</span>
                          <span className=" tracking-wider capitalize " > {currency} {current.price[currency]}</span>
                        </div>
                        <span className="pb-2 text-end  text-xs underline  underline-offset-2  " >{product.sku_code}</span>
                      </div>
                      {/* <div className="flex flex-col gap-y-1 ">
                        <p className="paragraph text-xs/4 pb-0 ">{product.description[language]}</p>
                      </div> */}
                      <div className=" py-8">
                        <div className="flex flex-col gap-y-3  w-[60%] ">
                          <div className="flex flex-col gap-y-1">
                          <div className="flex items-center gap-x-4">
                               <label className="label ">colour: {current.attributes.color}</label>
                               {/* <p className='note '>please select the size</p>                        */}
                            </div>  
                            <label className="label "></label>
  
                            <div className="flex gap-x-4">
                              {colors.map((color, index) => (
                                <div key={index} className={` rounded-full p-1 flex justify-center items-center ${current.attributes.color === color ? 'bordered ' : ''}`}
                                  onClick={() => handleColorClick(color)}>
                                  <div className={` rounded-full ${  current.attributes.color === color ? 'w-6 h-6' : 'w-7 h-7' }   `}
                                    style={{ backgroundColor: color }}>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-1">
                            <div className="flex items-center gap-x-4">
                               <label className="label ">Size: {size}</label>
                                {!sizeSelected && <p className='note text-red-500'>please select the size</p> }                      
                            </div>  
  
                            <div className="flex gap-x-4">
                              {sizes.map((item, index) => (
                                <div key={index} className={`  flex justify-center items-center `}
                                  onClick={() => handleSizeClick(color ,  item)}>
                                  <div className={` cursor-pointer bordered py-1 w-12 text-xs text-center ${size === item ? 'bg-color text-white' : ''}  `}>
                                      {item}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex  gap-x-4  mt-10">
                            <button disabled={!sizeSelected} onClick={() => {  dispatch(addToCart(product, current, 1)); setSize('')  }} className="bg-color hover:bg-color-hovered">Add to bag</button>
                            <button onClick={() => dispatch(addToFavorites(product, current))} className="bg-color hover:bg-color-hovered">Add to favourites</button>
                          </div>

                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          );
        })}
      </div>



      {expand &&
          <>
            <div className=" fixed z-50   inset-0  bg-white ">
              <div className="grid grid-cols-3 gap-x-3 ">
              <div className="flex flex-col justify-center items-center gap-y-2">
  
                  {/* {startIndex > 0 && (
                  <div onClick={handlePrev} className={`  `} >
                    <ChevronUp
                      color={` ${ startIndex > 0 ? 'black' : 'gray'  } `} strokeWidth={1}
                    /></div>
                   )}  */}
  
                  <div className="flex flex-col gap-1">
                    {JSON.parse(current.images).slice(0 , 4).map((e, index) => (
                      <img
                        key={index + startIndex}
                        className={`h-[135px] w-[100px] cursor-pointer ${activeIndex === index + startIndex ? "border-[2px] border-gray-500" : ""
                          }`}
                        src={e}
                        onClick={() => handleClick(index)}
                      />
                    ))}
                  </div>
                    {/* {   startIndex + 4 < images.length && (
                        <div onClick={handleNext} className={`  `} >
                        <ChevronDown
                          color={` ${ startIndex + 4 < images.length ? 'black' : 'gray'  } `} strokeWidth={1}
                        /></div>
                    )      
                   } */}
  
  
                    </div>
                <img className="h-full w-full"
                  src={JSON.parse(current.images)[activeIndex]} />
                <div onClick={() => setExpand(false)} className="p-6 flex fixed top-1 end-1" >
                  <div className="rounded-full border-[1px] border-gray-500 p-2 cursor-pointer">
                    <X />
                  </div>
                </div>
              </div>
              <div className="fixed inset-x-0 bottom-0 title text-center bg-gray-50 py-5">
                {product.title['en']}
              </div>
            </div>
  
          </>
        }
      </>
  
    );
  }

}

export default Product;
