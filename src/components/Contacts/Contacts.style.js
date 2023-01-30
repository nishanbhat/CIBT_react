import styled from "styled-components";

export const ContactsWrapper = styled.section`
  margin: 70px 60px;
  padding: 0px;
  text-align: center;

  @media (max-width: 290px) {
    
      margin: 0;
    
`;

export const TitleContactWrapper = styled.div`
  font-size: 48px;
  display: inline-block;
  position: relative;
  /* margin: 50px; */
  text-align: center;

  @media (max-width: 890px) {
        font-size: 30px;
      }

  @media (max-width: 500px) {
     font-size: 15px;
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
      #contacts .lft {
        font-size: 10px;
      }
      
    }
  }
`;

export const ContactDivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LftWrapper = styled.div`
  width: 50%;
  margin-left: 0px;
  border-radius: 5px;
  /* background-color: #f2f2f2; */
  padding: 20px;
  margin: 30px;
  text-align: left;

  @media (max-width: 290px) {
    padding: 0px;
  }

  @media (max-width: 890px) {
    font-size: 10px;
  }
`;

export const RgtWrapper = styled.div`
  width: 40%;
  height: 80%;

  img {
    max-width: 100%;
  }
`;

export const InputWrapper = styled.input/* .attrs({
  type: "text",
}) */ `
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  input[type="submit"] {
    background-color: #87523d;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const TextAreaWrapper = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const ButtonWrapper = styled.button`
  background-color: #87523d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

