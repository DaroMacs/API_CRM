import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formular from '../components/Formular'



const EditCustomer = () => {

    const [customer, setCustomer] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect( () => {
        const getCustomerAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const response = await fetch(url)    
                const result = await response.json()
                
                setCustomer(result)
                

            } catch (error) {
                console.log(error);
            }

            setTimeout(() => {
                
                setLoading(!loading)
            }, 200);
        }

        getCustomerAPI()
    }, []) 

    
    return (
        <>
            
            <h1 className='font-black text-2xl text-blue-900'>Edit Customer</h1>
            <p className='mt-2'>Edit the fields of the costumer.</p>

            {customer?.name ? (
                <Formular 
                    customer = {customer}
                    loading = {loading}
                />
            ): (
                <p>Customer not valid</p>
            )}
        </>
    )
}

export default EditCustomer
