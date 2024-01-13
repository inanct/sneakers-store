import React from 'react'
import Header from '../components/common/header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout