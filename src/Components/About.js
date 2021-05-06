import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import aboutmepic from '../assets/aboutme.JPG'
import { FaLinkedin, FaEnvelope, FaFile, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function About({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <Container>
          <Row className="align-items-center">
            <Col className="text-center" xs={12} md={{ span: 7}} lg={{ span: 6}}>
            <div className="aboutmepic">
            <img src={aboutmepic} />
            </div>
              
            </Col>
            <Col xs={12} md={{ span: 5}} lg={{span:5}}>
            <br></br>
              
              <h1>About Me</h1>
             
              <br></br>
            
             
           
            <p>I have a keen interest in Software engineering with a broad set of skills. Which I am grateful to have gained by interning at companies like <a href="https://developer.interac.ca/" style={{color:"orange"}}>Interac</a>, <a href="https://www.longviewsystems.com/digital-organization/#/" style={{color:"green"}}>Long View Systems</a>, and <a href="https://mattermost.com/" style={{color:"#0059CC"}}>Mattermost</a>. Allowing me to gain experience in Backend (Cloud, DevOps, Server), Mobile, and Front End development. </p>
            <p>In my free time I like to run, play video games, read and watch shows (I really like car reviews). </p>

          
              <br></br>
              <br></br>
              
            
             
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
}
