import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import DetailsCustomer from './components/DetailsCustomer'
import Layout from './layout/Layout'
import EditCustomer from './pages/EditCustomer'
import Home from './pages/Home'
import NewCustomer from './pages/NewCustomer'

function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route 
          path="/" 
          element={<Navigate to="/customers" />}
        />      
        <Route path="/customers" element={ <Layout />}>
          <Route index element={<Home />} />
          <Route path="/customers/new" element={ <NewCustomer /> } />
          <Route path="/customers/edit/:id" element={ <EditCustomer /> } />
          <Route path=":id" element={ <DetailsCustomer />} />
        </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
