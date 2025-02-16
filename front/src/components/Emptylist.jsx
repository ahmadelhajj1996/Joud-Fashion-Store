import { useNavigate } from "react-router-dom"
function Emptylist(props) {
    const navigate = useNavigate()
    const {title , className} = props
    return (
        <>
            <div className={ `bordered flex flex-col rounded-md  py-12 gap-y-2 text-sm text-center ${className}`}   >
                    <div className="  ">your {title} is Empty</div>
                    <div className="flex justify-center ">
                        <button onClick={()=>navigate('/')} className="w-[30%] bg-color hover:bg-color-hovered">Start shopping</button>  
                    </div>
            </div>
        </>
    )
}

export default Emptylist

