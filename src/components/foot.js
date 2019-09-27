import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGooglePlus,
  faInstagram,
  faYoutube,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquare,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";

import "../scss/foot.scss";

class Foot extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container">
            <div className="footer-title-name">
              <h2>Joo Hyun-Jun</h2>
              <p>
                웹 개발을 꿈꾸는 개발자 지망생입니다.
                <br />
                언제나 당신의 연락을 기다리고 있습니다.
              </p>
              {/* <nav className="footer-title-icon">
                <ul>
                  <li>
                    <a href="#">
                      <span title="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                      <span className="sr-only">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span title="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                      </span>
                      <span className="sr-only">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span title="GooglePlus">
                        <FontAwesomeIcon icon={faGooglePlus} />
                      </span>
                      <span className="sr-only">GooglePlus</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span title="Youtube">
                        <FontAwesomeIcon icon={faYoutube} />
                      </span>
                      <span className="sr-only">Youtube</span>
                    </a>
                  </li>
                </ul>
              </nav> */}
            </div>

            <nav className="footer-content">
              <div>
                <h3>Resume</h3>
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
                </ul>
              </div>
              <div>
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="tel:01090951464">
                      <span title="Phone">
                        <FontAwesomeIcon icon={faPhoneSquare} />
                      </span>
                      (+82)10-9095-1464
                    </a>
                  </li>
                  <li>
                    <a href="mailto://sctveb@gmail.com">
                      <span title="Email">
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                      </span>
                      sctveb@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.github.com/sctveb">
                    <span title="Github">
                        <FontAwesomeIcon icon={faGithubSquare} />
                      </span>
                      https://github.com/sctveb
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="footer-bottom">This webpage made by SCTVEB</div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Foot;
