import React from 'react'
import {
  CourseWrapper,
  TitleCourseWrapper,
  CourseSliderWrapper,
  CourseBoxWrapper,
  BoxWrapper,
  CourseScrollButtomWrapper,
  InputOneWrapper,
  InputTwoWrapper,
} from "./Course.style";

export default function Course() {
  return (
    <CourseWrapper>
      <TitleCourseWrapper>
        <b>Course You may Have Interest On</b>
      </TitleCourseWrapper>
      <InputOneWrapper type="radio" name="dot" id="one" />
      <InputTwoWrapper type="radio" name="dot" id="two" />
      <div className="view">
        <a href="">
          <u>View All</u>
        </a>
      </div>
      <CourseSliderWrapper className="course-slider">
        <CourseBoxWrapper>
          <BoxWrapper>
            <div className="stamp">
              <img
                src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
                alt="stamp"
              />
            </div>
            <div className="thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/data-science.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="coursetitle">
              <b>Frontend Development</b>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="stamp">
              <img
                src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
                alt="stamp"
              />
            </div>
            <div className="thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/data-science.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="coursetitle">
              <b>MERN Stack Web Development</b>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="stamp">
              <img
                src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
                alt="stamp"
              />
            </div>
            <div className="thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/data-science.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="coursetitle">
              <b>Data Science with Python</b>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="stamp">
              <img
                src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
                alt="stamp"
              />
            </div>
            <div className="thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/data-science.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="coursetitle">
              <b>Digital Marketing Essentials</b>
            </div>
          </BoxWrapper>
        </CourseBoxWrapper>
        <CourseBoxWrapper>
          <BoxWrapper>
            <div className="stamp">
              <img
                src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
                alt="stamp"
              />
            </div>
            <div className="thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/data-science.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="coursetitle">
              <b>Frontend Development</b>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="stamp">
              <img
                src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
                alt="stamp"
              />
            </div>
            <div className="thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/data-science.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="coursetitle">
              <b>MERN Stack Web Development</b>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="stamp">
              <img
                src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
                alt="stamp"
              />
            </div>
            <div className="thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/data-science.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="coursetitle">
              <b>Data Science with Python</b>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="stamp">
              <img
                src="http://localhost:3000/assets/imgs/short-info-logo.jpg"
                alt="stamp"
              />
            </div>
            <div className="thumbnail">
              <img
                src="http://localhost:3000/assets/imgs/data-science.jpg"
                alt="thumbnail"
              />
            </div>
            <div className="coursetitle">
              <b>Digital Marketing Essentials</b>
            </div>
          </BoxWrapper>
        </CourseBoxWrapper>
      </CourseSliderWrapper>
      <CourseScrollButtomWrapper className="course-scroll-button">
        <label htmlFor="one" className=" active one"></label>
        <label htmlFor="two" className="two"></label>
      </CourseScrollButtomWrapper>
    </CourseWrapper>
  );
}
