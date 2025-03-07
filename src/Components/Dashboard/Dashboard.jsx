import React from 'react'
import DashboardHeader from './DashboardHeader'
import MainSection from '../MainSection/MainSection'
import Navigation from '../Navigation/Navigation'
import { Outlet, Link } from "react-router-dom";


function Dashboard() {
  return (
    <div>
        <DashboardHeader/>
        <Navigation/>
        <Outlet />
        </div>
  )
}

export default Dashboard