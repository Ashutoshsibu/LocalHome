import React, { PureComponent } from 'react'
import AboutUsBanner from './AboutUsBanner'
import PurposeComponent from './PurposeComponent'
import BelieveComponent from './BelieveComponent'
import LeadershipTeam from './LeadershipTeam'

const AbotUs = () => {
  return (
    <div>
      {/* <AboutUsBanner></AboutUsBanner> */}
      <BelieveComponent></BelieveComponent>
      <PurposeComponent></PurposeComponent>
      <LeadershipTeam></LeadershipTeam>
    </div>
  )
}

export default AbotUs
