import React, { Component }  from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailForm";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muddassir-ahmed-031748159" target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/muddassirahmed007" target='_blank'><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/muddassirahmed007/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
             <p> © Copyright 2023. All Rights Reserved  ®</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}