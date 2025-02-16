import Emptylist from "../components/Emptylist";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromFavorites } from "../redux/computed";
import { useToastr } from "../utils/toastr";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const { language } = useSelector((state) => state.general);
  const dispatch = useDispatch()
  const toastr = useToastr()
  const favorites = useSelector(state => state.bag.favorites);  // Accessing cart items
  const navigate = useNavigate()
  document.title = `${favorites.length} favorite items `

return (
    <>
      <div className="mx-[16%]  py-8   ">
        {
          favorites.length > 0 ?
            (

              <div className="relative grid grid-cols-5 gap-x-12   ">
                <div className="col-span-4 flex flex-col gap-y-5  ">

                  <div className="">
                    <div className="flex justify-between items-center">
                      <div className="text-lg text-rose-500"> Favorites( {favorites.length} )</div>
                    </div>
                  </div>


                  <div className="flex flex-col gap-y-1">
                    {favorites.map((item, index) =>
                      <div key={index} className=" grid grid-cols-5 gap-x-0  bordered">
                        <img className="h-[160px] w-[160px]" src={item.variation.images[0]} />


                        <div className="flex flex-col gap-y-0 col-span-4  p-2 pb-0  ">
                          <div className=" text-xs/2 flex justify-between ">
                            {item.product.title[language]}
                            <div className="flex flex-col gap-y-1">
                              <span className="tracking-wider capitalize">total: ${item.variation.price['$']}</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-y-4 mt-4 text-xs/4 justify-center items-center ">

                            <div className="flex gap-x-1 items-center  ">
                              <div >Size:</div>
                              {item.variation.attributes.size}
                            </div>
                            <div className="flex gap-x-1 items-center  ">
                              <div >color:</div>
                              {item.variation.attributes.color}
                            </div>
                            <div onClick={() => navigate(`/style/${item.product.sku_code}`)} className="cursor-pointer underline text-rose-500">Change</div>
                          </div>
                          <div className="flex justify-between items-center justify-center mt-6  ">

                            <button
                              onClick={() => dispatch(addToCart(item.product, item.variation, 1, toastr))}
                              className="bg-color hover:bg-color-hovered w-1/3 py-[6px]   ">Add To Bag</button>
                            <div onClick={() => dispatch(removeFromFavorites(item.id, item.variation.id))}
                              className="  text-end  cursor-pointer  text-rose-400 ">remove</div>

                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>


              </div>
            )


            :
            <Emptylist title='shopping cart' />
        }



      </div>


      {/* <div className="mx-[16%]  p-8   ">
        {
          favorites.length > 0 ?
            (
              <div className=" flex flex-col  mx-[16%] bg-gray-50 p-4 ">
                <div className="title py-0 text-base"> Favorites ( {favorites.length} )</div>

                <div className="flex flex-col gap-y-1 mt-4 ">
                { favorites.map((item , index ) =>

                  <div key={index} className=" grid grid-cols-5 gap-x-0  border-[1px] border-gray-500">
                    <img className="h-[200px] w-[180px]  cursor-pointer" src={item.variation.images[0]} />
                    <div className="flex flex-col gap-y-0 col-span-3 p-2  ">
                      <div className="title py-0 text-xs/2 ">
                        {item.product.title[language]}
                      </div>
                      <div className=" py-0 text-xs/6 ">in Stock</div>

                      <div className="flex gap-x-2 mt-8">
                        <div className="flex gap-x-2 w-1/3">
                          <label className="label ">Size:</label>
                          <div>{item.variation.attributes.size}</div>
                        </div>
                        <div className="flex gap-x-2 w-1/3">
                          <label className="label ">color:</label>
                          <div>{item.variation.attributes.color}</div>
                        </div>
                        <div onClick={()=>console.log('navigate to the product page ')} className=" cursor-pointer underline underline-offset-2 text-green-500 justify-center bg-inherit hover:bg-inherit ">change</div>
                      </div>                      
                      <button onClick={()=>dispatch(addToCart(item.product , item.variation , 1 , toastr ))} className="w-1/2 mx-auto mt-8 mb-0 py-1  bg-teal-500 hover:bg-teal-600">Add To bag</button>
                    </div>
                    <div className="flex flex-col justify-between p-2 text-end">
                      <span className="tracking-wider capitalize"> {currency} {item.variation.price[currency]}</span>
                      <span className="text-xs underline -mt-4 underline-offset-2">{item.product.sku_code}</span>
                      <div onClick={()=>dispatch(removeFromFavorites(item.id , item.variation.id))} className="mt-24  cursor-pointer underline underline-offset-2 text-red-500 justify-center bg-inherit hover:bg-inherit ">remove</div>
                    </div>
                   </div>
                )}
                </div>
              </div>
            ) :

           <Emptylist title='favorites list' />
          }
   
      </div> */}


    </>
  )
}

export default Favorites


