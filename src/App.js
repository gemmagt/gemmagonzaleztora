import Introduction from "./components/introduction";
//import Gallery from "./components/gallery";
import Publications from "./components/publications";
import CV from "./components/CV";
import Research from "./components/research";
import Outreach from "./components/outreach";
import { Routes, Route} from "react-router-dom";
import Header from "./components/header";
import { Layout, Row, Col } from 'antd';
import './App.css';

function App() {
  return ( 
    <Layout>
    <Row style={{width:"100%", height:"100%"}}>
    <Col span={24}>
        <Header/>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="research" element={<Research />} />
          <Route path="CV" element={<CV />} />
          <Route path="publications" element={<Publications />} />
          <Route path="outreach" element={<Outreach />} />
        </Routes>
        </Col>
    </Row>
    </Layout>
  );
}

export default App;
          // <Route path="gallery" element={<Gallery />} />
