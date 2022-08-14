import { Container } from "react-bootstrap";
import TopHeader from "./component/topHeader";

import "../../Content/Style/layout.scss";

const Layout = ({ children }) => {
  return (
    <section className="topHeader">
      <Container>
        <TopHeader />
      </Container>
    </section>
  );
};

export default Layout;
