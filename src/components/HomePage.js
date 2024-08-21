import React from 'react'
import { Banner } from './Banner'
import { Skills } from './Skills'
import Features from './Features'
import { Contact } from './Contact'
import Pricing from './Pricing'
import Customerstories from './Customerstories'
import TrustedCustomer from './loginpage/TrustedCustomer'
import Resource from './Resource'

const HomePage = () => {
  return (
    <div>
    <Banner></Banner>
    {/* <Resource></Resource> */}
    <Skills></Skills>
    <Features></Features>
   <TrustedCustomer></TrustedCustomer>
    <Pricing></Pricing>
    <Contact></Contact>
    </div>
  )
}

export default HomePage
