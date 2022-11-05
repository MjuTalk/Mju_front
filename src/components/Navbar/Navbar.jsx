import React, { Component } from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements";
import axios from 'axios';
import $ from 'jquery';
import {} from 'jquery.cookie';
axios.defaults.withCredentials = true;

const navbars = { withCredentials: true };

const Navbar = ({nav1, nav2}) => {
  return (
    <>
        <Nav>
            <NavLink to="/home">
                명지톡톡
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/dorm" activeStyle>
                    {nav1}
                </NavLink>
                <NavLink to="/bus" activeStyle>
                    {nav2}
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/" >로그인</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar
