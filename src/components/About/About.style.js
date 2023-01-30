import styled from "styled-components";

export const AboutWrapper = styled.section`
  margin: 70px 60px;
  padding: 0px;
  display: grid;
  grid-direction: column;
  justify-content: space-between;
  text-align: center;

  .txt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    text-align: left;

    @media (max-width: 890px) {
      margin: 10px;
      font-size: 10px;
    }
    
  .lft {
    // grid-column: 1;
    width: 50%;
  }

  .rgt {
    // grid-column: 2;
    width: 50%;
    height: 80%;

    > img {
      max-width: 100%;
    }

    @media (max-width: 890px) {
      margin: 10px;
      font-size: 10px;
    }
    
  }
`;

export const AboutTitleWrapper = styled.div`
  font-size: 48px;
  display: inline-block;
  position: relative;

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
  }

  @media (max-width: 890px) {
    font-size: 30px;

    &::after {
      height: 1px;
      width: 50px;
      bottom: 0px;
    }
  }
`;
