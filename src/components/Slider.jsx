import React from 'react'
 import img from '../assets/img/ridgid/img1.png'
 import img2 from '../assets/img/carousel-2.jpg'
// import $ from 'jquery';  // Make sure jQuery is installed
import '../assets/lib/owlcarousel/assets/owl.carousel.min.css';  // Adjusted import path
import '../assets/lib//owlcarousel/assets/owl.theme.default.min.css';  // Adjusted import path
// import 'owl.carousel'; 

function Slider() {
  return (
    <div>
      <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        {/* Text Section */}
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
          Explore RIDGID: <span className="text-danger">Professional-Grade Tools</span>  for Every Job, Every Time!
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
          RIDGID tools are built to withstand the toughest jobs, providing industry-leading performance, precision, and durability. Whether you're a professional plumber, contractor, or technician, trust RIDGID for reliable solutions that make your work easier and more efficient.
          </p>
          <a href="#" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
            Get Started
          </a>
        </div>

        {/* Image Carousel Section */}
        <div className="col-md-6 animated fadeIn">
          <div className=" header-carousel">
            <div className="owl-carousel-item">
              <img className="img-fluid" src= {img} alt="Carousel 1" />
            </div>
            {/* <div className="owl-carousel-item">
              <img className="img-fluid" src={img2} alt="Carousel 2" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Slider
