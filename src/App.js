import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TitleProvider } from "./features/context/TitleContext";
import Footer from "./shared/pages/Footer";
import Home from "./shared/pages/Home/Home";
import Layout from "./shared/pages/Layout";
import InsuranceDocuments from "./shared/components//ServicesRoutes/InsuranceDocuments/InsuranceDocuments";
import AddInsDoc from "./shared/components//ServicesRoutes/InsuranceDocuments/AddInsDoc";

function App() {
  return (
    <>
      <TitleProvider>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/insurance_documents" element={<InsuranceDocuments />} />
              <Route path="/add_insurance_document" element={<AddInsDoc />} />
            </Route>
            {/* <Route path="login" element={<Login />} /> */}
          </Routes>
          <Footer />
        </Router>
        <ToastContainer position="top-right" autoClose={1000} />
      </TitleProvider>
    </>
  );
}

export default App;
