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
            Welcome! This is the homepage of Gemma Gonzalez-Tora. Hola
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