import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const HeadFootLayout = (props) => {
  return (
    <>
    <Header />
    {props.children}
    <Footer />
    </>
  )
}

export default HeadFootLayout;