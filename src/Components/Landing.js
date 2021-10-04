import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/profile.png'
import { FaLinkedin, FaEnvelope, FaFile, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"
import resume from '../assets/SWE_Resume.pdf'

export default function Landing({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <Container>
          <Row className="align-items-center">
            <Col xs={{span:12, order:2}} md={{ span: 6, order: 1}} lg={{ span: 8, order: 1}}> 
            <br></br>
              <br></br>
            
            
            
              <h1>
                Hello
                <span role="img" aria-label="">👋</span>
              </h1>
              <h2>
                I'm Indusha Semba
              </h2>
              <p>
               Former SRE intern @ADP Lifion &amp SWE intern @Mattermost
              </p>
              <p>
              4A Management Engineering @UWaterloo
              </p>
              <p>I am currently seeking 2022 new grad opportunities, here's my <a href={resume} target="_blank">resume</a>.</p>
              <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
              <a href={resume} target="_blank" rel="noopener noreferrer">
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
              <br></br>
              <br></br>
              <br></br>
             
            
            
            </Col>
            <Col className="text-center" xs={{span:12, order: 1}} md={{ span: 6, order:2 }} lg={{ span: 3, order: 1}}>
            <br></br>
              
            
              <img height='250px' src={profile} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
