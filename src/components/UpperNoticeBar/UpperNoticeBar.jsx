import React, { Component } from "react";
import searchBar from "./assets/images/search.svg";
import "./assets/css/main.css";

class UpperNoticeBar extends Component {
  state = {
    searchVisibility: false,
    notice: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero quas optio voluptas id doloribus pariatur reprehenderit necessitatibus corporis amet, sint culpa distinctio vitae ratione fugiat soluta mollitia porro voluptatum atque?"
  };

  ToggleSearchBar = () => {
    this.state.searchVisibility
      ? this.setState({ searchVisibility: false })
      : this.setState({ searchVisibility: true });
  };

  render() {
    return (
      <>
        <div className="UpperBarContainer">
          <div className="container-big">
            <div className="UpperContainerGrid">
              <div className="Running-Line">
              {/* eslint-disable-next-line */}
                <marquee className="display-after-992">
                  <b>Notice</b> - {this.state.notice}
                </marquee>
              </div>
              <div className="RightContainer-UpperBar">
                <div className={`search-box-container ${this.state.searchVisibility?"":"RightContainer-Upper-Hide"}`}>
                  <input type="text" placeholder="Search..." />
                </div>
                <div
                  className={`UpperBar-LoginBtn UpperBar-SearchImg ${this.state.searchVisibility?"UpperBar-LoginBtn-active":""}`}
                  onClick={this.ToggleSearchBar}
                >
                  <img
                    className="SearchImage"
                    src={searchBar}
                    alt="Search Bar"
                  />
                </div>
                <div className="UpperBar-LoginBtn">Login</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UpperNoticeBar;
