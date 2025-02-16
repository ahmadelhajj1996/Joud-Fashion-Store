import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { Formik, Form,  ErrorMessage, Field } from "formik";
import * as yup from 'yup'
import {useToastr} from '../utils/toastr.js'
import { usePost } from "../hooks/useData.js";
import {success , loginFailure} from '../redux/Auth.js'
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const toastr = useToastr()
  const initialValues = {
      email: '' , 
      password: ''
  }
  const validationSchema = yup.object({
    email: yup.string().email('must be email').required('is required'), 
    password : yup.string().required('required').min(8)
  });

    
  const onSuccess = (data) =>{
    dispatch(success( { user :  data.user , token :  data.token }));
    navigate('/')
    toastr.success('logged in ')
  }
  const onError = (error) =>{
      dispatch(loginFailure(error))
      console.log("Login successful", error);
      toastr.error('error credentials')
  }

  const { mutate: login, isLoading, error } = usePost('login' , {onSuccess , onError});


  return (
    <>
        <div className="grid grid-cols-2 gap-4 py-8  mx-[16%]">
          <div className="card flex flex-col   ">
                <div className="title">Existing Customer </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={login} 
                >
                    {(formik) => {
                        return (
                            <Form className="flex flex-col gap-y-4">
                                <div className="relative">
                                    <label>Email address:</label>
                                    <Field   name='email' type="text" placeholder="email" />
                                    <ErrorMessage component="div" className="absolute text-red-500 text-xs/4 ps-2 "  name="email" />    
                                </div>

                                <div className="relative">
                                    <label>Password:</label>
                                    <Field  name='password' type="password" placeholder="password" />
                                    <ErrorMessage component="div" className="absolute text-red-500 text-xs/4 ps-2 "  name="password" />    
                                </div>
                                <button 
                                  disabled={isLoading}  
                                  className={` bg-color ${!formik.isValid ? '' : isLoading ? 'cursor-progress' : ''} flex items-center gap-2`} 
                                  type="submit"
                                >
                                  {isLoading && <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>}
                                  {isLoading ? "Logging in" : "Login"}
                                </button>
                            </Form>
                        )
                    }}
                </Formik>

          </div>
            
          <div className="card flex flex-col  text-center   ">
                <h1 className="title">New Customers ? </h1>
              <button onClick={()=>navigate('/account/register')} className="field w-2/3 mx-auto bg-color">Register</button>  
              </div>
        </div>
    </>
  )
}

export default Login