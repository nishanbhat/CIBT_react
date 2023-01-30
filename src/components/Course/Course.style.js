import styled from "styled-components";

export const CourseWrapper = styled.section`
  margin: 70px 60px;
  padding: 0px;
  text-align: center;
  overflow: hidden;

  input[type="radio"] {
  display: none;
  }

  .view {
    padding: 10px;
    font-size: 17px;
    text-align: right;
    margin-top: 50px;
    font-weight: bold;

    a {
    color: #87523d;
    text-decoration: none;
    padding: 10px;
    }

    @media (max-width: 400px) {
      text-align: center;
    }
    @media (max-width: 600px) {
      padding: 0px;
    }
  }
`;

export const TitleCourseWrapper = styled.div`
  font-size: 48px;
  display: inline-block;
  position: relative;

  &:after {
  content: "";
  height: 3px;
  width: 100px;
  background: #212529;
  position: absolute;
  margin: auto;
  bottom: -15px;
  left: 0;
  right: 0;
}
`;

export const CourseSliderWrapper = styled.div`
  width: 200%;
  display: flex;
  justify-content: space-evenly;
  transition: all 1s ease;
  margin-top: -50px;
`;

export const CourseBoxWrapper = styled.div`
  font-size: 20px;
  text-align: left;
  display: grid;
  width: 200%;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(1, minmax(265px, 1fr));
  margin-top: 50px;

  @media (max-width: 1240px) {
    font-size: 20px;
    /* margin: 50px; */
    /* padding: 50px; */
  }

  @media (max-width: 290px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }


`;
export const BoxWrapper = styled.div`
  min-height: 200px;
  margin: 15px;
  /* width: 270px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .stamp img {
  height: 50px;
}

.thumbnail img {
  height: 100%;
  width: 100%;
  /* margin-top: 50px; */
}

.coursetitle {
  font-size: 15px;
  padding: 15px;
  margin-top: 30px;

  @media (max-width: 1464px) {
   .coursetitle {
    font-size: 15px;
    padding: 10px;
  }
}

@media (max-width: 1240px) {
    min-height: 190px;
  }

  @media (max-width: 768px) {
    margin: 20px 0 10px 70px;
    width: calc(100% / 2 - 10px);
}
  @media (max-width: 600px) {
      margin: 20px 0 10px 0;
      width: 100%;
  }

  @media (max-width: 1464px) {
    min-height: 250px;
    margin: 10px;
  }

`;

export const CourseScrollButtomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
  /* background: #000; */

  label {
  height: 15px;
  width: 15px;
  border-radius: 20px;
  margin: 0 4px;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: #87523d;
  }
label.active {
  width: 35px;
}

@media (max-width: 400px) {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 50px;
}
`;

export const InputOneWrapper = styled.input`
&:checked ~ .course-scroll-button .one {
  width: 35px;
}
&:checked ~ .course-scroll-button .two {
  width: 15px;
}

`;

export const InputTwoWrapper = styled.input`
&:checked ~ .course-scroll-button .one {
  width: 15px;
}
&:checked ~ .course-scroll-button .two {
  width: 35px;
}
&:checked ~ .course-slider {
  margin-left: -100%;
}
`;



 