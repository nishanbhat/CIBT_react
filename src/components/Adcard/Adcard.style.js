import styled from "styled-components";

export const AdcardWrapper = styled.section`
  background: rgb(255, 255, 255);
  margin: 70px 60px;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 290px) {
    {
     padding: 0px;
   }

 @media (max-width: 430px) {
        display: grid;
     padding: 20px;
    }
`;

export const LftWrapper = styled.div`
  margin: auto;
  width: 40%;

  .sml {
    font-size: 16px;
  }

  @media (max-width: 1360px) {
    width: 60%;
  }

  @media (max-width: 430px) {
    margin: auto;
    width: 40%;
    padding: 10px;
    text-align: center;
  }

  @media (max-width: 890px) {
    .sml {
      font-size: 8px;
    }
    .lrg {
      font-size: 10px;
    }
  }
`;

export const RgtWrapper = styled.div`
  width: 40%;

  @media (max-width: 430px) {
     width: 40%;
     margin: auto;
     padding: 10px;
    }

  @media (max-width: 890px),
  @media (max-width: 1360px) {
     img {
    width: 100% !important;
    }
   
`;
