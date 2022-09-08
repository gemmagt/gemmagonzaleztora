import "./index.css";
import { Row, Col} from 'antd';
//import CV from "../../assets/CV.pdf";

function Research() {
  return ( 
    <>
      <Row justify="center">
        <Col span={24}>
          <div className="research-title">
           Here is my CV
          </div>    
          <ul title="Llista compra"> 
          Hola
            <li>Patata</li>
            <li>Poma</li>
          </ul>  
        </Col>
      </Row>


     </>
  );
}

export default Research;

