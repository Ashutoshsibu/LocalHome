import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
// import { Footer } from "./components/Footer";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/loginpage/Login";
import ForgetPassword from "./components/loginpage/ForgetPassword";
import Newcard from "./components/Newcard";
import Product from "./components/Product";
import ContactUs from "./components/ContactUs";
import AbotUs from "./components/AbotUs";
import Footer2 from "./components/Footer2";
import Askme from "./components/loginpage/Askme";
import FloatingActionButton from "./components/FloatingActionButton";
import { useEffect, useState } from "react";
import ProductDemoModal from "./components/ProductDemoModal";
import FormComponent from "./components/FormComponent";
import PricingRoute from "./components/PricingRoute";

function App() {
  const[openslide,setOpenslide]=useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
useEffect(()=>{
  setTimeout(() => {
    openModal()
  }, 40000);

},[])
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/signin.html" element={<Login />} />
          <Route path="/forgotpassword.html" element={<ForgetPassword />} />
          <Route path="/card.html" element={<Newcard />} />
          <Route path="/Product.html" element={<Product />} />
          <Route path="/contactUs.html" element={<ContactUs />} />
          <Route path="/aboutUs.html" element={<AbotUs />} />
          <Route path="/pricing.html" element={<PricingRoute />} />
          <Route path="/demo.html" element={<FormComponent />} />
        </Routes>
      </Router>
      {openslide&&<Askme setOpenslide={setOpenslide}/>}
      <ProductDemoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <FloatingActionButton setOpenslide={setOpenslide}></FloatingActionButton>
      <Footer2></Footer2>
    </div>
  );
}

export default App;
