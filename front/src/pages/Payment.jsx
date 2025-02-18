import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { useSelector } from "react-redux";
function Payment() {
    const {user} = useSelector(state => state.auth)


    const initialValues = {
        name: user?.name ?? '',
        lastname : user?.lastname ?? '' ,
        email: user?.email ?? '',
        phone: user?.phone ??  '',
        address: '',
        house_number: user?.house_number ?? '',
        post_code: user?.post_code ?? '',
        coupon_code: '',
        nameOnCard: '',
        cardNumber: '',
        expirationDate: '',
        cvn: '',
    }

    const navigate = useNavigate(); 

    const validationSchema = yup.object({
        name: yup.string().required('Please enter your first name'),
        lastname: yup.string().required('Please enter your last name'),
        email: yup.string().email('must be email').required('is required'),
        phone: yup.string()
                    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
                    .required('Phone number is required'),
        address: yup.string().required('Please enter your address'),
        house_number: yup.string().required('required'),
        post_code: yup.string()
            .required('required')
            .matches(/^\d{3,4}(-\d{4})?$/ , 'Phone number must be 3 or 4 digits'),
        nameOnCard : yup.string().required().min(8),
        cardNumber :  yup
                            .string()
                            .required()
                            .matches(/^\d{12}$/) ,
    
    
        expirationDate : yup.string().required()
            .matches(
                /^(0[1-9]|1[0-2])\/([2-9][0-9])$/
                // t('yup.expiration_date')
            ).test(
            'is-expired',
            value => {
            if (!value) return false; // If value is empty, consider it expired
            const [month, year] = value.split('/');
            const expiration = new Date(parseInt('20' + year), parseInt(month) - 1, 1);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            return expiration >= currentDate;
            }
        ),  
    
        cvn : yup.string()
                            .required()
                            .matches(/^\d{3,4}$/)
        
    });

    const pay = (values) => console.log(values);

    return (
        <>
            <div className="mx-[16%] flex flex-col gap-y-10 py-8">

                {/* <h1 className="text-center  text-xl">Checkout </h1> */}

                <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between">
                        <div className="text-rose-500">Order Summary : </div>
                        <div onClick={()=>navigate('/shopping_cart')} className="cursor-pointer underline text-rose-500">Change</div>
                    </div>
                    <div className="grid grid-cols-2 gap-y-6  bordered p-3 rounded-md ">
                        <div className="ps-3 flex gap-x-4  ">Order amount: <span>$300 </span>    </div>
                        <div className="ps-3 flex gap-x-4 ">Vat:    </div>
                        <div className="ps-3 flex gap-x-4 ">Delivery Cost:    </div>
                        <div className="ps-3 flex gap-x-4 ">total amount:    </div>
                    </div>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={pay}
                    validateOnMount
                >
                    {/* {(formik) => { */}
                    {() => {
                        return (
                            <div className="flex flex-col gap-y-5">
                                <div className="text-rose-500">verify personal informations : </div>
                                <Form className="grid grid-cols-2 gap-x-12 gap-y-8">


                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>first name:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='name' type="text" placeholder="name" />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="name" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>last name:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='lastname' type="text" placeholder="lastname" />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="lastname" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>email:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='email' type="text" placeholder="email" />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="email" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>Phone:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='phone' type="text" placeholder="phone"
                                                        inputMode="numeric"
                                                        pattern="^\d{10}$"
                                                        maxLength={10} 
                                                        onInput={(e) => {
                                                            e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
                                                        }}                                              
                                            />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="phone" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>address:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='address' type="text" placeholder="address" />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="address" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>house number:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='house_number' type="text" placeholder="house_number" />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="house_number" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>postal code:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='post_code' type="text" placeholder="post_code" />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="post_code" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>Coupon code:</label>
                                        <div className="relative col-span-6  flex items-center">
                                                <Field name='coupon_code' type="text" placeholder="coupon_code" />
                                                <div className="absolute inset-y-0 end-0 rounded-e-full border-s-2 border-gray-400 cursor-pointer hover:bg-color-hovered px-2 text-gray-700 bg-color text-white">check</div>
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="coupon_code" />
                                        </div>
                                    </div>



                                    <div className="text-rose-500 col-span-2">Bank cart informations : </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>name on cart:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='nameOnCard' type="text" placeholder="nameOnCard" />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="nameOnCard" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>cart number</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='cardNumber' type="text" placeholder="cardNumber" 
                                              inputMode="numeric"
                                            //   pattern="^\d{10}$"
                                              onInput={(e) => {
                                                  e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
                                              }}     
                                            
                                            />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="cardNumber" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>expiration date:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='expirationDate' type="text" placeholder="expirationDate" />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="expirationDate" />
                                       </div>
                                    </div>

                                    <div className="grid grid-cols-8    ">
                                        <label className='col-span-2'>cvn:</label>
                                        <div className="relative col-span-6  flex items-center">
                                            <Field name='cvn' type="text" placeholder="cvn" 
                                    
                                                  maxLength={4} 
                                                  onInput={(e) => {
                                                      e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
                                                  }}     
                                            
                                            />
                                            <ErrorMessage component="div" className="absolute top-8 text-xs/4 text-red-500 ps-2" name="cvn" />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="col-span-2 w-1/2 mx-auto bg-color hover:bg-color-hovered"
                                    >
                                        Pay Now
                                    </button>
                                </Form>
                            </div>

                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

export default Payment


