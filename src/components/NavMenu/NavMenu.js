import React from "react";

const NavMenuComponent = () => {
  return (
    <>
      section
      <div class="nav">
        <ul id="navbar">
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
          <a href="#enroll" class="enroll-now">
            <li>ENROLL NOW</li>
            <i
              class="fa-solid fa-phone-volume"
              style={{
                fontSize: "30px",
                marginTop: "-8px",
              }}
            ></i>
          </a>
        </ul>
      </div>
      <div
        class="burger-menu"
        style={{
          marginRight: "113px",
          marginTop: "-45px",
        }} 
      >
        <i
          class="fa-solid fa-bars"
          style={{
            fontSize: "20px",
          }} 
        ></i>
        <ul class="nav-item">
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
          <a href="#enroll" class="enroll-now">
            <li>ENROLL NOW</li>
            <i
              class="fa-solid fa-phone-volume"
              style={{
                fontSize: "30px",
                marginTop: "-8px",
              }}
            ></i>
          </a>
        </ul>
      </div>
    </>
  );
};

export default NavMenuComponent;
