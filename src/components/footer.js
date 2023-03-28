import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiPhone,
} from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="footer-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>
                <strong>Cities</strong>
              </h3>
              <ul className="footer-links">
                <li>
                  <a>Banglore</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-3 item">
              <h3>
                <strong>Work with us</strong>
              </h3>
              <ul className="footer-links">
                <li>
                  <a href="/maidapp">Work </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>
                <strong>Connect with us</strong>
              </h3>
              <ul className="footer-links">
                <li>
                  <a>
                    <FiPhone style={{ fontSize: "25px", paddingRight: "1%" }} />
                    1234567890
                  </a>
                </li>
                <li>
                  <a>
                    <IoMailOutline
                      style={{ fontSize: "25px", paddingRight: "1%" }}
                    />
                    SanDas@gmail.com
                  </a>
                </li>
                <br />
                <li className="footer-icons">
                  <a href="#">
                    <FiLinkedin />
                  </a>
                  <a href="#">
                    <FiFacebook />
                  </a>
                  <a href="#">
                    <FiTwitter />
                  </a>
                  <a href="#">
                    <FiInstagram />
                  </a>
                </li>
                <br />
              </ul>
            </div>
          </div>
          <p className="copyright">SanDas © 2023</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
