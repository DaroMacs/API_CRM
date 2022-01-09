import { useNavigate } from 'react-router-dom'

const Customer = ({customer,handleDelete}) => {

    const navigate = useNavigate()

    const {name, company, email, phone, id, notes} = customer

    return (
        <tr className='border-b hover:bg-gray-100'>
            <td className='p-3'>{name}</td>
            <td className='p-3'>
                <p><span className='text-gray-800 font-bold'>E-mail: </span>{email}</p>
                <p><span className='text-gray-800 font-bold'>Phone: </span>{phone}</p>                
            </td>
            <td className='p-3'>{company}</td>
            <td className='p-3'>
                <button 
                    className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 font-bold text-xs rounded-md' type='button'
                    onClick={() => navigate(`/${id}`)}
                >
                Details
                </button>
                <button 
                    className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 font-bold text-xs rounded-md mt-1' type='button'
                    onClick={() => navigate(`/edit/${id}`)}
                >
                Edit
                </button>
                <button 
                    className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 font-bold text-xs rounded-md mt-1' 
                    type='button'
                    onClick={() => {handleDelete(id)}}
                    >
                    Delete
                </button>                
            </td>
        </tr>
    )
}

export default Customer