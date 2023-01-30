import React from "react";
import {
  BurgerMenuWrapper,
  HeaderWrappper,
  NavBarWrapper,
  NavItemWrapper
} from "./Header.style";

export default function Header() {
  return (
    <HeaderWrappper>
      <div className="CIBT-logo">
        <a href="/index.html">
          <img
            src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
            style={{
              width: "235px",
              marginTop: "-10px",
            }}
            alt="logo"
          />
        </a>
      </div>
      <NavBarWrapper>
        <a href="/index.html">
          <li>HOME</li>
        </a>
        <a href="#course">
          <li>COURSES</li>
        </a>
        <a href="#videos">
          <li>VIDEOS</li>
        </a>
        <a href="#blogs">
          <li>BLOGS</li>
        </a>
        <a href="#events">
          <li>EVENTS</li>
        </a>
        <a href="#contacts">
          <li>CONTACTS</li>
        </a>
        <a href="#enroll">
          <li>ENROLL NOW</li>
          <i
            className="fa-solid fa-phone-volume"
            style={{
              fontSize: "30px",
              marginTop: "-8px",
            }}
          ></i>
        </a>
      </NavBarWrapper>
      <BurgerMenuWrapper>
        <i
          className="fa-solid fa-bars"
          style={{
            fontSize: "20px",
          }}
        ></i>
        <NavItemWrapper>
          <a href="/index.html">
            <li>HOME</li>
          </a>
          <a href="#course">
            <li>COURSES</li>
          </a>
          <a href="#videos">
            <li>VIDEOS</li>
          </a>
          <a href="#blogs">
            <li>BLOGS</li>
          </a>
          <a href="#events">
            <li>EVENTS</li>
          </a>
          <a href="#contacts">
            <li>CONTACTS</li>
          </a>
          <a href="#enroll" className="enroll-now">
            <li>ENROLL NOW</li>
            <i
              className="fa-solid fa-phone-volume"
              style={{
                fontSize: "30px",
                marginTop: "-8px",
              }}
            ></i>
          </a>
        </NavItemWrapper>
      </BurgerMenuWrapper>
    </HeaderWrappper>
  );
}
