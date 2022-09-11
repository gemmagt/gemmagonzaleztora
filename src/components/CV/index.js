import "./index.css";
import { Row, Col, Button, List} from 'antd';
//import CV from "../../assets/CV.pdf";

function CV() {
  const cv_data=[
      {
      title: "Open my CV",
      subtitle: "",
      link: "https://drive.google.com/file/d/1m4Ndv8vI77afTgU9D55cezh662B8lHVR/view?usp=sharing"
    }]
  return ( 
    <>
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

export default CV;

