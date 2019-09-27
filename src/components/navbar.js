import React, { Component } from "react";
import $ from "jquery";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import '../scss/navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.$slideRef = $(this.slideRef);
  }
  componentWillUnmount() {
    this.$slideRef.slideToggle("destory");
  }
  slideToggleEvent = () => {
    this.$slideRef.slideToggle();
  };
  render() {
    return (
      <React.Fragment>
        <header className="navbar">
          <div className="container">
            <div className="container-small">
              <a className="nav-brand">Joo Hyun-Jun</a>
              <button
                type="button"
                className="nav-burger"
                onClick={this.slideToggleEvent}
              >
                <span title="MENU">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </button>
            </div>
            <nav
              className="nav-menu"
              ref={slideRef => (this.slideRef = slideRef)}
            >
              <ul>
                <li>
                  <AnchorLink href='#hero'>Home</AnchorLink>
                  {/* <a href="#">Home</a> */}
                </li>
                <li>
                  <AnchorLink href='#whoami'>Who Am I</AnchorLink>
                  {/* <a href="#whoami">Who Am I</a> */}
                </li>
                <li>
                  <AnchorLink href='#list'>Portfolio</AnchorLink>
                  {/* <a href="#">Portfolio</a> */}
                </li>
                <li>
                  <AnchorLink href='#contact'>Contact Me</AnchorLink>
                  {/* <a href="#">Contact Me</a> */}
                </li>
                {/* <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Who Am I</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact Me</a>
                </li> */}
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
