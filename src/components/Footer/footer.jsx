import React, { Component } from "react";
import "./assets/css/footer.css";
import GTBIT_LOGO from "../TitleBar/assets/images/GTBIT-LOGO.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="footer-container">
          <div className="container-big">
            <div className="footer-grid">
              <div className="footer-index-1">
                <div className="footer-index-1-inner-grid">
                  <div className="justify-center">
                    <img src={GTBIT_LOGO} width="100px" alt="GTBIT Logo" />
                  </div>
                  <div className="justify-center">
                    Guru Tegh Bahadur Institute Of Technology
                  </div>
                </div>
                <div className="footer-index-1-content">
                  Guru Tegh Bahadur Institute of Technology (GTBIT) aims to be
                  among the premier institutes of engineering and technology in
                  the country, recognised excellence in Teaching, R&amp;D,
                  Sports, Cultural and Social Arena.
                </div>
              </div>
              <div className="footer-index-2">Admissions</div>
              <div className="footer-index-3">Other Links</div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container-big">
            <div className="copyright-inner">
              &copy; Copyright 2020. All rights reserved.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
