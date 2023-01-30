import styled from "styled-components";

export const EventWrapper = styled.section`
  /* justify-content: center;
  align-items: center; */
  margin: 70px 60px;
  padding: 0px;
  text-align: center;
  overflow: hidden;

 .view {
  padding: 10px;
  font-size: 17px;
  text-align: right;
  margin-top: 50px;
  font-weight: bold;
}
`;

export const EventTitleWrapper = styled.div`
  font-size: 48px;
  display: inline-block;
  position: relative;

&:after {
  content: "";
  height: 3.4px;
  width: 100px;
  background: #212529;
  align-items: center;
  position: absolute;
  margin: auto;
  bottom: -15px;
  left: 0;
  right: 0;
}`;

export const OwlCarouselWrapper = styled.div`
  margin-top: 0px;


 a {
  color: #87523d;
  background: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 7px;
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
}

.item {
  position: relative;

  &:hover .caption {
  display: block;
  margin: 0 auto;
}

&:hover .thumbnail {
  filter: blur(2px);
}
}

 .caption {
  display: none;
  max-width: 100%;
  background-color: #87523d;
  color: #ffffff;
  border-radius: 7px;
  padding: 20px;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.7s ease-in-out;
}

.thumbnail {
  filter: none;
  transition: filter 0.7s ease-in-out;
}
`;


// #events {
//   /* justify-content: center;
//   align-items: center; */
//   margin: 70px 60px;
//   padding: 0px;
//   text-align: center;
//   overflow: hidden;
// }

// .event-title {
//   font-size: 48px;
//   display: inline-block;
//   position: relative;
// }

// .event-title::after {
//   content: "";
//   height: 3.4px;
//   width: 100px;
//   background: #212529;
//   align-items: center;
//   position: absolute;
//   margin: auto;
//   bottom: -15px;
//   left: 0;
//   right: 0;
// }

// .owl-carousel-2 {
//   margin-top: 0px;
// }

// .owl-carousel-2 a {
//   color: #87523d;
//   background: rgb(255, 255, 255);
//   padding: 5px;
//   border-radius: 7px;
//   text-decoration: none;
//   font-size: 10px;
//   font-weight: bold;
// }

// .owl-carousel-2 .item {
//   position: relative;
// }

// .owl-carousel-2 .caption {
//   display: none;
//   max-width: 100%;
//   background-color: #87523d;
//   color: #ffffff;
//   border-radius: 7px;
//   padding: 20px;
//   position: absolute;
//   margin: 0 auto;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1;
//   transition: all 0.7s ease-in-out;
// }

// .owl-carousel-2 .item:hover .caption {
//   display: block;
//   margin: 0 auto;
// }

// .owl-carousel-2 .thumbnail {
//   filter: none;
//   transition: filter 0.7s ease-in-out;
// }

// .owl-carousel-2 .item:hover .thumbnail {
//   filter: blur(2px);
// }

// #events .view {
//   padding: 10px;
//   font-size: 17px;
//   text-align: right;
//   margin-top: 50px;
//   font-weight: bold;
// }

/* ---------------------media queries-------------------- */

// @media (max-width: 890px) {
//   .event-title {
//     font-size: 30px;
//   }

//   .event-title::after {
//     height: 2px;
//     width: 50px;
//     bottom: -10px;
//   }
// }

// @media (max-width: 400px) {
//   #events .view {
//     text-align: center;
//   }
// }

// @media (max-width: 600px) {
//   #events .view {
//     padding: 0px;
//   }
// }
