import styled from "styled-components";

export const EnrollWrapper = styled.section`
  background: #87523d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 395px;
  width: 100%;
  text-align: center;
  color: #fff;

  .text {
  font-size: 40px;
}

@media (max-width: 890px) {
    height: 200px;
  
}


`
export const ButtonWrapper = styled.button`
  font-size: 20px;
    color: #87523d;

  padding: 10px;
  margin: 10px;
  border-radius: 7px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    opacity: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

// #enroll {
//   background: #87523d;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 395px;
//   width: 100%;
//   text-align: center;
//   color: #fff;
// }

// .text {
//   font-size: 40px;
// }

// .button {
//   font-size: 20px;
//   color: #87523d;

//   padding: 10px;
//   margin: 10px;
//   border-radius: 7px;
//   border: none;
//   cursor: pointer;
// }

// .button:hover {
//   background: #ffffff;
//   opacity: 100%;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// }

/* ------------media queries------------ */

// @media (max-width: 890px) {
//   #enroll {
//     height: 200px;
//   }
// }

// @media (max-width: 1464px) {
//   .enroll-now li {
//     display: none;
//   }
//   .enroll-now i {
//     font-size: 40px !important;
//   }
// }
