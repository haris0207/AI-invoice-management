import React from 'react'
import Style from "./Navigation.module.css"
import { Outlet, Link, NavLink } from "react-router-dom";
function Navigation() {
  return (
    <>
        <nav >
            <ul className={Style.nav}>
                <li className={Style.active}><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/invoice">Invoice Upload</NavLink></li>
                <li> User Management</li>
                <li>Profile</li>
                <li>Plan Management</li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation