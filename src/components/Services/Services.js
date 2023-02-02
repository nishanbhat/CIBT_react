import React from "react";
import {
  ServicesWrapper,
  TitleServicesWrapper,
  GridContainerWrapper,
  ServiceBoxWrapper,
  ContentWrapper,
  Imagewrapper,
} from "./Services.style";

export default function Services() {
  return (
    <ServicesWrapper>
      <TitleServicesWrapper>
        <b>Our Services</b>
      </TitleServicesWrapper>
      <GridContainerWrapper>
        <ServiceBoxWrapper>
          <Imagewrapper
            src="http://localhost:3000/assets/imgs/badge_grey.png"
            alt=""
          />
          <ContentWrapper>
            <div className="icon">
              <i className="fa-solid fa-book"></i>
            </div>
            <div className="service-text">
              <b>Excellent Courses</b>
            </div>
          </ContentWrapper>
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <Imagewrapper
            src="http://localhost:3000/assets/imgs/badge_grey.png"
            alt=""
          />
          <ContentWrapper>
            <div className="icon">
              <i className="fa-solid fa-list"></i>
            </div>
            <div className="service-text">
              <b>Indoor Courses</b>
            </div>
          </ContentWrapper>
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <Imagewrapper
            src="http://localhost:3000/assets/imgs/badge_grey.png"
            alt=""
          />
          <ContentWrapper>
            <div className="icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="service-text">
              <b>Amazing Classes</b>
            </div>
          </ContentWrapper>
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <Imagewrapper
            src="http://localhost:3000/assets/imgs/badge_grey.png"
            alt=""
          />
          <ContentWrapper>
            <div className="icon">
              <i className="fa-solid fa-person-chalkboard"></i>
            </div>
            <div className="service-text">
              <b>Exceptional Teachers</b>
            </div>
          </ContentWrapper>
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <Imagewrapper
            src="http://localhost:3000/assets/imgs/badge_grey.png"
            alt=""
          />
          <ContentWrapper>
            <div className="icon">
              <i className="fa-sharp fa-solid fa-calendar"></i>
            </div>
            <div className="service-text">
              <b>Top Program</b>
            </div>
          </ContentWrapper>
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <Imagewrapper
            src="http://localhost:3000/assets/imgs/badge_grey.png"
            alt=""
          />
          <ContentWrapper>
            <div className="icon">
              <i className="fa-sharp fa-solid fa-graduation-cap"></i>
            </div>
            <div className="service-text">
              <b>Graduate for Success</b>
            </div>
          </ContentWrapper>
        </ServiceBoxWrapper>
      </GridContainerWrapper>
    </ServicesWrapper>
  );
}
