import "./index.css";
import { Row, Col } from 'antd';
import mephoto from '../../assets/dirndl1.jpg';

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
            Welcome! This is the homepage of Gemma Gonzalez-Tora.
          </div>
        </Col>
      </Row>
      </>
  );
}

export default Introduction;