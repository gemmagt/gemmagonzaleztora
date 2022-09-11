import "./index.css";
import { Row, Col, Button } from 'antd';
import mephoto from '../../assets/dirndl1.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function Introduction() {
  return ( 
    <>
      <Row justify="center">
        <Col span={24}>
          <div className="introduction-title">
           Gemma Gonzalez-Tora
          </div>      
        </Col>
      </Row>

      <Row>
        <Col span={14}>
                <img src={mephoto} alt="Photo about me"/> 
        </Col>
        <Col span={10}>
          <div className="introduction-subtitle">
            Welcome! I am Gemma Gonzalez-Tora, currently a PhD student at the European Southern Observatory 
            (ESO) in Garching and at the Astrophysical Research Institute (ARI) of the Liverpool John Moores University
            (LJMU). I am studying the extended atmosphere of red supergiants, which are evolved massive stars around 
            1000 times bigger than the Sun and 10 times heavier! In my free time, I like reading and writing fantasy books,
            sightseeing beautiful landmarks and eating delicious food. 
          </div>
          <div className="contact">
          Contact me at: gemma.gonzalezitora at eso.org
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Button type="link" href="https://twitter.com/6em25" target="_blank">
            <FontAwesomeIcon size="3x" icon={faTwitter}/>
          </Button>
        </Col>
         <Col>
          <Button type="link" href="https://www.linkedin.com/in/gemma-gonz%C3%A1lez-i-tor%C3%A0-3990b666/" target="_blank">
            <FontAwesomeIcon size="3x" icon={faLinkedin}/>
          </Button>
        </Col>
        <Col>
          <Button type="link" href="https://github.com/gemmagt" target="_blank">
            <FontAwesomeIcon size="3x" icon={faGithub}/>
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Introduction;