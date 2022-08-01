import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import OverView from "./Pages/Overview";
import Header from "./Pages/Layout/Header";



const App = () => {
  return (
    <BrowserRouter>
 <Header />
      <Layout> 
     
        <Routes>
          <Route path="/" element={<OverView />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout> 
    </BrowserRouter>
  );
};

export default App;
