import React from 'react'
import Style from "./Navigation.module.css"
import { Outlet, Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
        <nav >
            <ul className={Style.nav}>
                <li className={Style.active}><Link to="/">Dashboard</Link></li>
                <li><Link to="/invoice">Invoice Upload</Link></li>
                <li> User Management</li>
                <li>Profile</li>
                <li>Plan Management</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation