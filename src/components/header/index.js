import "./index.css";
import { PageHeader, Button} from 'antd';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();
  return (
    <PageHeader
      ghost={true}
      title="Gemma Gonzalez-Tora"
      subTitle="My personal webpage"
      extra={[
        <Link to="/"><Button type={location.pathname==="/"? "primary" : ""}>Introduction</Button></Link>,
      //  <Link to="/gallery"><Button type={location.pathname==="/gallery"? "primary" : ""}>Gallery</Button></Link>,
        <Link to="/research"><Button type={location.pathname==="/research"? "primary" : ""}>
          Research
        </Button></Link>,
        <Link to="/CV"><Button type={location.pathname==="/CV"? "primary" : ""}>
          CV
        </Button></Link>,
        <Link to="/publications"><Button type={location.pathname==="/publications"? "primary" : ""}>
          Publications
        </Button></Link>,
        <Link to="/outreach"><Button type={location.pathname==="/outreach"? "primary" : ""}>
          Outreach
        </Button></Link>,
      ]}
    />
  );
}

export default Header;