import "./index.css";
import { Row, Col, Button, List} from 'antd';
//import CV from "../../assets/CV.pdf";

function Outreach() {
  return ( 
    <>
      <Row justify="center">
        <Col span={24}>
          <div className="outreach-title">
           My Outreach activities
          </div>
          <div className="outreach-explanation"> 
          I consider outreach a curcial part of my job. I love sharing my science to the community and sparking the interest in the youngest ones. 
          Contact me if you want to organize some activity together! Here some highlights of my outreach activities:</div>   
          
          <ul title="list outreach"> 
            <li>Two outreach talks at the Associacio Astronomica de Sabadell, talking about the IAU General Assembly (2019) and Betelgeuse (2022).</li> 
            <li>Various talks in UK and Spanish high schools to motivate young students to pursue a career in STEM.</li>
            <li>Participant at the Brilliant Club, an association to teach STEM related activities to high school students in underrepresented areas of the UK.</li>
          </ul>  
        </Col>
      </Row>
     </>
  );
}

export default Outreach;

