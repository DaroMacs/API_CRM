import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alert from './Alert'
import Spinner from './Spinner'


const Formular = ({customer, loading}) => {

    const navigate = useNavigate()

    const newCustomerSchema = Yup.object().shape({
        name: Yup.string().min(3,'Name too short').max(20,'Name too long').required('Name is a required field'),
        company:Yup.string().min(3,"Company's name too short").required("Company's name is a required field"),
        email: Yup.string().required("E-mail is a required field").email("Must be a valid E-mail"),
        phone: Yup.number().typeError('Number is not valid').integer('Number is not valid').positive('Number is not valid') 
    }) 

    const handleSubmit = async (values) => {
       try {
           let response;
        if(customer.id) {
            //EDITING NEW REGISTER
            const url =  `${import.meta.env.VITE_API_URL}/${customer.id}`

            //THIS ASYNC IS TO POST IN THE SERVER
            response = await fetch (url, {
                 method: 'PUT',
                 body: JSON.stringify(values),
                 headers: {
                     'Content-Type': 'application/json'
                 }
             })

        } else {
            //NEW CUSTOMER
            const url =  import.meta.env.VITE_API_URL

            //THIS ASYNC IS TO POST IN THE SERVER
            response = await fetch (url, {
                 method: 'POST',
                 body: JSON.stringify(values),
                 headers: {
                     'Content-Type': 'application/json'
                 }
             }) 
        }

        await response.json()
 
        navigate('/')

       } catch (error) {
           console.log(error);
       } 
    }

    return (
        loading ? <Spinner /> : (

            <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl text-center'>{customer?.name ? 'Edit Customer' : 'Add New Customer'}</h1>
                
                <Formik
                    initialValues={{
                        name: customer?.name ?? "",
                        company:customer?.company ?? "",
                        email:customer?.email ?? "",
                        phone:customer?.phone ?? "",
                        notes: customer?.notes ?? ""                    
                    }}

                    enableReinitialize = {true}

                    onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values) //THIS IS TO WAIT FOR THE SUBMIT TO POST IN THE SERVER AND THEN RESETFORM()

                    resetForm()
                    }}            
                    validationSchema={newCustomerSchema}
                >

                    {({errors, touched}) => {
                    return (
                    <Form
                        className='mt-5'
                    >
                        
                        <div className='mb-4'>
                            <label 
                                className='text-gray-800'
                                htmlFor="name">Name: </label>
                            <Field 
                                id='name'
                                type='text'
                                className= 'mt-2 block w-full p-3 bg-gray-100 rounded-md'
                                placeholder = 'New Customer Name'
                                name = 'name'  
                            />

                            {errors.name && touched.name ? (
                            <Alert>{errors.name}</Alert>
                            ) : null}
                        </div>

                        {/* {COMPANY NAME} */}
                        <div className='mb-4'>
                            <label 
                                className='text-gray-800'
                                htmlFor="company">Company: </label>
                            <Field 
                                id='company'
                                type='text'
                                className= 'mt-2 block w-full p-3 bg-gray-100 rounded-md'
                                placeholder = "Customer's Company"
                                name = 'company'  
                            />

                            {errors.company && touched.company ? (
                            <Alert>{errors.company}</Alert>
                            ) : null}
                        </div>
                        
                        {/* {EMAIL} */}
                        <div className='mb-4'>
                            <label 
                                className='text-gray-800'
                                htmlFor="email">E-mail: </label>
                            <Field 
                                id='email'
                                type='email'
                                className= 'mt-2 block w-full p-3 bg-gray-100 rounded-md'
                                placeholder = "Customer's E-mail"  
                                name = 'email'
                            />

                            {errors.email && touched.email ? (
                            <Alert>{errors.email}</Alert>
                            ) : null}
                        </div>
                    
                        {/* {PHONE} */}
                        <div className='mb-4'>
                            <label 
                                className='text-gray-800'
                                htmlFor="phone">Phone: </label>
                            <Field 
                                id='phone'
                                type='tel'
                                className= 'mt-2 block w-full p-3 bg-gray-100 rounded-md'
                                placeholder = "Customer's Phone"
                                name='phone' 
                            />

                            {errors.phone && touched.phone ? (
                            <Alert>{errors.phone}</Alert>
                            ) : null}
                        </div>
                        
                        {/* {COMMENTS OR NOTES} */}
                        <div className='mb-4'>
                            <label 
                                className='text-gray-800'
                                htmlFor="notes">Notes: </label>
                            <Field 
                                as = "textarea" /*TO MAKE IT TEXT AREA */
                                id='notes'
                                type='text'
                                className= 'mt-2 block w-full p-3 bg-gray-100 rounded-md h-50'
                                placeolder = "Customer's Notes"
                                name='notes' 
                            />
                        </div>

                        <input type="submit" value={customer?.name ? 'Save Changes' : 'Add New Customer'} className="mt-5 w-full bg-blue-800 text-white font-bold text-lg rounded-md" />
                    </Form>
                    )}}
                </Formik>
            </div>
        ) 
    )
}

Formular.defaultProps = {
    customer: {},
    cargando: false
}

export default Formular