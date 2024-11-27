import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Form from './components/form'
import Product from './components/Product'
import ProductStock from './components/ProductStock'
import Cta from './components/Cta'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="container-xxl bg-white p-0">
      {/* Spinner Start */}
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      <Header/>
      <Slider/>
      <Form/>
      <Product/>
      <ProductStock/>
      <Cta/>
      <Testimonial/>
      <Footer/>
</div>

    </>
  )
}

export default App
