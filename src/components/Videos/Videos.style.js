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

    a {
      color: #87523d;
      text-decoration: none;
      padding: 10px;
    }
  }
`;

export const VideoTitleWrapper = styled.div`
  font-size: 48px;
  display: inline-block;
  position: relative;
  /* margin: 50px; */


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
}`;

export const VideoSliderWrapper = styled.div`
  width: 200%;
  display: flex;
  justify-content: space-evenly;
  transition: all 1s ease;
  margin-top: -50px;
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
`;

export const VideoBoxWrapper = styled.div`
  min-height: 270px;
  margin: 10px;
  /* width: 270px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


.video-thumbnail img {
  height: 100%;
  width: 100%;
}

.video-box-title {
  font-size: 15px;
  padding: 15px;
  margin-top: 10px;
}`;
export const VideoScrollButtonWrapper = styled.div`
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
}`;

export const InputThreeWrapper = styled.input`
&:checked ~ .video-scroll-button .three {
  width: 35px;
}
&:checked ~ .video-scroll-button .four {
  width: 15px;
}`;
export const InputFourWrapper = styled.input`
&:checked ~ .video-scroll-button .three {
  width: 15px;
}
&:checked ~ .video-scroll-button .four {
  width: 35px;
}
&:checked ~ .video-slider {
  margin-left: -100%;
}`;



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