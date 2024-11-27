import React from 'react'
import img1 from '../assets/img/ridgid/benchvise.png'
import img2 from '../assets/img/ridgid/wrench-and-tubing.jpg'

function Product() {
  return (
    <>
    
   {/* Category Start */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
      <h1 className="mb-3">Shop Premium RIDGID Tools </h1>
      <p>Browse our collection of RIDGID tools and equipment, engineered for maximum efficiency and long-lasting performance. Whether you're tackling a routine job or a complex project, RIDGID offers the reliability and precision you need to succeed.</p>
    </div>
    <div className="row g-4">
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <a className="cat-item d-block bg-light text-center rounded p-3" href>
          <div className="rounded p-4">
            <div className="icon mb-3">
              <img className="img-fluid" src={img2} alt="Icon" />
            </div>
            <h6>Bench Yoke Vises</h6>
            <span>View catalog</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <a className="cat-item d-block bg-light text-center rounded p-3" href>
          <div className="rounded p-4">
            <div className="icon mb-3">
              <img className="img-fluid" src={img1} alt="Icon" />
            </div>
            <h6>Villa</h6>
            <span>123 Properties</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <a className="cat-item d-block bg-light text-center rounded p-3" href>
          <div className="rounded p-4">
            <div className="icon mb-3">
              <img className="img-fluid" src="img/icon-house.png" alt="Icon" />
            </div>
            <h6>Home</h6>
            <span>123 Properties</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
        <a className="cat-item d-block bg-light text-center rounded p-3" href>
          <div className="rounded p-4">
            <div className="icon mb-3">
              <img className="img-fluid" src="img/icon-housing.png" alt="Icon" />
            </div>
            <h6>Office</h6>
            <span>123 Properties</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <a className="cat-item d-block bg-light text-center rounded p-3" href>
          <div className="rounded p-4">
            <div className="icon mb-3">
              <img className="img-fluid" src="img/icon-building.png" alt="Icon" />
            </div>
            <h6>Building</h6>
            <span>123 Properties</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <a className="cat-item d-block bg-light text-center rounded p-3" href>
          <div className="rounded p-4">
            <div className="icon mb-3">
              <img className="img-fluid" src="img/icon-neighborhood.png" alt="Icon" />
            </div>
            <h6>Townhouse</h6>
            <span>123 Properties</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <a className="cat-item d-block bg-light text-center rounded p-3" href>
          <div className="rounded p-4">
            <div className="icon mb-3">
              <img className="img-fluid" src="img/icon-condominium.png" alt="Icon" />
            </div>
            <h6>Shop</h6>
            <span>123 Properties</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
        <a className="cat-item d-block bg-light text-center rounded p-3" href>
          <div className="rounded p-4">
            <div className="icon mb-3">
              <img className="img-fluid" src="img/icon-luxury.png" alt="Icon" />
            </div>
            <h6>Garage</h6>
            <span>123 Properties</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
{/* Category End */}

    </>
  )
}

export default Product
