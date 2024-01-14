import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import HomePage from './components/pages/home-page'
import { DataProvider } from './DataContext'
import Cart from './components/pages/cart'
import Category from './components/pages/category'


const App = () => {
  return (
    <>
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>  
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/category' element={<Category/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
     </DataProvider>
    </>
  )
}

export default App
