import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

const DetailsCustomer = () => {

    const [customer, setCustomer] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect( () => {
        const getCustomerAPI = async () => {
            try {
                const url = `http://localhost:4000/customers/${id}`
                const response = await fetch(url)    
                const result = await response.json()
                
                setCustomer(result)
                

            } catch (error) {
                console.log(error);
            }

            setTimeout(() => {
                
                setLoading(!loading)
            }, 800);
        }

        getCustomerAPI()
    }, []) 

    const {name, company, email, phone, notes} = customer

    return (
        
        loading ? <Spinner /> : 
            Object.keys(customer).length === 0 ? <p>There are no results.</p> : 
            
            (

            <div>

                    <h1 className='font-black text-2xl text-blue-900 '>{name}'s Details</h1>
                    <p className='mt-2'>Customer's information.</p>

                    {name && (
                    <p className='text-2xl text-gray-700 mt-10'>
                        <span className="text-gray-600 font-bold">Customer: </span> 
                        {name}
                    </p>
                    )}

                    {email && (
                    <p className='text-1xl text-gray-700 mt-1'>
                        <span className="text-gray-600 font-bold">E-mail: </span> 
                        {email}
                    </p>
                    )}

                    {phone && (
                    <p className='text-1xl text-gray-700 mt-1'>
                        <span className="text-gray-600 font-bold">Phone: </span> 
                        {phone}
                    </p>
                    )}
                    
                    {company && (
                    <p className='text-1xl text-gray-700 mt-1'>
                        <span className="text-gray-600 font-bold">Company: </span> 
                        {company}
                    </p>
                    )}

                    {notes && (
                    <p className='text-1xl text-gray-700 mt-1'>
                        <span className="text-gray-600 font-bold">Notes: </span> 
                        {notes}
                    </p>
                    )}
            </div>
        )
    )
}

export default DetailsCustomer
