import "./index.css";
import { List, Button, Row, Col} from 'antd';

function Publications() {
  const data=[
      {
      title: "The effect of winds on atmospheric layers of red supergiants, I. Modeling for interferometric observations",
      subtitle: "Gonzalez-Tora et al. 2022  Accepted for publication at A&A",
      link: "https://drive.google.com/file/d/1FkdycPsETWXm9qVgq9-7pXtCsuH7h54X/view?usp=sharing"
    },
    {
      title: "MUSE crowded field 3D spectroscopy in NGC 300. II. Quantitative spectroscopy of BA-type supergiants",
      subtitle: "Gonzalez-Tora et al. 2022  A&A, Volume 658, id.A117, 8 pp.",
      link: "https://ui.adsabs.harvard.edu/abs/2022A%26A...658A.117G/abstract"
    },
    {
      title: "The temperatures of red supergiants in low-metallicity environments",
      subtitle: "Gonzalez-Tora et al. 2021 MNRAS, Volume 505, Issue 3, pp.4422-4443",
      link: "https://ui.adsabs.harvard.edu/abs/2021MNRAS.505.4422G/abstract"
    },
        {
      title: " MUSE 3D spectroscopy of BA-type supergiants in NGC 300 ",
      subtitle: "Gonzalez-Tora et al. 2022, accepted for publication at the Proceedings of the IAUS361: Massive Stars Near and Far, contributed talk.",
      link: "https://ui.adsabs.harvard.edu/abs/2022arXiv220914314G/abstract"
    },
        {
      title: "The effect of winds in red supergiants: modeling for interferometry",
      subtitle: "Gonzalez-Tora et al. 2022, to appear at the Proceedings of the IAUS370: Winds of stars and exoplanets, contributed talk.",
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