import React from 'react'
import DashboardHeader from './DashboardHeader'
import MainSection from '../MainSection/MainSection'
import Navigation from '../Navigation/Navigation'
import { Outlet, Link } from "react-router-dom";
import Style from "./DashboardHeader.module.css"


function Dashboard() {
  return (
    <>
    <div className={Style.dashboardContainer}>
        <DashboardHeader/>
        <Navigation/>
        </div>
        <Outlet />
        </>
        
  )
}

export default Dashboard