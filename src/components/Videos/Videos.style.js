import styled from "styled-components";

export const VideosWrapper = styled.section`
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

    // @media (max-width: 400px) {
    //   text-align: center;
    // }

    a {
      color: #87523d;
      text-decoration: none;
      padding: 10px;

      @media (max-width: 400px) {
        text-align: center;
        font-size: 10px;
      }
      @media (max-width: 600px) {
        padding: 0px;
      }
    }
  }
`;

export const VideoTitleWrapper = styled.div`
  font-size: 40px;
  display: inline-block;
  position: relative;
  /* margin: 50px; */

  @media (max-width: 890px) {
    font-size: 30px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }

  &:after {
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

export const VideoSliderWrapper = styled.div`
  width: 200%;
  display: flex;
  justify-content: space-evenly;
  transition: all 1s ease;
  margin-top: -50px;

  @media (min-width: 400px) and (max-width: 860px) {
    padding-top: 20px !important;
  }
`;
export const VideoBoxDivWrapper = styled.div`
  font-size: 20px;
  text-align: left;
  display: grid;
  width: 200%;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(1, minmax(265px, 1fr));
  margin-top: 50px;
  /* padding: 50px; */

  @media (max-width: 290px) {
    margin: 0 !important;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 400px) {
    padding: 0 !important;
    // margin-top: 30px !important;
  }

  @media (max-width: 890px) {
    font-size: 10px;
    margin: 10px ;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1240px) {
    font-size: 20px;
  }
`;

export const VideoBoxWrapper = styled.div`
  min-height: 200px;
  margin: 10px;
  /* width: 270px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1240px) {
    min-height: 170px !important;
  }

  @media (max-width: 768px) {
    // margin: 20px 0 10px 70px;
    // width: calc(100% / 2 - 10px);
  }

  @media (max-width: 600px) {
    margin: 20px 0 10px 0 !important;
    width: 100%;
  }

  .video-thumbnail img {
    height: 100%;
    width: 100%;
  }

  .video-box-title {
    font-size: 15px;
    padding: 15px;
    margin-top: 10px;

    @media (max-width: 890px) {
      font-size: 10px;
    }

    @media (max-width: 768px) {
      font-size: 10px !important;
    }
  }
`;
export const VideoScrollButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  /* background: #000; */

  @media (max-width: 400px) {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 50px;
  }

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
`;

export const InputThreeWrapper = styled.input`
  &:checked ~ .video-scroll-button .three {
    width: 35px;
  }
  &:checked ~ .video-scroll-button .four {
    width: 15px;
  }
`;
export const InputFourWrapper = styled.input`
  &:checked ~ .video-scroll-button .three {
    width: 15px;
  }
  &:checked ~ .video-scroll-button .four {
    width: 35px;
  }
  &:checked ~ .video-slider {
    margin-left: -100%;
  }
`;

// @media (max-width: 400px) {
//   .video-box-div {
//     margin: 0 !important;
//     margin-top: 30px !important;
//   }
//   .video-scroll-button {
//     margin: 0;
//     margin-top: 20px;
//     margin-bottom: 50px;
//   }
// }

// @media (max-width: 600px) {
//   #course .view,
//   #videos .view,
//   #blogs .view,
//   #events .view,
//   .view a {
//     padding: 0px;
//   }
// }

// @media (max-width: 1240px) {
//   .video-box-div {
//     font-size: 20px;
//   }
//   .video-box {
//     min-height: 170px !important;
//   }

// @media (max-width: 890px) {
//   .video-box-div {
//     font-size: 10px;
//     margin: 10px !important;
//     display: grid;
//     justify-content: center;
//     align-items: center;
//   }

//   .video-box-title {
//     font-size: 10px;
//   }

// #videos {
//   margin: 70px 60px;
//   padding: 0px;
//   text-align: center;
//   overflow: hidden;
// }

// .video-title {
//   font-size: 48px;
//   display: inline-block;
//   position: relative;
//   /* margin: 50px; */
// }

// .video-title::after {
//   content: "";
//   height: 3.4px;
//   width: 100px;
//   background: #212529;
//   position: absolute;
//   margin: auto;
//   bottom: -15px;
//   left: 0;
//   right: 0;
// }

// .video-slider {
//   width: 200%;
//   display: flex;
//   justify-content: space-evenly;
//   transition: all 1s ease;
//   margin-top: -50px;
// }

// #four:checked ~ .video-slider {
//   margin-left: -100%;
// }

// .video-box-div {
//   font-size: 20px;
//   text-align: left;
//   display: grid;
//   width: 200%;
//   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//   grid-template-rows: repeat(1, minmax(265px, 1fr));
//   margin-top: 50px;
//   /* padding: 50px; */
// }

// .video-box {
//   min-height: 270px;
//   margin: 10px;
//   /* width: 270px; */
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// }

// .video-thumbnail img {
//   height: 100%;
//   width: 100%;
// }

// .video-box-title {
//   font-size: 15px;
//   padding: 15px;
//   margin-top: 10px;
// }

// .video-scroll-button {
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin: 20px;
//   /* background: #000; */
// }
// .video-scroll-button label {
//   height: 15px;
//   width: 15px;
//   border-radius: 20px;
//   margin: 0 4px;
//   cursor: pointer;
//   transition: all 0.5s ease;
//   background-color: #87523d;
// }
// .video-scroll-button label.active {
//   width: 35px;
// }
// #three:checked ~ .video-scroll-button .three {
//   width: 35px;
// }
// #three:checked ~ .video-scroll-button .four {
//   width: 15px;
// }
// #four:checked ~ .video-scroll-button .three {
//   width: 15px;
// }
// #four:checked ~ .video-scroll-button .four {
//   width: 35px;
// }
// input[type="radio"] {
//   display: none;
// }

// #videos .view {
//   padding: 10px;
//   font-size: 17px;
//   text-align: right;
//   margin-top: 50px;
//   font-weight: bold;
// }
