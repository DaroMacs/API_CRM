import React from 'react'

const Alert = ({children}) => {
    return (
        <>
          <div className="text-center my-4 font-bold bg-red-600 rounded-md text-white">
            {children}
          </div>   
        </>
    )
}

export default Alert
