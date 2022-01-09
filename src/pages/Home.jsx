 import React, { useEffect, useState } from 'react'
import Customer from '../components/Customer'
 
 const Home = () => {

    const [customers, setCustomers] = useState([])

    useEffect( () => {
        const getCustomersAPI = async () => {
            try {
                const url = import.meta.env.VITE_API_URL
                const response = await fetch(url)    
                const result = await response.json()
                
                setCustomers(result)
                

            } catch (error) {
                console.log(error);
            }
        }

        getCustomersAPI()
    }, []) 

    const handleDelete = async (id) => {
        const confirmation = confirm('Do you want to delete this customer?')
        
        if(confirmation) {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const response = await fetch (url, {
                    method: 'DELETE'
                })

                await response.json()

                const arrayCustomers = customers.filter( customer => customer.id !== id )

                setCustomers(arrayCustomers)

            } catch (error) {
                console.log(error);
            }
        }
    }

     return (
    <>
        <h1 className='font-black text-2xl text-blue-900 '>Customers</h1>
        <p className='mt-2'>Administrate customers.</p>

        <table className='w-full mt-5 table-auto shadow bg-white rounded-md'>
            <thead className='text-white bg-blue-900 '>
                <tr>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Contact</th>
                    <th className='p-2'>Company</th>
                    <th className='p-2'>Actions</th>
                </tr>
            </thead>

            <tbody>
                    {customers.map(customer => (
                        <Customer 
                            key={customer.id}
                            customer = {customer}
                            handleDelete = {handleDelete}
                        />
                    ))}
            </tbody>
        </table>
    </>
     )
 }
 
 export default Home
 