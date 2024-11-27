import React from 'react'
import img from '../assets/img/carousel-1.jpg'
import img2 from '../assets/img/carousel-2.jpg'

function Slider() {
  return (
    <div>
      <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        {/* Text Section */}
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            Find A <span className="text-primary">Perfect Home</span> To Live With Your Family
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et
            diam justo clita et kasd rebum sea elitr.
          </p>
          <a href="#" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
            Get Started
          </a>
        </div>

        {/* Image Carousel Section */}
        <div className="col-md-6 animated fadeIn">
          <div className="owl-carousel header-carousel">
            <div className="owl-carousel-item">
              <img className="img-fluid" src= {img} alt="Carousel 1" />
            </div>
            <div className="owl-carousel-item">
              <img className="img-fluid" src={img2} alt="Carousel 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Slider
