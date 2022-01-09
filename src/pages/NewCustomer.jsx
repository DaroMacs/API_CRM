import React from 'react'
import Formular from '../components/Formular'

const NewCustomer = () => {
    return (
        <>
            <h1 className='font-black text-2xl text-blue-900 '>New Customer</h1>
            <p className='mt-2'>Complete the fields to create a new customer.</p>

            <Formular />
        </>
    )
}

export default NewCustomer
