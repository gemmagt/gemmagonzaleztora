import "./index.css";
import { Row, Col, Button, List} from 'antd';
//import CV from "../../assets/CV.pdf";

function Research() {
  const cv_data=[
      {
      title: "Open my CV",
      subtitle: "",
      link: "https://drive.google.com/file/d/1m4Ndv8vI77afTgU9D55cezh662B8lHVR/view?usp=sharing"
    }]
  return ( 
    <>
      <Row justify="center">
        <Col span={24}>
          <div className="research-title">
           My research interests
          </div>
          <div className="research-explanation"> 
          I am mostly interested in studying the atmospheres, structure and evolution of massive stars. For this purpose
          I use stellar atmosphere models (e.g., MARCS+wind, see Davies&Plez+21) radiative transfer code (Turbospectrum, Plez+19) 
          and evolutonary codes such as MESA to compare with several observational techniques such as photometry, spectroscopy and interferometry, with instruments such 
          MUSE, X-SHOOTER, NACO, VLTI AMBER, MATISSE and GRAVITY. 
          More specifically: </div>   
          
          <ul title="list interests"> 
            <li><div className="research-1-title">The effect of winds on spatially extended atmospheres of red supergiants:</div>
            <div className="research-1">Adding the contribution of a stellar wind to a MARCS model atmospheres to accurately 
            reproduce interferometric data of red supergiants.</div></li> 
            <li><div className="research-2-title">Red supergiants in low metallicity environments: </div>
            <div className="research-2">Spectrophotometry analysis of effective temperatures and extinctions on red supergiants 
            in different metallicity environments. Synthetic population using Geneva evolutionary tracks.</div>
            </li>
            <li><div className="research-3-title">Quantitative spectroscopy of blue supergiants in NGC 300:</div>
            <div className="research-3">Our goal was the determination of stellar parameters in B/A-type supergiants 
            in the NGC 300 galaxy using MUSE data cubes.</div>
            </li>
          </ul>  
        </Col>
      </Row>

      <Row justify="center">
        <Col span={2}>
         <List 
          bordered={true}
          itemLayout="horizontal"
          dataSource={cv_data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<Button type="text" href={item.link} target="_blank">{item.title}</Button>}
                description={item.subtitle}
              />
            </List.Item>
          )}
        />
        </Col>
        </Row>
     </>
  );
}

export default Research;

