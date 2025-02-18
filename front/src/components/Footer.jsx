import { Facebook  , Twitter , Instagram    } from "lucide-react";
import { useSelector } from "react-redux";

function Footer() {
    const {language} = useSelector(state => state.general)

  return (
    <div >
    <div className="p-6 border-t-[1px] border-gray-500">
        <div className="flex flex-col justify-center items-center">
            <div className="sub_title mb-0 text-rose-600">Our Social Networks</div>
            <div className="grid grid-cols-3 items-center gap-x-12">
            <Facebook />
            <Twitter />               
            <Instagram />            
            </div>
        </div>
        <div className="grid grid-cols-3  mx-[3%] my-4">
            <div className="flex flex-col items-start gap-y-4">
                <div className="sub_title">Departments </div>  
                <div className="text-xs cursor-pointer underline underline-offset-2 ">women</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">men</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">boys</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">girls</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">baby</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">beauty</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">gifts</div>
            </div>
            <div className="flex flex-col  items-start gap-y-4">
                <div className="sub_title">Shopping With Us </div>  
                <div className="text-xs cursor-pointer underline underline-offset-2 ">Privacy & Cookie Policy</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">Terms & Conditions</div>
            </div>
            <div className="flex flex-col  items-start gap-y-4">
                <div className="sub_title">help </div>  
                <div className="text-xs cursor-pointer underline underline-offset-2 ">frequently asked questions</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">Contact Us</div>
                <div className="text-xs cursor-pointer underline underline-offset-2 ">Arrange A Return</div>


            </div>
        </div>
        <div className="text-center mt-12 sub_title text-rose-600">
                    © 2025 joud fashion. All rights reserved.  
        </div>
    </div>
    </div>
  )
}

export default Footer