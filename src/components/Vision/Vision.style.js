import styled from "styled-components";


export const VisionWrapper = styled.section`
  margin: 70px 60px;
  padding: 0px;
  display: grid;
  grid-direction: column;
  justify-content: space-between;
  text-align: center;
`;
  
export const TitleVisionWrapper = styled.div`
  
  font-size: 48px;
  display: inline-block;
  position: relative;

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
  height: 1px;
  width: 50px;
  bottom: 0px;
  }
}


`;
  
export const TxtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  text-align: left;

  @media (max-width: 890px) {
    margin: 10px;
    font-size: 10px;
  }

`;

export const RgtWrapper = styled.div`
  width: 30%;
  height: 80%;


> img {
  max-width: 100%;
}
`;

export const LftWrapper = styled.div`
  width: 50%;
  margin-left: 0px;

`;



// @media (max-width: 890px) {
//   .title-vision {
//     font-size: 30px;
//   }

//   .title-vision::after {
//     height: 1px;
//     width: 50px;
//     bottom: 0px;
//   }

//   #vision .txt {
//     margin: 10px;
//     font-size: 10px;
//   }

// #vision {
//   margin: 70px 60px;
//   padding: 0px;
//   display: grid;
//   grid-direction: column;
//   justify-content: space-between;
//   text-align: center;
// }

// .title-vision {
//   font-size: 48px;
//   display: inline-block;
//   position: relative;
// }

// .title-vision::after {
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

// .txt {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 20px;
// }

// #vision .lft {
//   grid-column: 1;
//   width: 50%;
//   margin-left: 0px;
// }

// #vision .rgt {
//   grid-column: 2;
//   width: 30%;
//   height: 80%;
// }

// #vision .rgt img {
//   max-width: 100%;
// }