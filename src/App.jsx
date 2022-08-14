import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
