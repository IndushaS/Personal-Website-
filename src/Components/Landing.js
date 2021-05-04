import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/profile.png'
import { FaLinkedin, FaEnvelope, FaFile, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Landing({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={{ span: 7, offset: -7 }}>
              <h1>
                Hello
                <span role="img" aria-label="">👋</span>
              </h1>
              <h2>
                I'm Indusha Semba
              </h2>
              <p>
               Former SWE intern @Mattermost | 4A Management Engineering @UWaterloo
              </p>
              <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
                <a href="">
                  <FaFile style={{ margin: '10 10 10 0' }} />
                </a>
                <a href="https://github.com/IndushaS" target="_blank" rel="noopener noreferrer">
                  <FaGithub style={{ margin: '10px' }} />
                </a>
                <a href="https://www.linkedin.com/in/indushasemba/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ margin: '10px' }} />
                </a>
                <a href="mailto:im2semba@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope style={{ margin: '10px' }} />
                </a>





              </IconContext.Provider>

            </Col>
            <Col className="text-center" xs={12} md={{ span: 3, offset: 0 }}>

              <img height='250px' src={profile} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
