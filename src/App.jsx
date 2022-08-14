import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import OverView from "./Pages/Overview";
import Header from "./Pages/Layout/Header";
import Field from "./Pages/Field/field";
import ContactList from "./Pages/Field/contactList";


const App = () => {
  return (
    <BrowserRouter>
 <Header />
 <OverView />
 {/* <Field/> */}
 {/* <ContactList/> */}
      <Layout> 
   
        <Routes>
         
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout> 
    </BrowserRouter>
  );
};

export default App;
