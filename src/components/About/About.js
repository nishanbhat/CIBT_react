import React from "react";
import { AboutWrapper, AboutTitleWrapper } from "./About.style";

export default function About() {
  return (
    <AboutWrapper>
      <AboutTitleWrapper>
        <b>About Us</b>
      </AboutTitleWrapper>
      <div className="txt">
        <p className="lft">
          Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
          tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor
          sit amet.Veniam quis notru exercit.
        </p>
        <div className="rgt">
          <img src="http://localhost:3000/assets/imgs/About-Us-04.png" alt="" />
        </div>
      </div>
    </AboutWrapper>
  );
}
