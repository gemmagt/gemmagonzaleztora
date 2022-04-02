import "./index.css";
import { List, Button, Row, Col} from 'antd';

function Publications() {
  const data=[
    {
      title: "MUSE crowded field 3D spectroscopy in NGC 300. II. Quantitative spectroscopy of BA-type supergiants",
      subtitle: "Gonzalez-Tora et al. 2022  A&A, Volume 658, id.A117, 8 pp.",
      link: "https://ui.adsabs.harvard.edu/abs/2022A%26A...658A.117G/abstract"
    },
    {
      title: "The temperatures of red supergiants in low-metallicity environments",
      subtitle: "Gonzalez-Tora et al. 2021 MNRAS, Volume 505, Issue 3, pp.4422-4443",
      link: "https://ui.adsabs.harvard.edu/abs/2021MNRAS.505.4422G/abstract"
    }
  ]
  return (
    <Row justify="center"> 
      <Col span={16}>
        <List 
          bordered={true}
          itemLayout="horizontal"
          dataSource={data}
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
  );
}

export default Publications;