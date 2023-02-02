import styled from "styled-components";

export const BlogWrapper = styled.section`
margin: 70px 60px;
  padding: 0px;
  text-align: center;
  overflow: hidden;

  input[type="radio"] {
  display: none;
`;

export const BlogTitleWrapper = styled.div`
  font-size: 40px;
  display: inline-block;
  position: relative;
  /* margin: 30px; */

  @media (max-width: 890px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }

  &::after {
    content: "";
    height: 3.4px;
    width: 100px;
    background: #212529;
    position: absolute;
    margin: auto;
    bottom: -15px;
    left: 0;
    right: 0;

    @media (max-width: 890px) {
      height: 2px;
      width: 50px;
      bottom: -10px;
    }

    @media (max-width: 400px) {
      height: 1px;
      width: 25px;
      bottom: -5px;
    }
  }
`;

export const InputFiveWrapper = styled.input`
  &:checked ~ .blog-scroll-button .five {
    width: 35px;
  }
  &:checked ~ .blog-scroll-button .six {
    width: 15px;
  }
`;

export const InputSixWrapper = styled.input`
  &:checked ~ .blog-scroll-button .five {
    width: 15px;
  }
  &:checked ~ .blog-scroll-button .six {
    width: 35px;
  }

  &:checked ~ .blog-slider {
    margin-left: -100%;
  }
`;

export const BlogSliderWrapper = styled.div`
  width: 200%;
  display: flex;
  justify-content: space-evenly;
  transition: all 1s ease;
  margin-top: -50px;
`;

export const BlogBoxDivWrapper = styled.div`
  font-size: 20px;
  text-align: left;
  display: grid;
  width: 200%;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(1, minmax(265px, 1fr));
  margin-top: 50px;
  /* padding: 50px; */

  @media (max-width: 400px) {
    padding: 0 !important;
    // padding-top: 10px !important;
  }

  @media (max-width: 290px) {
    // padding: 0;
    // margin: 0 !important;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  // @media (max-width: 430px) {
  //   margin: -15px !important;
  // }

  @media (max-width: 890px) {
    font-size: 10px !important;
    margin-top: 30px !important;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1240px) {
    font-size: 20px;
    // margin: 50px;
    // padding: 50px;
  }
`;
export const BlogBoxWrapper = styled.div`
  min-height: 200px;
  margin: 15px;
  /* width: 273px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .blog-thumbnail img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 600px) {
    margin: 30px 0 10px 0 !important;
    // width: 100%;
  }

  @media (max-width: 768px) {
    // margin: 20px 0 10px 70px;
    // width: calc(100% / 2 - 10px);
  }

  // @media (max-width: 1240px) {
  //   min-height: 140px;
  // }
`;
export const BlogBoxTitleWrapper = styled.div`
  font-size: 15px;
  padding: 15px;

  p {
    margin-bottom: 0;
  }

  @media (max-width: 890px) {
    font-size: 10px;
  }
  @media (max-width: 1464px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    font-size: 10px !important;
  }
`;

export const BlogScrollButtomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;

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

export const ViewWrapper = styled.div`
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
    font-size: 10px;
  }
  @media (max-width: 600px) {
    padding: 0px;
  }
`;
