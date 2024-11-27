import React, { useState } from "react";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        {/* Brand Logo */}
        <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src="https://mlw8xh8ekfzs.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://aztc.in/wp-content/uploads/2024/08/LOGO3.png"
              alt="Icon"
              style={{ height: "30px" }}
            />
          </div>
        </a>

        {/* Toggle Button for Smaller Screens */}
        <button
          type="button"
          className="navbar-toggler"
          onClick={handleToggle}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>

            {/* Property Dropdown
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Property
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                <a href="property-list.html" className="dropdown-item">
                  Property List
                </a>
                <a href="property-type.html" className="dropdown-item">
                  Property Type
                </a>
                <a href="property-agent.html" className="dropdown-item">
                  Property Agent
                </a>
              </div>
            </div> */}

            {/* Pages Dropdown
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Error
                </a>
              </div>
            </div> */}

            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>

          {/* Add Property Button */}
          <a href="#" className="btn btn-primary px-3 d-none d-lg-flex">
            Whatsapp
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
