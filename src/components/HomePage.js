import React, { useEffect, useState } from 'react'
import { Banner } from './Banner'
import { Skills } from './Skills'
import Features from './Features'
import { Contact } from './Contact'
import Pricing from './Pricing'
import Customerstories from './Customerstories'
import TrustedCustomer from './loginpage/TrustedCustomer'
import Resource from './Resource'
import UnlockFuture from './UnlockFuture'
import PricingAvtar from './PricingAvtar'
import Testimonial from './Testimonial'
import ProductDemoModal from './ProductDemoModal'

const HomePage = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
useEffect(()=>{
  setTimeout(() => {
    openModal()
  }, 100000);

},[])
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
    {/* <Banner></Banner> */}
    <Resource></Resource>
    <Skills></Skills>
    <UnlockFuture></UnlockFuture>
    <Features></Features>
    {/* need to work one that page  */}
   {/* <TrustedCustomer></TrustedCustomer> */}
   <Testimonial></Testimonial>
    <Pricing></Pricing>
    <PricingAvtar></PricingAvtar>
    <Contact></Contact>
    <ProductDemoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  )
}

export default HomePage
