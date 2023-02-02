import styled from "styled-components";

export const AboutWrapper = styled.section`
  margin: 70px 60px;
  padding: 0px;
  // display: grid;
  // grid-direction: column;
  justify-content: space-between;
  text-align: center;

  .txt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    text-align: justify;

    @media (max-width: 890px) {
      margin: 10px;
      font-size: 10px;
      padding-top: 20px;
    }

    .lft {
      width: 50%;

        @media (max-width: 600px) {
          font-size: 8px;
        }
        @media (max-width: 400px) {
          font-size: 6px;
                width: 100%;
        }
        
    }   

  .rgt {
    width: 50%;
    height: 80%;

    @media (max-width: 400px) {
        width: 0%;
    }

    > img {
      max-width: 80%;
      float: right;  
    }
  }
`;

export const AboutTitleWrapper = styled.div`
  font-size: 40px;
  display: inline-block;
  position: relative;

  @media (max-width: 890px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
  // @media (max-width: 400px) {
  //   font-size: 10px;
  // }

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
      bottom: -10px;
    }

    @media (max-width: 400px) {
      height: 1px;
      width: 25px;
      bottom: -5px;
    }
  }
`;
