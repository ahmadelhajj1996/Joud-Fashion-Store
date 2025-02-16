import toastr from "toastr";
import 'toastr/build/toastr.min.css';


export const  useToastr = () =>
    {
        toastr.options.positionClass = 'toast-bottom-center'
        toastr.options.progressBar = true
        toastr.options.timeOut= 2500
        toastr.options.preventDuplicates = true
        toastr.options.rtl =  false
        // if( locale.value == 'ar' )
        // { toastr.options.rtl =  true
        // }
        toastr.options.defaultClassNames =  ['animated', 'zoomInUp' , 'text-white' ]
        
        return  toastr;
    }
    