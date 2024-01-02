import React from "react";
import "./footer.css";
import logo from "./logo-color.svg";
import insta from "./square-instagram.svg";
import Facebook from "./facebook.svg";
import twiiter from "./twitter.svg";
import pintr from "./pinterest.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <Image src={logo} className=" mb-4" alt="" />
            <p className="footer-text">
              If you have any question, please contact us at{" "}
              <a href="mailto:support@gmail.com" className="link">
                Petmaniasupport@gmail.com
              </a>
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <address className="address">London</address>
              </li>
              <li className="contact-item">
                <a href="tel:+16234567891011" className="contact-link">
                  (+1)-0000-000-00
                </a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <Image src={insta} className="" alt="" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <Image src={Facebook} className="" alt="" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <Image src={twiiter} className="" alt="" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <Image src={pintr} className="" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Shop</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Dog
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Car
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Small
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Fish
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Reptile
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Bird
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Services</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Grooming
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Bording
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Training
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Vaterinary
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Petmania</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About-us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Gift-Card
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © 2023 Made with ♥ by{" "}
            <a href="#" className="copyright-link">
              Grinding Pandas🐼
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
