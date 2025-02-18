import Container from '../components/Container'
import Spinner from '../components/Spinner'
import { Heart } from "lucide-react";
import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { addToFavorites } from '../redux/computed';
import { useInfiniteData } from '../hooks/useData';
import { useSelector, useDispatch } from 'react-redux';

function Category() {
    const { language, currency } = useSelector((state) => state.general);
    const dispatch = useDispatch()
    const { categoryId } = useParams()
    document.title = ' Joud`s ' + categoryId
    const [selectedItem, setSelectedItem] = useState(null);
    const [sortOption, setSortOption] = useState('alphabet')
    const sortOptions = [ 'alphabet', 'lower price', 'higher price']

    const fn = (data) => {
        return data?.pages?.map((page) => {
            return page?.data?.map((item) => {
                let url = `${item.title['en']}`;
                return {
                    ...item,
                    link: decodeURIComponent(url),
                };
            });
        }).flat();
    };

    const { data: products, loadMoreRef, isFetching , isFetched } = useInfiniteData("products1", categoryId, fn);


    const handleItemClick = (index) => {
        selectedItem == null || selectedItem != index ? setSelectedItem(index) : setSelectedItem(null)
    };

    const attributeValues = products?.length > 0 ? products.reduce((acc, product) => {
        product.variations.forEach((variation) => {
            Object.entries(variation.attributes).forEach(([key, value]) => {
                if (!acc[key]) {
                    acc[key] = new Set();
                }
                acc[key].add(value);
            });
        })
        return acc;
    }, {}) : []

    Object.keys(attributeValues).forEach((key) => {
        attributeValues[key] = [...attributeValues[key]];
    });
    const filtertOptions = Object.keys(attributeValues);
    const [selectedValues, setSelectedValues] = useState([]);
    const handleCheckboxChange = (value) => {
        setSelectedValues((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((v) => v !== value)
                : [...prevSelected, value]
        );
    };
    const [selectedVariations, setSelectedVariations] = useState({});

    const handleColorClick = (productId, color) => {
        const product = products.find(p => p.id === productId);
        const selectedVariation = product.variations.find(v => v.attributes.color === color);
        setSelectedVariations(prev => ({ ...prev, [productId]: selectedVariation }));
        console.log(productId)
        console.log(color)
    };
    
    const filteredProducts = useMemo(() => {
        if (!products) return [];
    
        let filtered = selectedValues.length === 0
            ? products
            : products.filter(product =>
                product.variations.some(variation =>
                    Object.values(variation.attributes).some(value =>
                        selectedValues.includes(value)
                    )
                )
            );
        switch (sortOption) {
            case "alphabet":
                filtered.sort((a, b) => a.title[language].localeCompare(b.title[language]));
                break;
            case "lower price":
                filtered.sort((a, b) => {
                    const priceA = a.variations[0].price[currency];
                    const priceB = b.variations[0].price[currency];
                    return priceA - priceB;
                });
                break;
            case "higher price":
                filtered.sort((a, b) => {
                    const priceA = a.variations[0].price[currency];
                    const priceB = b.variations[0].price[currency];
                    return priceB - priceA;
                });
                break;
            default:
                break;
        }
    
        return filtered;
    }, [selectedValues, products, sortOption, language, currency]);
    



    if(isFetching) return <Spinner />

    if ( isFetched &&  products?.length) {
        return (
            <>
                <div className="mx-[6%]">
                    <div className="fixed top-[150px] bg-white  inset-x-[6%] z-40 flex flex-col gap-y-2">
                        <div className="flex justify-between items-center">
                       { isFetched ?  <h1 className="title">    ({products.length})</h1> : ' '} 
                            <div className="flex gap-x-3 px-4" >
                                sort:
                                <select
                                    value={sortOption}
                                    onChange={(e) => { setSortOption(e.target.value); console.log(e.target.value); }}
                                    className="px-4  py-1 text-sm   rounded-full  w-full  border-2 border-[1px] text-white bg-color   focus:outline-none"
                                >
                                    {sortOptions.map(e => (
                                        <option key={e} value={e} className={ e === sortOption ? 'bg-color' : '' }>
                                            {e}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={`grid grid-cols-${filtertOptions.length < 6 ? filtertOptions.length + (5 - filtertOptions.length) : '6'}`} >
                            {
                                filtertOptions.map((item, index) =>
                                (
                                    <div key={index} className="relative"
                                        onMouseEnter={() => handleItemClick(index)}
                                        onMouseLeave={() => setSelectedItem(null)}
                                    >
                                        <div
                                            className={`text-start bg-white p-3 border-[1px] border-gray-500 cursor-pointer 
                                                       ${selectedItem === index ? 'bg-color text-white ' : ''} 
                                                       ${index + 1 < filtertOptions.length ? 'border-r-0' : 'border-r-[1px]'}`
                                            }
                                            onClick={() => handleItemClick(index)}
                                        >
                                            {item}
                                        </div>

                                        {index === selectedItem &&
                                            <div className="absolute z-50 bg-white w-full border-[1px] border-gray-500 border-top-0     ">
                                                <div className="flex justify-between  text-sm  p-2 px-3 border-b-[1px] border-gray-500">
                                                    <div onClick={() => setSelectedValues([])} className="cursor-pointer  text-green-500 ">clear {item} filters</div>
                                                    <div onClick={() => setSelectedItem(null)} className="cursor-pointer  text-green-500 ">x </div>
                                                </div>
                                                <div className="p-3 flex flex-col gap-y-2">
                                                    {attributeValues[item].map((e, index) => (
                                                        <div  key={index} className="flex gap-x-2 items-center ">
                                                            <input type="checkbox"
                                                                checked={selectedValues.includes(e)}
                                                                onChange={() => handleCheckboxChange(e)}
                                                                className="w-3 h-3 accent-rose-500 caret-black" />
                                                            <div className={`text-xs/5 ${ selectedValues.includes(e) ? 'text-rose-500' : '' } `}>{e}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )

                                )
                            }

                        </div>
                    </div>

                    <Container container_class={'mt-40'}>
                        {isFetching && <Spinner />}
                        <div className="grid grid-cols-4 gap-x-4 gap-y-8 justify-center items-center">
                            {filteredProducts.map((product) => {
                                const selectedVariation = selectedVariations[product.id] || product.variations[0];
                                const currentImage = JSON.parse(selectedVariation.images)[0];
                                const availableColors = [...new Set(product.variations.map(v => v.attributes.color))];

                                return (
                                    <div key={product.id} className="">
                                        <div className="relative">
                                            <Link to={`/style/${product.sku_code}`} className="">
                                                <img src={currentImage} className='w-full h-[400px]' alt={product.title.en} />
                                            </Link>
                                            <div onClick={() => dispatch(addToFavorites(product, product.variations[0]))}
                                                className="absolute bottom-4 end-3">
                                                <Heart className="w-8 h-8 bg-white p-1 rounded-full" color='black' strokeWidth={0.5} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col pt-3">
                                            <div>{product.title[language].slice(0, 38) + '...'}</div>
                                            <div className="">  {selectedVariation.price[currency]} {currency} </div>
                                            <div className="flex gap-x-3 mt-2">
                                            </div>
                                        </div>


                                        <div className='flex gap-x-4'>
                                            {availableColors.map((color, index) => (
                                                <div key={index} className={` rounded-full p-[1px] flex justify-center items-center ${selectedVariation.attributes.color === color ? 'bordered ' : ''}`}
                                                    onClick={() => handleColorClick(product.id, color)}>
                                                    <div className={`w-6 h-6 rounded-full  `}
                                                        style={{ backgroundColor: color }}>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                    <div ref={loadMoreRef} style={{ height: "10px", background: "transparent" }}></div>



                </div>

            </>
        )
    }

}

export default Category