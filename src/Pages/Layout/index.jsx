import { Container } from "react-bootstrap";
import TopHeader from "./component/topHeader";
import Menu from "./component/menu";
import Footer from "./component/footer";
import Overview from "./component/overview";


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
          <Overview />
          <Footer />
        </Container>
      </section>
    </>
  );
};

export default Layout;
