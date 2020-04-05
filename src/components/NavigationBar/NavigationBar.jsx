import React, { Component } from "react";
import "./assets/css/main.css";

class NavigationBar extends Component {
  state = {
    isMobileNavOpened: false,
  };
  toggleMobileNav = () => {
    this.state.isMobileNavOpened
      ? this.setState({ isMobileNavOpened: false })
      : this.setState({ isMobileNavOpened: true });
  };
  render() {
    return (
      <>
        <div className="nav-bar-container">
          <div className="container-big">
            <div className="nav-bar-inner-container">
              <div className="desktop-navbar">
                <a className="nav-bar-content nav-bar-link" href="/">
                  Home
                </a>
                <a className="nav-bar-content nav-bar-link" href="/">
                  About
                </a>
                {/* eslint-disable-next-line */}
                <a className="nav-bar-content nav-bar-link" href="#">
                  Academics
                </a>
                <a className="nav-bar-content nav-bar-link" href="/">
                  Admissions
                </a>
                <a className="nav-bar-content nav-bar-link" href="/">
                  Quick Links
                </a>
                <a className="nav-bar-content nav-bar-link" href="/">
                  Contact
                </a>
              </div>
              <div className="OnlineFeeContainer">
                {/* eslint-disable-next-line */}
                <a className="nav-bar-content nav-bar-link online-fee" href="#">
                  Online Fee Payment
                </a>
              </div>
              <div className="mobile-navbar" onClick={this.toggleMobileNav}>
                <div
                  className={`Navbar-menu-btn ${
                    this.state.isMobileNavOpened
                      ? "Navbar-menu-btnOpen Navbar-menu-btn-open"
                      : ""
                  }`}
                >
                  <span
                    className={`Navbar-menu-btn-inner ${
                      this.state.isMobileNavOpened
                        ? "Navbar-menu-btn-inner-open"
                        : ""
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavigationBar;
