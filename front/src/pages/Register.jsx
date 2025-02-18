    import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from 'yup'
import { subYears } from 'date-fns';
// import { register } from "../redux/Auth";
import { useDispatch } from "react-redux";
import { useToastr } from "../utils/toastr";
import { usePost } from "../hooks/useData";
import { success , loginFailure } from "../redux/Auth";
    function Register() {
        const dispatch = useDispatch()
        const toastr =  useToastr()
        const navigate = useNavigate()
        const initialValues = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            password_confirmation : '' , 
            dob: '',
            phone: '',
            house_number: '',
            post_code: ''
        }
        
        const onSuccess = (data) =>{
            dispatch(success( { user :  data.user , token :  data.token }));
            navigate('/')
            toastr.success('registered Successfully  ')
        }
        const onError = (error) =>{
            dispatch(loginFailure(error))
            console.log("Login successful", error);
            toastr.error('error credentials')
        }


        const { mutate: register, isLoading, error } = usePost('register' , {onSuccess , onError});


        const validationSchema = yup.object({
            name: yup.string().required('Please enter your first name'),
            lastname: yup.string().required('Please enter your last name'),
            email: yup.string().email('must be email').required('is required'),
            password: yup.string().required('required').min(8),
            password_confirmation :  yup.string().required().oneOf([yup.ref('password'), null] , 'password doesnt match'),
            dob: yup.date().required('required').max(subYears(new Date(), 18), 'You must be at least 18 years old'),
            phone: yup.string()
                        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
                        .required('Phone number is required'),
            house_number: yup.string().required('required'),
            post_code: yup.string()
                .required('required')
                .matches(/^\d{3,4}(-\d{4})?$/ , 'Phone number must be 3 or 4 digits')
        });

        return (
            <div className="py-8 ">
                <div className="text-xl text-rose-500 text-center">Create Joud Account </div>
                <div className="mx-[16%] pt-12  flex flex-col gap-y-5">
            <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={register}
                    validateOnMount
              
                >
                    {(formik) => {
                        return (
                            <Form className="grid grid-cols-2 gap-x-4 gap-y-6" >
  
                                <div className="grid grid-cols-6">
                                    <label className="col-span-2">first name:</label>
                                    <div className="relative col-span-4 items-center">
                                        <Field   name='name' type="text" placeholder="name" />
                                        <ErrorMessage component="div" className="absolute text-xs/4 text-red-500 ps-2"  name="name" />    
                                    </div>
                                </div>

                                <div className="grid grid-cols-6">
                                    <label className="col-span-2">last name:</label>
                                    <div className="relative col-span-4 items-center">
                                        <Field   name='lastname' type="text" placeholder="lastname" />
                                        <ErrorMessage component="div" className="absolute text-xs/4 text-red-500 ps-2"  name="lastname" />    
                                    </div>
                                </div>
  
                                <div className="grid grid-cols-6 items-center">
                                    <label className="col-span-2">Email address:</label>
                                    <div className="relative col-span-4">
                                        <Field   name='email' type="text" placeholder="email" />
                                        <ErrorMessage component="div" className="absolute text-red-500 text-xs/4 ps-2"  name="email" />    
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 items-center">
                                    <label className="col-span-2">Date Of Birth:</label>
                                    <div className="relative col-span-4">
                                        <Field name="dob" type="date" placeholder="Select a date" />
                                        <ErrorMessage component="div" className="absolute text-xs/4 text-red-500 ps-2"  name="dob" />    
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 items-center">
                                    <label className="col-span-2">Password:</label>
                                    <div className="relative col-span-4">
                                        <Field   name='password' type="password" placeholder="password" />
                                        <ErrorMessage component="div" className="absolute text-xs/4 text-red-500 ps-2"  name="password" />    
                                    </div>
                                </div> 
                                
                                <div className="grid grid-cols-6 items-center">
                                    <label className="col-span-2">Password Confirmation :</label>
                                    <div className="relative col-span-4">
                                        <Field   name='password_confirmation' type="password" placeholder="password_confirmation" />
                                        <ErrorMessage component="div" className="absolute text-xs/4 text-red-500 ps-2"  name="password_confirmation" />    
                                    </div>
                                </div>
                     
                                <div className="grid grid-cols-6 items-center">
                                    <label className="col-span-2">Contact phone:</label>
                                    <div className="relative col-span-4">
                                        <Field name="phone" type="text" placeholder="your phone" 
                                                            inputMode="numeric"
                                                            pattern="^\d{10}$"
                                                            maxLength={10} 
                                                            onInput={(e) => {
                                                                e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
                                                            }}                                                 
                                                            />
                                        <ErrorMessage component="div" className="absolute text-xs/4 text-red-500 ps-2"  name="phone" />    
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 items-center">
                                    <label className="col-span-2">house number:</label>
                                    <div className="relative col-span-4">
                                        <Field name="house_number" type="text" placeholder="your house number" 
                                                            inputMode="numeric"
                                                            maxLength={10} 
                                                            onInput={(e) => {
                                                                e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
                                                            }}                                                 
                                                            />
                                        <ErrorMessage component="div" className="absolute text-xs/4 text-red-500 ps-2"  name="house_number" />    
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 items-center">
                                    <label className="col-span-2">postal code:</label>
                                    <div className="relative col-span-4">
                                        <Field name="post_code" type="text" placeholder="your post_code" 
                                                            inputMode="numeric"
                                                            maxLength={10} 
                                                            onInput={(e) => {
                                                                e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
                                                            }}                                                 
                                                            />
                                        <ErrorMessage component="div" className="absolute text-xs/4 text-red-500 ps-2"  name="post_code" />    
                                    </div>
                                </div>

                                <div className="col-span-2 flex justify-center mt-2 ">
                                <button 
                                  disabled={isLoading}  
                                  className={` bg-color w-1/4 ${!formik.isValid ? '' : isLoading ? 'cursor-progress' : ''} flex items-center gap-2`} 
                                  type="submit"
                                >
                                  {isLoading && <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>}
                                  {isLoading ? "Registering " : "Register"}
                                </button>
                               
                                </div>                            


                            </Form>
                        )
                    }}
                </Formik>

                </div>
            </div>
        )
    }

export default Register