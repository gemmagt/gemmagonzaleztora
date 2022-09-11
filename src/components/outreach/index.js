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
          Outreach activities</div>   
          
          <ul title="list outreach"> 
            <li>Hola</li> 
            <li>Point</li>
            <li>point</li>
          </ul>  
        </Col>
      </Row>
     </>
  );
}

export default Outreach;

