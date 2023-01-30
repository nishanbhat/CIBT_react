import styled from "styled-components";

export const ReviewWrapper = styled.section`
  margin: 70px 60px;
  padding: 50px;
  font-size: 17px;
  margin-top: 50px;
  // display: grid;
  // grid-direction: column;
  justify-content: center;
  text-align: center;
`;

export const TitleReviewWrapper = styled.div`
  font-size: 48px;
  display: inline-block;
  position: relative;
  /* margin: 20px; */

  @media (max-width: 890px) {
    font-size: 30px;
  }

  &::after {
    content: "";
    height: 3px;
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
      bottom: 0px;
    }
  }
`;

export const TxtWrapper = styled.div`
  font-size: 20px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  @media (max-width: 890px) {
    margin: 10px;
    font-size: 10px;
  }
`;
export const LftWrapper = styled.p`
  width: 50%;
  margin-left: 0px;
`;
export const RgtWrapper = styled.div`
  width: 20%;
  height: 80%;

  > img {
    max-width: 100%;
  }
`;

export const ArrowRightWrapper = styled.div`
  font-size: 2.5em;
  position: absolute;
  right: 3.7%;
  // margin-top: 290px;
  color: #aaacb4;
`;
export const ArrowLeftWrapper = styled.div`
  font-size: 2.5em;
  position: absolute;
  left: 3.7%;
  // margin-top: 290px;
  color: #aaacb4;
`;
export const ViewWrapper = styled.div`
  padding: 10px;
  font-size: 17px;
  text-align: left;
  margin-top: 50px;
  font-weight: bold;

  a {
    color: #87523d;
  }
`;

// @media (max-width: 890px) {

//   .title-review {
//     font-size: 30px;
//   }

//   .title-review::after {
//     height: 2px;
//     width: 50px;
//     bottom: 0px;
//   }

//   #reviews .txt {
//     margin: 10px;
//     font-size: 10px;
//   }

// #reviews {
//   margin: 70px 60px;
//   padding: 50px;
//   font-size: 17px;
//   text-align: right;
//   margin-top: 50px;
//   display: grid;
//   grid-direction: column;
//   justify-content: center;
//   text-align: center;
// }

// .title-review {
//   font-size: 48px;
//   display: inline-block;
//   position: relative;
//   /* margin: 20px; */
// }

// .title-review::after {
//   content: "";
//   height: 3px;
//   width: 100px;
//   background: #212529;
//   position: absolute;
//   margin: auto;
//   bottom: -15px;
//   left: 0;
//   right: 0;
// }

// #reviews .txt {
//   font-size: 20px;
//   margin-top: 40px;
// }

// #reviews .lft {
//   grid-column: 1;
//   width: 50%;
//   margin-left: 0px;
// }

// #reviews .rgt {
//   grid-column: 2;
//   width: 30%;
//   height: 80%;
// }

// #reviews .rgt img {
//   max-width: 100%;
// }

// #reviews .arrowright {
//   font-size: 2.5em;
//   position: absolute;
//   right: 3.7%;
//   /* margin-top: 290px; */
//   color: #aaacb4;
// }

// #reviews .arrowleft {
//   font-size: 2.5em;
//   position: absolute;
//   left: 3.7%;
//   /* margin-top: 290px; */
//   color: #aaacb4;
// }

// #reviews .view {
//   padding: 10px;
//   font-size: 17px;
//   text-align: left;
//   margin-top: 50px;
//   font-weight: bold;
// }
