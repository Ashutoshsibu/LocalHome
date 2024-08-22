import React from "react";
import styled from "styled-components";
import logo from "../assets/img/Atom_walk_logo-removebg-preview.png";
// import Footer from "../assets/img/Footer-1.jpg";
import Footer from "../assets/img/footer-bg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const FooterContainer = styled.footer`
 background-color: #0b1f35; /* Dark background color */
  /* background-image: url(${Footer}); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const FooterLeft = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h1 {
    font-size: 2em;
    margin-left: 35px;
    color: #ffffff;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  div {
    margin: 10px 20px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 500;
  }
`;

const FooterLinksContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FooterLinks = styled.div`
  margin: 10px 20px;

  h3 {
    font-size: 1.2em;
    margin-bottom: 15px;
    color: #ffffff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 8px 0;
      font-size: 1em;
      color: #a7a9ac;

      a {
        color: #a7a9ac;
        text-decoration: none;

        &:hover {
          color: #55e6a5;
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  /* margin-top: 20px; */
  font-size: 0.8em;
  text-align: center;
  background-color: #0b1f35;

  @media (min-width: 768px) {
    /* margin-top: 20px; */
    text-align: center;
  }

  span {
    color: #55e6a5;
  }
`;

export default function Footer2() {
  return (
    <>
    <FooterContainer>
      <FooterLeft>
        <img style={{width:"60%"}}  src={logo} alt="Logo" />
        <h1>Get Ready to Grow Your Business</h1>
      </FooterLeft>

      <ContactInfo>
        <div>info@atomwalk.com</div>
        <div>+91-7259555003</div>
      </ContactInfo>

      <FooterLinksContainer>
        <FooterLinks>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </FooterLinks>

        <FooterLinks>
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#webdev">Manufacturing Business</a>
            </li>
            <li>
              <a href="#appdev">Consultancy Business</a>
            </li>
            <li>
              <a href="#maintenance">Chemical Industry</a>
            </li>
            <li>
              <a href="#marketing">Lab Management</a>
            </li>
          </ul>
        </FooterLinks>
      </FooterLinksContainer>
    </FooterContainer>
    <FooterBottom>
        <p>© 2024 Atomwalk. All Rights Reserved.</p>
        <p>
          Privacy Policy | Terms & Conditions | Made with <span>♥</span> Atomwalk
        </p>
        <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
      </FooterBottom>
      </>
  );
}
