import React from 'react'
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

const HomePage = () => {
  return (
    <div>
    {/* <Banner></Banner> */}
    <Resource></Resource>
    <Skills></Skills>
    <UnlockFuture></UnlockFuture>
    <Features></Features>
   <TrustedCustomer></TrustedCustomer>
   <Testimonial></Testimonial>
    <Pricing></Pricing>
    <PricingAvtar></PricingAvtar>
    <Contact></Contact>
    </div>
  )
}

export default HomePage
