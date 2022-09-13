import { Container } from "react-bootstrap";
import TopHeader from "./component/topHeader";
import Menu from "./component/menu";
import "../../Content/Style/layout.scss";
import Overview from "./component/overview";


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
          <Overview />
        </Container>
      </section>
    </>
  );
};

export default Layout;
