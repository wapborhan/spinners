import React from "react";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary ">
      <div className="container">
        <img src={logo} className="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link border bg-warning text-dark px-5 rounded "
                aria-current="page"
                href="https://code.wapborhan.com"
              >
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
