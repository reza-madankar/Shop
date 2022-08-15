import { Container } from "react-bootstrap";
import TopHeader from "./component/topHeader";
import Menu from "./component/menu";

import "../../Content/Style/layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <section className="topHeader">
        <Container>
          <TopHeader />
        </Container>
      </section>
      <section className="menuHeader">
        <Container>
          <Menu />
        </Container>
      </section>
    </>
  );
};

export default Layout;
