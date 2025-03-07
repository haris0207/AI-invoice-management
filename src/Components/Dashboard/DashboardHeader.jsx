import React from 'react'
import Style from "./DashboardHeader.module.css"
function DashboardHeader() {
  return (
    <div className={Style.dashboardheadercontainer}>
<div><img src="/images/companylogo.svg" alt="" /></div>
<div className={Style.profileinfo}>
    <img src="/images/profileicon.svg" alt="profile icon" />
    <div>
        <p className={Style.name}>Janetta Rotolo</p>
        <p className={Style.email}>JanettaRotolo@xyz.com</p>
    </div>
    <img src="/images/downarrow.svg" alt="down arrow" />
    </div>        </div>
  )
}

export default DashboardHeader