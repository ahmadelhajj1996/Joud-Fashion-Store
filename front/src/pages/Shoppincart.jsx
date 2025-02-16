import { useNavigate } from "react-router-dom";
import Emptylist from "../components/Emptylist";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../redux/computed";


function Shoppincart() {
    const { language} = useSelector((state) => state.general);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const totalAmount = useSelector(state => state.bag.totalAmount);
    const cartItems = useSelector(state => state.bag.cart);
    document.title = `shopping bag (${cartItems.length}) items `


    return (
        <>
                <div className="mx-[16%]  py-8   ">
                    {
                        cartItems.length > 0 ?
                            (

                                <div className="relative grid grid-cols-5 gap-x-12   ">
                                    <div className="col-span-4 flex flex-col gap-y-5  ">

                                        <div className="">
                                            <div className="flex justify-between items-center">
                                                <div className="text-lg text-rose-500"> Shopping Bag ( {cartItems.length} )</div>
                                                <div onClick={() => dispatch(clearCart())} className="cursor-pointer underline text-rose-500 pt-3">clear all bag</div>
                                            </div>
                                            <span className="paragraph -pt-2">Your bag contains {cartItems.length} items and comes to a total of ${totalAmount}</span>
                                        </div>


                                        <div className="flex flex-col gap-y-1">
                                            {cartItems.map((item, index) =>
                                                <div key={index} className=" grid grid-cols-5 gap-x-0  bordered">
                                                    <img className="h-[160px] w-[160px]" src={item.variation.images[0]} />


                                                    <div className="flex flex-col gap-y-0 col-span-4  p-2  ">
                                                        <div className=" text-xs/2 flex justify-between ">
                                                            {item.product.title[language]}
                                                            <div className="flex flex-col gap-y-1">
                                                                <span className="tracking-wider capitalize">total: ${item.total}</span>
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
                                                        <div className="flex justify-between items-center  mt-[56px]">

                                                            <div className="flex items-center gap-x-1  w-1/3 text-sm text-gray-700  ">
                                                                qty:
                                                                <div className="w-full py-0 flex justify-between items-center      rounded-full    border-[1px] border-gray-500">
                                                                    <div onClick={() => dispatch(decreaseQuantity(item.id, item.variation.id))} className="w-1/3 border-e-[1px] border-gray-500 text-center text-lg cursor-pointer">-</div>
                                                                    <div className="w-1/3 text-center text-lg border-e-[1px] border-gray-500">{item.quantity}</div>
                                                                    <div onClick={() => dispatch(increaseQuantity(item.id, item.variation.id))} className="w-1/3 text-center text-lg cursor-pointer">+</div>

                                                                </div>
                                                            </div>
                                                            <div onClick={() => dispatch(removeFromCart(item.id, item.variation.id))} className="cursor-pointer  text-rose-400">remove</div>

                                                        </div>


                                                    </div>




                                                    {/* <div className="flex flex-col justify-between p-2 text-end">
                                                        <span className="text-xs underline -mt-4 underline-offset-2">AB5-935</span>
                                                    </div> */}
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-3 ps-4 sticky top-48 self-start">
                                        <div className="flex gap-x-2 text-md"> Subtotal: <span>${totalAmount}</span> </div>
                                        <div className="flex gap-x-2 text-md"> VAT: <span>${totalAmount * 5 / 100}</span> </div>
                                        <div className="flex gap-x-2 text-md"> Total: <span>${totalAmount + totalAmount * 5 / 100}</span> </div>
                                        <button onClick={() => navigate('/order/checkout')} className="bg-color hover:bg-color">Checkout</button>
                                    </div>
                                </div>
                            )


                            :
                            <Emptylist title='shopping cart' />
                    }



                </div>



        </>
    )
}

export default Shoppincart