import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsCustomer from './components/DetailsCustomer'
import Layout from './layout/Layout'
import EditCustomer from './pages/EditCustomer'
import Home from './pages/Home'
import NewCustomer from './pages/NewCustomer'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/customers" element={ <Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={ <NewCustomer /> } />
          <Route path="edit/:id" element={ <EditCustomer /> } />
          <Route path=":id" element={ <DetailsCustomer />} />
        </Route>

    </Routes>
   </BrowserRouter>
  )
}

export default App
